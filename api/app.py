from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.requests import Request
from database import Database
from typing import Annotated
import os
from dotenv import load_dotenv
import aiohttp
from slowapi.errors import RateLimitExceeded
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

load_dotenv()
limiter = Limiter(key_func=get_remote_address)
app = FastAPI(title="gadai-api")
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
db = Database()
token = os.environ.get('BOT_TOKEN')
chatid = os.environ.get('ADMIN_CHAT_ID')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "server is running"
    }

@app.get("/api/kendaraan")
@limiter.limit("200/minute")
async def root(request: Request):
    merkList:list = db.selectDistinct("merk")
    return {
        "status": "running",
        "merk": [merk[0] for merk in merkList]
    }
    
@app.get("/api/kendaraan/{merk}")
@limiter.limit("200/minute")
async def getMerk(request: Request, merk:str):
    try:
        typeList:list = db.selectWhere("type", f"where merk = '{merk}'")
        return {
            "type": [tipe[0] for tipe in typeList]
        }
    except:
        return {
            "type": None
        }

@app.get("/api/kendaraan/{merk}/{type}")
@limiter.limit("200/minute")
async def getType(request: Request,merk:str, type:str):
    try:
        modelList:list = db.selectWhere("model", f"where merk = '{merk}' and type = '{type}'")
        return {
            "model": [model[0] for model in modelList]
        }
    except KeyError:
        return {
            "model": None
        }
        
@app.get("/api/kendaraan/{merk}/{type}/{model}")
@limiter.limit("200/minute")
async def getModel(request: Request,merk:str, type:str, model:str):
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
        
@app.get("/api/kendaraan/{merk}/{type}/{model}/{cc}")
@limiter.limit("200/minute")
async def getCC(request: Request,merk:str, type:str, model:str, cc:str):
    try:
        jenisList:list = db.selectWhere("jenis", f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}'")
        return {
            "jenis": [jenis[0] for jenis in jenisList]
        }
    except KeyError:
        return {
            "jenis": None
        }
        
@app.get("/api/kendaraan/{merk}/{type}/{model}/{cc}/{jenis}")
@limiter.limit("200/minute")
async def getJenis(request: Request,merk:str, type:str, model:str, cc:str, jenis:str):
    try:
        bbmList:list = db.selectWhere("bbm", f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}' and jenis = '{jenis}'")
        return {
            "bbm": [bbm[0] for bbm in bbmList]
        }
    except KeyError:
        return {
            "bbm": None
        }
        
@app.get("/api/kendaraan/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}")
@limiter.limit("200/minute")
async def getBBM(request: Request,merk:str, type:str, model:str, cc:str, jenis:str, bbm:str):
    try:
        transmisiList:list = db.selectWhere("transmisi", f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}' and jenis = '{jenis}' and bbm = '{bbm}'")
        return {
            "transmisi": [transmisi[0] for transmisi in transmisiList]
        }
    except KeyError:
        return {
            "transmisi": None
        }
        
@app.get("/api/kendaraan/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}/{transmisi}")
@limiter.limit("200/minute")
async def getTransmisi(request: Request,merk:str, type:str, model:str, cc:str, jenis:str, bbm:str, transmisi:str):
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
        
@app.get("/api/kendaraan/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}/{transmisi}/{tahun}")
@limiter.limit("200/minute")
async def getDetail(request: Request, merk:str, type:str, model:str, cc:str, jenis:str, bbm:str, transmisi:str, tahun:str):
    try:
        detail:list = db.selectWhere(f"desc, code, [{tahun}]", f"where merk = '{merk}' and type = '{type}' and model = '{model}' and cc = '{cc}' and jenis = '{jenis}' and bbm = '{bbm}' and transmisi = '{transmisi}'")
        return {
            "harga": f"{detail[0][2]-detail[0][2]*20/100}00.000",
            "desc": f"{detail[0][0]}",
            "code": f"{detail[0][1]}"
        }
    except KeyError:
        return None
            
@app.post("/api/userdetail")
@limiter.limit("10/minute")
async def uploadFile(request: Request, unit: Annotated[str, Form()] ,name:Annotated[str, Form()], nik:Annotated[str, Form()], nomor:Annotated[str, Form()], file:UploadFile = File(...)):
    unitDesc = " ".join(unit.split(" ")[:-2])
    unitSelect = db.selectWhere("*", f"where desc = '{unitDesc}'")
    if (unitSelect):
        content = file.file.read()
        if (nomor.startswith("0")):
            nomor = "62" + nomor[1:]
        caption = f"Unit: {unit}%0ANama Pengaju: {name}%0ANIK: {nik}%0ANomor Whatsapp: wa.me/{nomor}"
        URL = f"https://api.telegram.org/bot{token}/sendPhoto?chat_id={chatid}&caption={caption}"
        async with aiohttp.ClientSession() as session:
            form = aiohttp.FormData()
            form.add_field('photo', content)
            async with session.post(URL, data=form) as resp:
                if (resp.status == 200):
                    pass
                else:
                    raise HTTPException(500, "FAILED_SEND_DATA")
    else:
        raise HTTPException(400, "WRONG_UNIT")
    file.file.close()
    
    return {"message": f"DONE_SEND"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", reload=True)