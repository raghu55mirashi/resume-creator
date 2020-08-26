import React from 'react'
import SkillsExpCert from '../../basic/HOC/SkillsExpCert'
//this uses basic resume HOC
const Certification = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SkillsExpCert(Certification, 'certification', true, 'proResume');
