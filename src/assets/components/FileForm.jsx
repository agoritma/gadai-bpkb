const FileFormElement = ({ labelText, fileName, labelRef}) => {
    return (
        <label className="flex flex-col" htmlFor="">
            <span>{labelText}</span>
            <label className={"filePlace flex true"} ref={labelRef} htmlFor="ktp">
                <span>{fileName}</span>
            </label>
        </label>
    )
}

export default FileFormElement