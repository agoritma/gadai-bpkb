from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI(title="gadai-api")
dummyData:dict = {}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    global dummyData
    with open("dummy.json", "r") as f:
        dummyData = json.load(f)
    return {
        "status": "running",
        "merk": [key for key, val in dummyData.items()]
    }
    
@app.get("/{merk}")
async def getMerk(merk:str):
    try:
        return {
            "type": [key for key, val in dummyData[merk.upper()].items()]
        }
    except:
        return {
            "type": None
        }

@app.get("/{merk}/{type}")
async def getType(merk:str, type:str):
    try:
        return {
            "model": [key for key, val in dummyData[merk.upper()][type.upper()].items()]
        }
    except KeyError:
        return {
            "model": None
        }
        
@app.get("/{merk}/{type}/{model}")
async def getType(merk:str, type:str, model:str):
    try:
        return {
            "cc": [key for key, val in dummyData[merk.upper()][type.upper()][model.upper()].items()]
        }
    except KeyError:
        return {
            "cc": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}")
async def getCC(merk:str, type:str, model:str, cc:str):
    try:
        return {
            "jenis": [key for key, val in dummyData[merk.upper()][type.upper()][model.upper()][cc].items()]
        }
    except KeyError:
        return {
            "jenis": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}/{jenis}")
async def getJenis(merk:str, type:str, model:str, cc:str, jenis:str):
    try:
        return {
            "bbm": [key for key, val in dummyData[merk.upper()][type.upper()][model.upper()][cc][jenis.upper()].items()]
        }
    except KeyError:
        return {
            "bbm": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}")
async def getBBM(merk:str, type:str, model:str, cc:str, jenis:str, bbm:str):
    try:
        return {
            "transmisi": [key for key, val in dummyData[merk.upper()][type.upper()][model.upper()][cc][jenis.upper()][bbm.capitalize()].items()]
        }
    except KeyError:
        return {
            "transmisi": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}/{transmisi}")
async def getTransmisi(merk:str, type:str, model:str, cc:str, jenis:str, bbm:str, transmisi:str):
    try:
        return {
            "tahun": [key for key, val in dummyData[merk.upper()][type.upper()][model.upper()][cc][jenis.upper()][bbm.capitalize()][transmisi.upper()].items()]
        }
    except KeyError:
        return {
            "tahun": None
        }
        
@app.get("/{merk}/{type}/{model}/{cc}/{jenis}/{bbm}/{transmisi}/{tahun}")
async def getDetail(merk:str, type:str, model:str, cc:str, jenis:str, bbm:str, transmisi:str, tahun:str):
    try:
        return dummyData[merk.upper()][type.upper()][model.upper()][cc][jenis.upper()][bbm.capitalize()][transmisi.upper()][tahun]
    except KeyError:
        return None
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", reload=True)