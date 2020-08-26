import React from 'react'
import SkillsExpCert from '../HOC/SkillsExpCert'

const Skills = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SkillsExpCert(Skills, 'skills', true);
