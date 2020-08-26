import React from 'react'
import ProQualExp from '../../pro/HOC/ProQualExp'

const Qualification = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProQualExp(Qualification, 'qualification');
