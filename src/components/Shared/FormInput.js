import React from 'react'

const FormInput = ({ type, label = "", name, placeholder, value, onHandleChange, extraButton = false, appendButton, removeButton }) => {
    const UpdatedPlaceholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1).split('_').join(' ')
    return (
        <label className="block pl-1 pr-1">
            <div className="text-gray-500 capitalize block">{label.split('_').join(' ')}</div>
            <input type={type}
                style={{ width: `${extraButton ? "85%" : "100%"}` }}
                className="form-input mt-1 rounded-sm p-1 mb-2"
                onChange={onHandleChange}
                placeholder={UpdatedPlaceholder}
                name={name}
                value={value} />
            {extraButton
                ? <span>
                    <button onClick={appendButton} className="p-1 inline border border-white border-solid rounded-sm ml-px hover:text-white hover:bg-black" >+</button>
                    <button onClick={e => removeButton(e, name)} className="p-1 inline border border-white border-solid rounded-sm bg-red-600 hover:text-white hover:bg-black" >-</button>
                </span>
                : null
            }
        </label>
    )
}

export default FormInput
