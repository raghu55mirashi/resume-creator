import React, { Component } from 'react'
import { connect } from 'react-redux'
import RightBoxes from '../Shared/RightBoxes'
import { addData, loadDataBasic } from '../../redux/basicResume/actions'
import Button from '../Shared/Button'
import TemplateImage from './TemplateImage'
import image1 from '../../assets/image/temp1.JPG'
import image2 from '../../assets/image/temp2.JPG'
import image3 from '../../assets/image/temp3.JPG'
import image4 from '../../assets/image/temp4.JPG'

class BasicTemp extends Component {
    state = {
        selected_template: this.props.template.selected_template,
        templates: {
            'Template1': image1,
            'Template2': image2,
            'Template3': image3,
            'Template4': image4
        }
    }

    selectTemplate = (template) => {
        this.setState({ selected_template: template }, () => {
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
                    window.location.reload()
                } else {
                    alert('Please import Basic Resume json file')
                }
            }.bind(this)
        } else {
            alert('Please import Basic Resume json file')
        }
    }
    render() {
        const { templates, selected_template } = this.state
        return (
            <div className=" shadow-2xl lg:w-64 xl:w-64 md:w-full">
                <RightBoxes title="Basic Templates">
                    <div className="grid grid-cols-2 gap-2 pt-3">
                        {Object.entries(templates).map(([templateKey, value]) => (
                            <TemplateImage key={templateKey} selectTemplate={() => this.selectTemplate(templateKey)}
                                selected_template={selected_template} templateKey={templateKey} template={value} />
                        ))}
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
