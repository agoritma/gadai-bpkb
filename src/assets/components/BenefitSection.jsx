import Header2 from "./Header2"
import SpecialContainer from "./SpecialContainer"
import boltIcon from '../boltIcon.svg'
import guardIcon from '../guardIcon.svg'
import lockIcon from '../lockIcon.svg'
import trophyIcon from '../trophyIcon.svg'

const BenefitSection = () => {
    return (
        <article id="keunggulan">
            <Header2 text="Alasan Mengapa Anda Harus Memilih ...." />
            <div className="benefit flex flex-row flex-wrap">
                <SpecialContainer h3="Cepat dan Mudah" text="Lorem ipsum dolor sit amet consectetur. Quam vulputate pharetra at enim vehicula porttitor porttitor." iconPath={boltIcon} bgColor={"#FF7E00"} column="col-2"/>
                <SpecialContainer h3="Suku Bunga Bersaing" text="Lorem ipsum dolor sit amet consectetur. Quam vulputate pharetra at enim vehicula porttitor porttitor." iconPath={trophyIcon} bgColor={"#8B39FF"} column="col-2"/>
                <SpecialContainer h3="Data Pribadi Terjamin" text="Lorem ipsum dolor sit amet consectetur. Quam vulputate pharetra at enim vehicula porttitor porttitor." iconPath={lockIcon} bgColor={"#1F66FF"} column="col-2"/>
                <SpecialContainer h3="Diawasi Langsung OJK" text="Lorem ipsum dolor sit amet consectetur. Quam vulputate pharetra at enim vehicula porttitor porttitor." iconPath={guardIcon} bgColor={"#40A578"} column="col-2"/>
            </div>
        </article>
    )
}

export default BenefitSection