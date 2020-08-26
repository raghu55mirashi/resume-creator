import React from 'react'
import OtherHoc from '../HOC/OtherHoc'

const Skills = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default OtherHoc(Skills, 'skills');
