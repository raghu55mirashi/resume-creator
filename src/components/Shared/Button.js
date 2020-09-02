import React from 'react'

const Button = ({ onClickHandle, children, color, tooltip = '' }) => {
    return (
        <div className="text-center" title={tooltip}>
            <button onClick={onClickHandle}
                className={`transition ease-in duration-700 mt-2 mb-2 pl-3 pr-3 hover:bg-black hover:text-white bg-${color}-600 text-gray-800 font-semibold border border-gray-400 rounded shadow`}>
                {children}
            </button>
        </div>
    )
}

export default Button
