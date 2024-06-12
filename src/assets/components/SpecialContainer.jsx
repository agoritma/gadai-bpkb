const SpecialContainer = ({ h3, text, iconPath, bgColor, column }) => {
    return (
        <div className={"specialContainer flex flex-col "+column} style={{backgroundColor: bgColor}}>
            {h3 ? 
                <div className="title flex flex-row">
                    {iconPath ? <img src={iconPath} alt="icon" /> : null}
                    <h3>{h3}</h3>
                </div>
                : null
            }
            <p>{text}</p>
        </div>
    )
}

export default SpecialContainer