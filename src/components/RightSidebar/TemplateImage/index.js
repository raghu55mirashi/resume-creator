import React from 'react'

const TemplateImage = ({ selectTemplate, selected_template, templateKey, template }) => {
    return (
        <div onClick={selectTemplate} style={{ width: "102px" }}
            className={`${selected_template === templateKey ? 'border-2' : 'border'}  w-2/4  border-blue-400 border-solid cursor-pointer`}>
            <img src={template} alt="" />
        </div>
    )
}

export default TemplateImage
