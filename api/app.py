from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Database

app = FastAPI(title="gadai-api")
db = Database()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    merkList:list = db.selectDistinct("merk")
    return {
        "status": "running",
        "merk": [merk[0] for merk in merkList]
    }
    
@app.get("/{merk}")
async def getMerk(merk:str):
    try:
        typeList:list = db.selectWhere("type", f"where merk = '{merk}'")
        return {
            "type": [tipe[0] for tipe in typeList]
        }
    except:
        return {
            "type": None
        }

@app.get("/{merk}/{type}")
async def getType(merk:str, type:str):
    try:
        modelList:list = db.selectWhere("model", f"where merk = '{merk}' and type = '{type}'")
        return {
            "model": [model[0] for model in modelList]
        }
    except KeyError:
        return {
            "model": None
        }
        
@app.get("/{merk}/{type}/{model}")
async def getModel(merk:str, type:str, model:str):
    try:
        ccList:list = db.selectWhere("cc", f"where merk = '{merk}' and model = '{model}'")
        print(ccList)
        return {
            "cc": [cc[0] for cc in ccList]
        }
    except KeyError:
        return {
            "cc": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}")
async def getCC(merk:str, type:str, model:str, cc:str):
    try:
        jenisList:list = db.selectWhere("jenis", f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}'")
        return {
            "jenis": [jenis[0] for jenis in jenisList]
        }
    except KeyError:
        return {
            "jenis": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}/{jenis}")
async def getJenis(merk:str, type:str, model:str, cc:str, jenis:str):
    try:
        bbmList:list = db.selectWhere("bbm", f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}' and jenis = '{jenis}'")
        return {
            "bbm": [bbm[0] for bbm in bbmList]
        }
    except KeyError:
        return {
            "bbm": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}")
async def getBBM(merk:str, type:str, model:str, cc:str, jenis:str, bbm:str):
    try:
        transmisiList:list = db.selectWhere("transmisi", f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}' and jenis = '{jenis}' and bbm = '{bbm}'")
        return {
            "transmisi": [transmisi[0] for transmisi in transmisiList]
        }
    except KeyError:
        return {
            "transmisi": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}/{transmisi}")
async def getTransmisi(merk:str, type:str, model:str, cc:str, jenis:str, bbm:str, transmisi:str):
    try:
        tahunList:list = db.selectWhere("[2023], [2022], [2021], [2020], [2019], [2018], [2017], [2016], [2015], [2014], [2013], [2012], [2011], [2010], [2009], [2008], [2007], [2006], [2005], [2004], [2003]",
                                        f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}' and jenis = '{jenis}' and bbm = '{bbm}' and transmisi = '{transmisi}'")
        tahun = []
        for i in range(len(tahunList[0])):
            if tahunList[0][i] > 0:
                tahun.append(str(2023-i))
            
        return {
            "tahun": tahun
        }
    except KeyError:
        return {
            "tahun": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}/{transmisi}/{tahun}")
async def getDetail(merk:str, type:str, model:str, cc:str, jenis:str, bbm:str, transmisi:str, tahun:str):
    try:
        detail:list = db.selectWhere(f"desc, code, [{tahun}]", f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}' and jenis = '{jenis}' and bbm = '{bbm}' and transmisi = '{transmisi}'")
        return {
            "harga": f"{detail[0][2]-detail[0][2]*20/100}00.000",
            "desc": f"{detail[0][0]}",
            "code": f"{detail[0][1]}"
        }
    except KeyError:
        return None
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", reload=True)