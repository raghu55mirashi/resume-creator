import React from 'react'
import { connect } from 'react-redux'

const FormInput = ({ section = '', label = "", name, placeholder, value, onHandleChange, extraButton = false, appendButton, removeButton, theme }) => {
    const UpdatedPlaceholder = placeholder.charAt(0).toUpperCase() + placeholder.slice(1).split('_').join(' ')
    return (
        <label className="block pl-1 pr-1">
            <div className="capitalize block" style={{ color: `${theme ? '#a09e9e' : '#49494a'}` }}>{label.split('_').join(' ')}</div>
            {name == 'duties' || name == 'description' || name == 'soft_skills' || name == 'tools-technologies' || name == 'frameworks-libraries' || name == 'programming_languages' ?
                <textarea
                    style={{ width: `${extraButton ? "85%" : "100%"}`, backgroundColor: `${theme ? '#fff' : '#49494a'}`, color: `${theme ? '#000' : '#a9a7a7'}` }}
                    className="form-input mt-1 rounded-sm p-1 mb-2"
                    onChange={onHandleChange}
                    name={name}
                    value={value}
                    placeholder={UpdatedPlaceholder} /> :
                <input type="text"
                    style={{ width: `${extraButton ? "85%" : "100%"}`, backgroundColor: `${theme ? '#fff' : '#49494a'}`, color: `${theme ? '#000' : '#a9a7a7'}` }}
                    className="form-input mt-1 rounded-sm p-1 mb-2"
                    onChange={onHandleChange}
                    placeholder={UpdatedPlaceholder}
                    name={name}
                    value={value} />
            }
            {extraButton
                ? <span>
                    <button onClick={() => appendButton(section)} className="transition ease-in duration-700 extrabtn inline border border-white border-solid rounded-sm ml-px hover:text-white hover:bg-black" >+</button>
                    <button onClick={e => removeButton(e, name, section)} className="transition ease-in duration-700 extrabtn inline border border-white border-solid rounded-sm bg-red-600 hover:text-white hover:bg-black" >-</button>
                </span>
                : null
            }
        </label>
    )
}
const mapStateToProps = ({ switchResume }) => ({
    theme: switchResume.theme
})
export default connect(mapStateToProps)(FormInput)
