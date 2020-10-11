import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../Shared/Button'
import RightBoxes from '../Shared/RightBoxes'
import { resetData } from '../../redux/basicResume/actions'
import BasicTemp from './BasicTemp'
import ProTemp from './ProTemp'
import { changeTemp } from '../../redux/switchReducer'

class RightSidebar extends Component {
    state = {
        template: this.props.switchResume.template
    }
    onLoad = type => {
        this.setState({ template: type }, () => {
            const value = this.state.template
            this.props.changeTemp(value)
        })
    }
    /** Below function is used for removing data from localstorage and reset all data */
    resetResume = () => {
        const c = window.confirm("Are you sure to reset all data?")
        if (c === true) {
            this.props.resetData()
            localStorage.removeItem('persist:root')
            window.location.reload()
        }
    }
    // redirectGithub = () => {
    //     window.open('https://github.com/raghu55mirashi/resume-creator', '_blank')
    // }
    render() {
        const { template, theme } = this.props.switchResume
        return (
            <div className="left-right-container shadow-2xl lg:w-64 xl:w-64 md:w-full">
                <div className="rounded shadow flex-wrap ">
                    <div className={`text-center z-50 pb-3 pt-1 text-blue-500 sticky top-0`} style={{ background: theme ? '#ced4db' : '#18191a' }}>
                        <button onClick={() => this.onLoad('basic')}
                            className={`${template === 'basic' ? 'border' : 'border-none'}  mx-1 border-solid border-white rounded-sm w-20`}>Basic</button>
                        <button onClick={() => this.onLoad('pro')}
                            className={`${template === 'pro' ? 'border' : 'border-none'}  mx-1 border-solid border-white rounded-sm w-20`}>Pro</button>

                    </div>

                    {template === 'basic' && <BasicTemp />}
                    {template === 'pro' && <ProTemp />}

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
                    {
                        //     <RightBoxes
                        //     title="Source Code"
                        //     description="Want to run the project from its source? Are you a developer willing
                        //  to contribute to the open-source development of this project? Click the button below.">
                        //     <Button color="green" onClickHandle={this.redirectGithub}>GitHub Repo</Button>
                        // </RightBoxes>
                    }
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    switchResume: state.switchResume
})
const mapDispatchToProps = dispatch => ({
    resetData: () => dispatch(resetData()),
    changeTemp: data => dispatch(changeTemp(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar)