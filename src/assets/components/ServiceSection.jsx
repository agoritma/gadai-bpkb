import Header2 from "./Header2"
import SpecialContainer from "./SpecialContainer"

const ServiceSection = () => {
    return (
        <article id="layanan">
            <Header2 text="Layanan Kami" />
            <p className="desc">Lorem ipsum dolor sit amet consectetur. Amet aliquet vulputate id iaculis congue tincidunt consectetur odio nulla. Egestas dictum dui ac eget placerat quis facilisi. Lobortis semper semper sed semper aliquet elit sodales. Tortor id eget amet sed platea. Egestas neque quisque consectetur gravida. Vitae nibh euismod sociis dignissim aliquam maecenas vitae quis diam.</p>
            <div className="benefit flex flex-row flex-wrap">
                <SpecialContainer h3="Menggadai Semua Jenis Kendaraan" text="Lorem ipsum dolor sit amet consectetur. Quam vulputate pharetra at enim vehicula porttitor porttitor."  bgColor={"#1F66FF"} column="col-3"/>
                <SpecialContainer h3="Perhitungan Pinjaman Langsung" text="Lorem ipsum dolor sit amet consectetur. Quam vulputate pharetra at enim vehicula porttitor porttitor."  bgColor={"#8B39FF"} column="col-3"/>
                <SpecialContainer h3="Pengajuan Pinjaman" text="Lorem ipsum dolor sit amet consectetur. Quam vulputate pharetra at enim vehicula porttitor porttitor." bgColor={"#FF7E00"} column="col-3"/>
            </div>
        </article>
    )
}

export default ServiceSection