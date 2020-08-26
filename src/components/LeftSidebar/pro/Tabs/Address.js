import React from 'react'
import SummaryAddress from '../HOC/SummaryAddress'

const Address = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default SummaryAddress(Address, 'address');
