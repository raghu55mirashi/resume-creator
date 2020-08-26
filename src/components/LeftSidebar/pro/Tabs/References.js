import React from 'react'
import ProQualExp from '../../pro/HOC/ProQualExp'

const References = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProQualExp(References, 'references', true, 'proResume');
