const InputFormElement = ({ labelText, elemRef, isDisabled = true, typeInput = "text" }) => {
    return (
        <label className="flex flex-col" htmlFor={labelText}>
            <span>{labelText}</span>
            <input name={labelText} type={typeInput} disabled={isDisabled} ref={elemRef} />
        </label>
    )
}

export default InputFormElement