import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../Shared/Button'
import RightBoxes from '../Shared/RightBoxes'
import { resetData, addData } from '../../redux/actions'
import image1 from '../../assets/image/temp1.JPG'
import image2 from '../../assets/image/temp2.JPG'

class RightSidebar extends Component {
    state = {
        template_name: this.props.template
    }
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
    selectTemplate = (template) => {
        this.setState({ template_name: template }, () => {
            const value = this.state
            this.props.selectTemplate({ section: 'templates', value })
        })
    }
    render() {
        return (
            <div className="left-right-container pt-3 shadow-2xl lg:w-64 xl:w-64 md:w-full">
                <RightBoxes title="Templates">
                    <div className="flex pt-2">
                        <div onClick={() => this.selectTemplate('Template1')}
                            className={`${this.state.template_name === 'Template1' ? 'border-2' : 'border'}  w-2/4 float-left border-blue-400 border-solid cursor-pointer`}>
                            <img src={image1} alt="" />
                        </div>
                        <div onClick={() => this.selectTemplate('Template2')}
                            className={`${this.state.template_name === 'Template2' ? 'border-2' : 'border'} ml-1 w-2/4 float-right border-blue-400 border-solid cursor-pointer`}>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </RightBoxes>
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
const mapStateToProps = ({ resume }) => ({
    template: resume.templates.template_name
})
const mapDispatchToProps = dispatch => ({
    resetData: () => dispatch(resetData()),
    selectTemplate: (data) => dispatch(addData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar)
