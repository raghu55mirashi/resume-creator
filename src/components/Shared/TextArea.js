import React from 'react'

const TextArea = ({ name, label = "", onHandleChange, value, placeholder, height = '50vh' }) => {
    return (
        <label className="block pl-2 pr-2">
            <span className="text-gray-500 float-left capitalize">{label}</span>
            <textarea className="form-input mt-1 w-full rounded-sm p-1" style={{ height }}
                name={name}
                onChange={onHandleChange}
                placeholder={placeholder}
                defaultValue={value} />
        </label>
    )
}

export default TextArea
