import React from 'react'
import SummaryAddress from '../HOC/SummaryAddress'

const Summary = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SummaryAddress(Summary, 'summary');