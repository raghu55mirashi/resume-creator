import React from 'react'
import SkillsExpCert from '../HOC/SkillsExpCert'

const Certification = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SkillsExpCert(Certification, 'certification', true);
