import React from 'react'
import SkillsExpCert from '../../basic/HOC/SkillsExpCert'
//this uses basic resume HOC
const Hobbies = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SkillsExpCert(Hobbies, 'hobbies', true, 'proResume');
