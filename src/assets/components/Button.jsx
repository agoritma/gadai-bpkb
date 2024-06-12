const Button = ({ btn, text, url, funcClick }) => {
    return (
        <div className={btn}>
            <a onClick={funcClick}>{text}</a>
        </div>
    )
}

export default Button