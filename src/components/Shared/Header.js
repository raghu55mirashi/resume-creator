import React from 'react'
import { connect } from 'react-redux'

const Header = ({ onclick, label, theme }) => {
    return (
        <h2 className={`hover:bg-opacity-50 ${theme ? 'text-black border-white hover:bg-white' : 'text-gray-400 border-black hover:bg-black'} capitalize p-1 text-base text-center cursor-pointer border-solid border-t-2`}
            onClick={onclick}>{label}</h2>
    )
}

const mapStateToProps = ({ switchResume }) => ({
    theme: switchResume.theme
})
export default connect(mapStateToProps)(Header)
