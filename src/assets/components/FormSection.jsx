import { useState, useRef, useEffect } from "react"
import Header2 from "./Header2"
import Header3 from "./Header3"
import SelectFormElement from "./SelectForm"
import Button from "./Button"
import SpecialContainer from "./SpecialContainer"
import InputFormElement from "./InputForm"
import FileFormElement from "./FileForm"
import TransportRequestDetail from "../../api/TransportRequestDetail"

const FormSection = () => {
    const merkSelect = useRef()
    const typeSelect = useRef()
    const modelSelect = useRef()
    const ccSelect = useRef()
    const jenisSelect = useRef()
    const bbmSelect = useRef()
    const transmisiSelect = useRef()
    const tahunSelect = useRef()

    const [curmerk, setMerk] = useState([])
    const [curtype, setType] = useState([])
    const [curmodel, setModel] = useState([])
    const [curcc, setCC] = useState([])
    const [curjenis, setJenis] = useState([])
    const [curbbm, setBBM] = useState([])
    const [curtransmisi, setTransmisi] = useState([])
    const [curtahun, setTahun] = useState([])
    const [curresult, setResult] = useState(null)
    const [detailSubmit, setDetailSubmit] = useState(false)

    const unitSelectedInput = useRef()
    const nikInput = useRef()
    const namaInput = useRef()
    const fotoFileInput = useRef()
    const fotoFileLabel = useRef()
    const noWaInput = useRef()

    const [fileName, setFileName] = useState("Upload Foto KTP Anda")

    const fileFormChange = () => {
        let currFileName = fotoFileInput.current.value.replace(/.*[\/\\]/, '')
        let sepFileName = currFileName.split(".")
        let fileExtension = sepFileName[sepFileName.length - 1]
        if (fileExtension == "png" || fileExtension == "jpg" || fileExtension == "jpeg") {
            setFileName(currFileName)
        } else if (sepFileName == "") {
            setFileName("Upload Foto KTP Anda")
        } else {
            fotoFileInput.current.value = ''
            fotoFileInput.current.value = null
            setFileName("Pastikan file berformat gambar (png, jpg, jpeg)")
        }
    }

    useEffect(() => {
        const getMerk = async () => {
            const resp = await TransportRequestDetail({merk:"/"})
            const data = await resp.json()
            setMerk(data.merk)
        }

        getMerk()
    }, [])

    const getType = async () => {
        const resp = await TransportRequestDetail({merk: "/"+merkSelect.current.value})
        if (resp.status == 200 && merkSelect.current.value != "") {
            const data = await resp.json()
            setType(data.type)
            setModel(null)
            setCC(null)
            setJenis(null)
            setBBM(null)
            setTransmisi(null)
            setTahun(null)
            setDetailSubmit(false)
            setResult(null)
        } else {
            setResult(null)
            setType(null)
            setModel(null)
            setCC(null)
            setJenis(null)
            setBBM(null)
            setTransmisi(null)
            setTahun(null)
            setDetailSubmit(false)
        }
    }

    const getModel = async () => {
        const resp = await TransportRequestDetail({merk: "/"+merkSelect.current.value, type: "/"+typeSelect.current.value})
        if (resp.status == 200) {
            const data = await resp.json()
            if (data.model != undefined) {
                setModel(data.model)
                setCC(null)
                setJenis(null)
                setBBM(null)
                setTransmisi(null)
                setTahun(null)
                setResult(null)
            } else {
                setResult(null)
                setModel(null)
                setCC(null)
                setJenis(null)
                setBBM(null)
                setTransmisi(null)
                setTahun(null)
                setDetailSubmit(false)
            }
        }
    }

    const getCC = async () => {
        const resp = await TransportRequestDetail({merk: "/"+merkSelect.current.value,
                                                    type: "/"+typeSelect.current.value,
                                                    model: "/"+modelSelect.current.value})
        if (resp.status == 200) {
            const data = await resp.json()
            if (data.cc != undefined) {
                ccSelect.current.value = ""
                setCC(data.cc)
                setJenis(null)
                setBBM(null)
                setTransmisi(null)
                setTahun(null)
                setResult(null)
            } else {
                setResult(null)
                setCC(null)
                ccSelect.current.value = ""
                setJenis(null)
                setBBM(null)
                setTransmisi(null)
                setTahun(null)
                setDetailSubmit(false)
            }
        }
    }

    const getJenis = async () => {
        const resp = await TransportRequestDetail({merk: "/"+merkSelect.current.value,
                                                    type: "/"+typeSelect.current.value,
                                                    model: "/"+modelSelect.current.value,
                                                    cc: "/"+ccSelect.current.value})
        if (resp.status == 200) {
            const data = await resp.json()
            if (data.jenis != undefined) {
                setJenis(data.jenis)
                setBBM(null)
                setTransmisi(null)
                setTahun(null)
                setResult(null)
            } else {
                setResult(null)
                setJenis(null)
                setBBM(null)
                setTransmisi(null)
                setTahun(null)
                setDetailSubmit(false)
            }
        }
    }

    const getBBM = async () => {
        const resp = await TransportRequestDetail({merk: "/"+merkSelect.current.value,
                                                    type: "/"+typeSelect.current.value,
                                                    model: "/"+modelSelect.current.value,
                                                    cc: "/"+ccSelect.current.value,
                                                    jenis: "/"+jenisSelect.current.value})
        if (resp.status == 200) {
            const data = await resp.json()
            if (data.bbm != undefined) {
                setBBM(data.bbm)
                setTransmisi(null)
                setTahun(null)
                setResult(null)
            } else {
                setResult(null)
                setBBM(null)
                setTransmisi(null)
                setTahun(null)
                setDetailSubmit(false)
            }
        }
    }

    const getTransmisi = async () => {
        const resp = await TransportRequestDetail({merk: "/"+merkSelect.current.value,
                                                    type: "/"+typeSelect.current.value,
                                                    model: "/"+modelSelect.current.value,
                                                    cc: "/"+ccSelect.current.value,
                                                    jenis: "/"+jenisSelect.current.value,
                                                    bbm: "/"+bbmSelect.current.value})
        if (resp.status == 200) {
            const data = await resp.json()
            if (data.transmisi != undefined) {
                setTransmisi(data.transmisi)
                setTahun(null)
                setResult(null)
            } else {
                setResult(null)
                setTransmisi(null)
                setTahun(null)
                setDetailSubmit(false)
            }
        }
    }

    const getTahun = async () => {
        const resp = await TransportRequestDetail({merk: "/"+merkSelect.current.value,
                                                    type: "/"+typeSelect.current.value,
                                                    model: "/"+modelSelect.current.value,
                                                    cc: "/"+ccSelect.current.value,
                                                    jenis: "/"+jenisSelect.current.value,
                                                    bbm: "/"+bbmSelect.current.value,
                                                    transmisi: "/"+transmisiSelect.current.value})
        if (resp.status == 200) {
            const data = await resp.json()
            if (data.tahun != undefined) {
                setTahun(data.tahun)
                setResult(null)
            } else {
                setResult(null)
                setTahun(null)
                setDetailSubmit(false)
            }
        }
    }

    const getFinalDetail = async () => {
        const resp = await TransportRequestDetail({merk: "/"+merkSelect.current.value,
                                                    type: "/"+typeSelect.current.value,
                                                    model: "/"+modelSelect.current.value,
                                                    cc: "/"+ccSelect.current.value,
                                                    jenis: "/"+jenisSelect.current.value,
                                                    bbm: "/"+bbmSelect.current.value,
                                                    transmisi: "/"+transmisiSelect.current.value,
                                                    tahun: "/"+tahunSelect.current.value})
        if (resp.status == 200 && tahunSelect.current.value != "") {
            const data = await resp.json()
            if (data.harga != undefined) {
                setDetailSubmit(false)
                setResult(data)
            } else {
                setResult(null)
                setDetailSubmit(false)
            }
        } else {
            setResult(false)
            setDetailSubmit(false)
        }
    }

    return (
        <section id="pinjaman" className="flex flex-col">
            <Header2 text={"Pengecekan dan Pengajuan Pinjaman"} />
            <div className="formContainer flex flex-row" >
                <div className="detailForm flex flex-col">
                    <Header3 text={"Masukan Detail Kendaraan Anda"}/>
                    <div className="form flex flex-col">
                        <div className="flex flex-row">
                            <SelectFormElement labelText={"Merk"} optionsList={curmerk} funcChage={async () => await getType()} elemRef={merkSelect} />
                            <SelectFormElement labelText={"Tipe"} optionsList={curtype} funcChage={async () => await getModel()} elemRef={typeSelect} />
                        </div>
                        <div className="flex flex-row">
                            <SelectFormElement labelText={"Model"} optionsList={curmodel} funcChage={async () => await getCC()} elemRef={modelSelect} />
                            <SelectFormElement labelText={"CC"} optionsList={curcc} funcChage={async () => await getJenis()} elemRef={ccSelect} />
                            <SelectFormElement labelText={"Jenis"} optionsList={curjenis} funcChage={async () => await getBBM()} elemRef={jenisSelect} />
                        </div>
                        <div className="flex flex-row">
                            <SelectFormElement labelText={"BBM"} optionsList={curbbm} funcChage={async () => await getTransmisi()} elemRef={bbmSelect} />
                            <SelectFormElement labelText={"Transmisi"} optionsList={curtransmisi} funcChage={async () => await getTahun()} elemRef={transmisiSelect} />
                            <SelectFormElement labelText={"Tahun"} optionsList={curtahun} funcChage={async () => await getFinalDetail()} elemRef={tahunSelect} />
                        </div>
                        <div className="button-section flex flex-row">
                            {curresult ?
                                <Button btn={"cta"} text={"Hitung Limit Anda"} funcClick={() => {
                                    setDetailSubmit(true)
                                    unitSelectedInput.current.value = curresult.desc + " Tahun " + tahunSelect.current.value
                                    nikInput.current.disabled = false
                                    namaInput.current.disabled = false
                                    fotoFileLabel.current.className = "filePlace flex false"
                                    noWaInput.current.disabled = false
                                }} />
                                : <Button btn={"cta disabled"} text={"Hitung Limit Anda"}/>
                            }
                            <Button btn={"underline-btn"} text={"Ada Masalah? Hubungi Kami"} funcClick={() => {document.getElementById("kontak").scrollIntoView({block: "center"});}} />
                        </div>
                    </div>
                    {detailSubmit && curresult ?
                        <SpecialContainer text={`Selamat! Anda memiliki <b>limit pinjaman Rp ${curresult.harga}</b> dari <b>${curresult.desc} Tahun ${tahunSelect.current.value}</b> milik anda`} bgColor={"rgb(64, 165, 120)"}/>
                        : null
                    }
                </div>
                <div className="userForm flex flex-col">
                    <Header3 text={"Masukan Data Diri Anda"}/>
                    <div className="form flex flex-col">
                        <div className="flex flex-row">
                            <InputFormElement labelText={"Unit Yang Dipilih"} elemRef={unitSelectedInput} />
                        </div>
                        <div className="flex flex-row">
                            <InputFormElement labelText={"NIK"} elemRef={nikInput} />
                            <InputFormElement labelText={"Nama (Sesuai KTP)"} elemRef={namaInput} />
                        </div>
                        <div className="flex flex-row">
                            <FileFormElement labelText={"Foto KTP"} fileName={fileName} labelRef={fotoFileLabel}/>
                            {detailSubmit && curresult ?
                                <input id="ktp" name="ktp" type="file" ref={fotoFileInput} onChange={fileFormChange} accept="image/png, image/jpg, image/jpeg"/>
                                : null
                            }
                        </div>
                        <div className="flex flex-row">
                            <InputFormElement labelText={"Nomor Whatsapp"} elemRef={noWaInput}/>
                        </div>
                        <span>*Setelah data dikirimkan, tim kami akan menghubungi anda</span>
                        <div className="button-section flex flex-row">
                            {curresult && detailSubmit ?
                                <Button btn={"cta"} text={"Ajukan Sekarang"} />
                                : <Button btn={"cta disabled"} text={"Ajukan Sekarang"} />
                            }
                            <Button btn={"underline-btn"} text={"Lihat Syarat & Ketentuan"} funcClick={() => {document.getElementById("syarat").scrollIntoView({block: "center"});}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormSection