import React from 'react'
import OtherHoc from '../HOC/OtherHoc'

const Contact = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default OtherHoc(Contact, 'contact');
