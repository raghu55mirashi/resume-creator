import React, { Component } from 'react'
import { connect } from 'react-redux'
import RightBoxes from '../Shared/RightBoxes'
import { addData, loadDataBasic } from '../../redux/basicResume/actions'
import Button from '../Shared/Button'
import image1 from '../../assets/image/temp1.JPG'
import image2 from '../../assets/image/temp2.JPG'
import image3 from '../../assets/image/temp3.JPG'
import image4 from '../../assets/image/temp4.JPG'

class BasicTemp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            template_name: this.props.template.template_name
        }
    }
    selectTemplate = (template) => {
        this.setState({ template_name: template }, () => {
            const value = this.state
            this.props.selectTemplate({ section: 'templates', value })
        })
    }
    exportResume = () => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(this.props.resume, null, 2)], {
            type: "json"
        }));
        a.setAttribute("download", "ResumeBasic.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    importResume = () => {
        const myfile = document.getElementById('myfile1')
        myfile.click()
    }
    onJSONselect = e => {
        if (e.target.files[0].type === 'application/json') {
            var reader = new FileReader();
            reader.readAsText(e.target.files[0]);
            reader.onload = function () {
                let data = JSON.parse(reader.result)
                if (!('projects' in data) && 'profile' in data) {
                    this.props.loadDataBasic(data)
                    window.location.reload(true)
                } else {
                    alert('Please import Basic Resume json file')
                }
            }.bind(this)
        } else {
            alert('Please import Basic Resume json file')
        }
    }
    render() {
        return (
            <div className=" shadow-2xl lg:w-64 xl:w-64 md:w-full">
                <RightBoxes title="Basic Templates">
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
                    <div className="flex pt-2">
                        <div onClick={() => this.selectTemplate('Template3')}
                            className={`${this.state.template_name === 'Template3' ? 'border-2' : 'border'}  w-2/4 float-left border-blue-400 border-solid cursor-pointer`}>
                            <img src={image3} alt="" />
                        </div>
                        <div onClick={() => this.selectTemplate('Template4')}
                            className={`${this.state.template_name === 'Template4' ? 'border-2' : 'border'} ml-1 w-2/4 float-right border-blue-400 border-solid cursor-pointer`}>
                            <img src={image4} alt="" />
                        </div>
                    </div>
                </RightBoxes>
                <RightBoxes
                    title="Import or Export Data!"
                    description="These actions will import all your data from existing json file
                        or export as json to save resume for future update.">
                    <Button color="blue" tooltip="Saves resume in json format" onClickHandle={this.exportResume}>Export</Button>

                    <Button color="blue" tooltip="Select json file to update existing resume" onClickHandle={this.importResume}>Import</Button>

                    <input type="file" id="myfile1" onChange={this.onJSONselect} name="myfile" style={{ display: "none" }} />
                </RightBoxes>
            </div>
        )
    }
}
const mapStateToProps = ({ resume }) => ({
    template: resume.templates,
    resume
})
const mapDispatchToProps = dispatch => ({
    selectTemplate: (data) => dispatch(addData(data)),
    loadDataBasic: data => dispatch(loadDataBasic(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(BasicTemp)
