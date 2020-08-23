import React from 'react'

const Checkbox = ({ onEnable, enabled }) => {
    return (
        <div className="text-center ">
            <label className="inline-flex items-center mt-3 mb-3">
                <input type="checkbox"
                    onChange={onEnable}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    defaultChecked={enabled} />
                <span className="ml-2 text-gray-700">Enable</span>
            </label>
        </div>
    )
}

export default Checkbox
