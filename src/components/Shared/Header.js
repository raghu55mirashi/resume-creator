import React from 'react'

const Header = ({ onclick, label }) => {
    return (
        <h2 className="capitalize p-1 text-base text-black text-center cursor-pointer border-solid border-white border-t-2"
            onClick={onclick}>{label}</h2>
    )
}

export default Header
