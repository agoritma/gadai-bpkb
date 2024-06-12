const FileFormElement = ({ labelText, elemRef, isDisabled = true, fileName, funcChange}) => {
    return (
        <label className="flex flex-col" htmlFor="">
            <span>{labelText}</span>
            <label className={"filePlace flex "+isDisabled} htmlFor="ktp">
                <span>{fileName}</span>
            </label>
            {isDisabled == false ?
                <input id="ktp" name="ktp" type="file" disabled={isDisabled} ref={elemRef} onChange={funcChange} accept="image/png, image/jpg, image/jpeg"/>
                : null
            }
        </label>
    )
}

export default FileFormElement