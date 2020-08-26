import React from 'react'
import SkillsExpCert from '../HOC/SkillsExpCert'

const Qualification = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SkillsExpCert(Qualification, 'qualification');
