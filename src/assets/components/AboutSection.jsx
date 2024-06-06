import Header2 from "./Header2";

const AboutSection = () => {
    return (
        <article id="tentang" className="flex flex-row" style={{gap: 3 + "rem"}}>
            <div className="left">
                <Header2 text={"Tentang Kami"}/>
                <p className="desc">Lorem ipsum dolor sit amet consectetur. Amet aliquet vulputate id iaculis congue tincidunt consectetur odio nulla. Egestas dictum dui ac eget placerat quis facilisi. Lobortis semper semper sed semper aliquet elit sodales. Tortor id eget amet sed platea. Egestas neque quisque consectetur gravida. Vitae nibh euismod sociis dignissim aliquam maecenas vitae quis diam.</p>
            </div>
            <div className="right">
                <Header2 text={"Visi & Misi"}/>
                <p className="desc">Lorem ipsum dolor sit amet consectetur. Amet aliquet vulputate id iaculis congue tincidunt consectetur odio nulla. Egestas dictum dui ac eget placerat quis facilisi. Lobortis semper semper sed semper aliquet elit sodales. Tortor id eget amet sed platea. Egestas neque quisque consectetur gravida. Vitae nibh euismod sociis dignissim aliquam maecenas vitae quis diam.</p>
            </div>
        </article>
    )
}

export default AboutSection