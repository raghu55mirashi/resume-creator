import React from 'react'
import OtherHoc from '../HOC/OtherHoc'

const Prof = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default OtherHoc(Prof, 'profile');
