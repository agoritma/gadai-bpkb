const FileFormElement = ({ labelText, elemRef, isDisabled = true, fileName = "Upload KTP Anda", funcClick }) => {
    return (
        <label className="flex flex-col">
            <span>{labelText}</span>
            <div className={"filePlace flex "+isDisabled} onClick={funcClick}>
                <span>{fileName}</span>
                <input name={labelText} type="file" disabled={isDisabled} ref={elemRef} />
            </div>
        </label>
    )
}

export default FileFormElement