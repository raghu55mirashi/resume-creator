import React from 'react'
import ProQualExp from '../../pro/HOC/ProQualExp'

const Projects = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProQualExp(Projects, 'projects');
