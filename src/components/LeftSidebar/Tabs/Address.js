import React from 'react'
import OtherHoc from '../HOC/OtherHoc'

const Address = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default OtherHoc(Address, 'address');
