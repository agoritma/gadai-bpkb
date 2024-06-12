import { useState, useRef, useEffect } from "react"
import Header2 from "./Header2"
import Header3 from "./Header3"
import SelectFormElement from "./SelectForm"
import Button from "./Button"
import SpecialContainer from "./SpecialContainer"
import InputFormElement from "./InputForm"
import FileFormElement from "./FileForm"

const FormSection = () => {
    const merkSelect = useRef()
    const tipeSelect = useRef()
    const modelSelect = useRef()
    const ccSelect = useRef()
    const jenisSelect = useRef()
    const bbmSelect = useRef()
    const transmisiSelect = useRef()
    const tahunSelect = useRef()
    const [limit, setLimit] = useState({
        "text": "halo"
    })
    const [found, setFound] = useState()

    const unitSelectedInput = useRef()
    const nikInput = useRef()
    const namaInput = useRef()
    const fotoFileInput = useRef()
    const noWaInput = useRef()

    const [fileName, setFileName] = useState("Upload Foto KTP Anda")

    let dummyOptionList = [
        "Honda asdas da asd asd asdas d",
        "Suzuki",
        "Asep"
    ]

    const formDetailSubmit = () => {
        merkSelect.current.value = "-"
        setFound(false)
    }

    const selectFromChange = (self) => {
        setFound(true)
        console.log(self.value)
    }

    useEffect(() => {
        const initials = () => {
            
        }

        initials()
    }, [])

    const openFileForm = () => {
        fotoFileInput.current.click()
    }

    return (
        <section id="pinjaman" className="flex flex-col">
            <Header2 text={"Pengecekan dan Pengajuan Pinjaman"} />
            <div className="formContainer flex flex-row" >
                <div className="detailForm flex flex-col">
                    <Header3 text={"Masukan Detail Kendaraan Anda"}/>
                    <div className="form flex flex-col">
                        <div className="flex flex-row">
                            <SelectFormElement labelText={"Merk"} optionsList={dummyOptionList} funcChage={() => selectFromChange(merkSelect.current)} isDisabled={false} elemRef={merkSelect} />
                            <SelectFormElement labelText={"Tipe"} optionsList={dummyOptionList} funcChage={() => selectFromChange(tipeSelect.current)} elemRef={tipeSelect} />
                        </div>
                        <div className="flex flex-row">
                            <SelectFormElement labelText={"Model"} optionsList={dummyOptionList} funcChage={() => selectFromChange(modelSelect.current)} elemRef={modelSelect} />
                            <SelectFormElement labelText={"CC"} optionsList={dummyOptionList} funcChage={() => selectFromChange(ccSelect.current)} elemRef={ccSelect} />
                            <SelectFormElement labelText={"Jenis"} optionsList={dummyOptionList} funcChage={() => selectFromChange(jenisSelect.current)} elemRef={jenisSelect} />
                        </div>
                        <div className="flex flex-row">
                            <SelectFormElement labelText={"BBM"} optionsList={dummyOptionList} funcChage={() => selectFromChange(bbmSelect.current)} elemRef={bbmSelect} />
                            <SelectFormElement labelText={"Transmisi"} optionsList={dummyOptionList} funcChage={() => selectFromChange(transmisiSelect.current)} elemRef={transmisiSelect} />
                            <SelectFormElement labelText={"Tahun"} optionsList={dummyOptionList} funcChage={() => selectFromChange(tahunSelect.current)} elemRef={tahunSelect} />
                        </div>
                        <div className="button-section flex flex-row">
                            {found === true ?
                                <Button btn={"cta"} text={"Hitung Limit Anda"} funcClick={formDetailSubmit}/>
                                : <Button btn={"cta disabled"} text={"Hitung Limit Anda"}/>
                            }
                            <Button btn={"underline-btn"} text={"Ada Masalah? Hubungi Kami"} url={"#"} />
                        </div>
                    </div>
                    {limit.text ?
                        <SpecialContainer text={limit.text} bgColor={"rgb(64, 165, 120)"}/>
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
                            <InputFormElement isDisabled={false} typeInput="number" labelText={"NIK"} elemRef={nikInput} />
                            <InputFormElement labelText={"Nama (Sesuai KTP)"} elemRef={namaInput} />
                        </div>
                        <div className="flex flex-row">
                            <FileFormElement labelText={"Foto KTP"} elemRef={fotoFileInput} />
                        </div>
                        <div className="flex flex-row">
                            <InputFormElement labelText={"Nomor Whatsapp"} elemRef={noWaInput}/>
                        </div>
                        <span>*Setelah data dikirimkan, tim kami akan menghubungi anda</span>
                        <div className="button-section flex flex-row">
                            <Button btn={"cta"} text={"Ajukan Sekarang"} funcClick={formDetailSubmit}/>
                            <Button btn={"underline-btn"} text={"Lihat Syarat & Ketentuan"} funcClick={() => {document.getElementById("syarat").scrollIntoView({block: "center"});}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormSection