import React from 'react'
import ProQualExp from '../../pro/HOC/ProQualExp'

const Experience = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProQualExp(Experience, 'experience');
