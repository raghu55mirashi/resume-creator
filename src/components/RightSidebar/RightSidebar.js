import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../Shared/Button'
import RightBoxes from '../Shared/RightBoxes'
import { resetData } from '../../redux/actions'

class RightSidebar extends Component {
    /** Below function is used for removing data from localstorage and reset all data */
    resetResume = () => {
        const c = window.confirm("Are you sure to reset all data?")
        if (c === true) {
            this.props.resetData()
            localStorage.removeItem('persist:root')
            window.location.reload(true)
        }
    }
    redirectGithub = () => {
        window.open('https://github.com/raghu55mirashi/resume-creator', '_blank')
    }
    render() {
        return (
            <div className="left-right-container pt-3 shadow-2xl lg:w-64 xl:w-64 md:w-full">
                <RightBoxes
                    title="Information"
                    description="Changes you make to your resume are saved automatically 
                        to your browser's local storage.No data gets out, hence your information 
                        is completely secure." />
                <RightBoxes
                    title="Reset Everything!"
                    description="This action will reset all your data and remove backups made to 
                        your browser's local storage as well, so please make sure you have exported 
                        your information before you reset everything.">
                    <Button color="red" onClickHandle={this.resetResume}>Reset</Button>
                </RightBoxes>
                <RightBoxes
                    title="Source Code"
                    description="Want to run the project from its source? Are you a developer willing
                     to contribute to the open-source development of this project? Click the button below.">
                    <Button color="green" onClickHandle={this.redirectGithub}>GitHub Repo</Button>
                </RightBoxes>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    resetData: () => dispatch(resetData())
})
export default connect(null, mapDispatchToProps)(RightSidebar)
