import React from 'react'

const Button = ({ onHandleSave }) => {
    return (
        <div className="text-center">
            <button onClick={onHandleSave} className="mt-2 mb-2 pl-3 pr-3 hover:bg-black hover:text-white bg-red-600 text-gray-800 font-semibold border border-gray-400 rounded shadow">
                Enable
        </button>
        </div>
    )
}

export default Button
