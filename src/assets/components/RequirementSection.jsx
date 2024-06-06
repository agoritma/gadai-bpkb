import Header2 from "./Header2";

const RequirementSection = ({ syaratList, reqList }) => {
    return (
        <article id="syarat" className="flex flex-row" style={{gap: 3 + "rem"}}>
            <div className="left">
                <Header2 text={"Syarat & Ketentuan"}/>
                <p className="desc">Lorem ipsum dolor sit amet consectetur. Amet aliquet vulputate id iaculis congue tincidunt consectetur odio nulla.</p>
                <ul>
                    {syaratList?.map((syarat) => {
                        return <li><p>{syarat}</p></li>
                    })}
                </ul>
            </div>
            <div className="right">
                <Header2 text={"Apa Yang Perlu Disiapkan"}/>
                <p className="desc">Lorem ipsum dolor sit amet consectetur. Amet aliquet vulputate id iaculis congue tincidunt consectetur odio nulla.</p>
                <ul>
                    {reqList?.map((req) => {
                        return <li><p>{req}</p></li>
                    })}
                </ul>
            </div>
        </article>
    )
}

export default RequirementSection