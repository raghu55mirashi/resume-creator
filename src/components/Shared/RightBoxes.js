import React from 'react'

const RightBoxes = ({ title, description, children }) => {
    return (
        <div className="bg-white rounded shadow text-center sticky top-0 mb-2">
            <div className="info p-4">
                <h3 className="font-bold text-lg">{title}</h3>
                <span className="text-gray-500 text-sm">{description}</span>
                {children}
            </div>
        </div>
    )
}

export default RightBoxes
