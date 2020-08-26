import React from 'react'
import SkillsExpCert from '../HOC/SkillsExpCert'

const Experience = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SkillsExpCert(Experience, 'experience', true);
