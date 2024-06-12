const SelectFormElement = ({ labelText, optionsList, elemRef, isRequire, funcChage }) => {
    return (
        <label className={"flex flex-col"} htmlFor={labelText}>
            <span>{labelText}</span>
            <select name={labelText} id={labelText} onChange={funcChage} required={isRequire} ref={elemRef}>
                <option value=""></option>
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