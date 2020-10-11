import React from 'react'
import { connect } from 'react-redux'

const TextArea = ({ name, label = "", onHandleChange, value, placeholder, height = '50vh', theme }) => {
    return (
        <label className="block pl-2 pr-2">
            <span className="text-gray-500 float-left capitalize">{label}</span>
            <textarea className="form-input mt-1 w-full rounded-sm p-1" style={{ height, backgroundColor: `${theme ? '#fff' : '#49494a'}`, color: `${theme ? '#000' : '#a9a7a7'}` }}
                name={name}
                onChange={onHandleChange}
                placeholder={placeholder}
                defaultValue={value} />
        </label>
    )
}
const mapStateToProps = ({ switchResume }) => ({
    theme: switchResume.theme
})
export default connect(mapStateToProps)(TextArea)
