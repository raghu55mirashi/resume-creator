import React from 'react'
import SummaryAddress from '../HOC/SummaryAddress'

const Objective = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SummaryAddress(Objective, 'objective');