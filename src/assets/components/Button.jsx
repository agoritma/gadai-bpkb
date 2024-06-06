const Button = ({ btn, text, url }) => {
    return (
        <div className={btn}>
            <a href={url}>{text}</a>
        </div>
    )
}

export default Button