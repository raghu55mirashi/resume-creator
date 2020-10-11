import React from 'react'
import { connect } from 'react-redux'

const RightBoxes = ({ title, description = '', children, theme }) => {
    return (
        <div className={`rounded shadow text-center sticky top-0 mb-2`} style={{ background: theme ? '#fff' : '#242526' }}>
            <div className="info p-4">
                <h3 className="font-bold text-lg">{title}</h3>
                <span className="text-gray-500 text-sm">{description}</span>
                {children}
            </div>
        </div>
    )
}
const mapStateToProps = ({ switchResume }) => ({
    theme: switchResume.theme
})
export default connect(mapStateToProps)(RightBoxes)
