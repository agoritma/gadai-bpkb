const SelectFormElement = ({ labelText, optionsList, elemRef, isDisabled = true, isRequire, funcChage }) => {
    return (
        <label className={"flex flex-col"} htmlFor={labelText}>
            <span>{labelText}</span>
            <select name={labelText} id={labelText} onChange={funcChage} disabled={isDisabled} required={isRequire} ref={elemRef}>
                {optionsList?.map((options) => {
                    return (
                        <option key={options} value={options}>{options}</option>
                    )
                })}
            </select>
        </label>
    )
}

export default SelectFormElement