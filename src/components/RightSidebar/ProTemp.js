import React, { Component } from 'react'
import { connect } from 'react-redux'
import RightBoxes from '../Shared/RightBoxes'
import { addDataPro, loadDataPro } from '../../redux/proResume/actions'
import Button from '../Shared/Button'
import TemplateImage from './TemplateImage'

import image1 from '../../assets/image/tempPro1.JPG'
import image2 from '../../assets/image/tempPro2.JPG'
import image3 from '../../assets/image/tempPro3.JPG'
import image4 from '../../assets/image/tempPro4.JPG'
import image5 from '../../assets/image/tempPro5.JPG'
import image6 from '../../assets/image/tempPro6.JPG'

class BasicTemp extends Component {
    state = {
        template_properties: {
            selected_template: this.props.template.selected_template,
            colors: this.props.template.colors
        },
        templates: {
            'Template1': image1,
            'Template2': image2,
            'Template3': image3,
            'Template4': image4,
            'Template5': image5,
            'Template6': image6
        }
    }

    selectTemplate = (template) => {
        this.setState({ template_properties: { ...this.state.template_properties, selected_template: template } }, () => {
            const value = this.state.template_properties
            this.props.selectTemplate({ section: 'templates', value })
        })
    }
    onChangeBgColor = (e, selected_template) => {
        this.setState({
            template_properties:
            {
                ...this.state.template_properties,
                colors: {
                    ...this.state.template_properties.colors,
                    [selected_template]: {
                        ...this.state.template_properties.colors[selected_template],
                        bgcolor: e.target.value
                    }
                }
            }
        }, () => {
            const value = this.state.template_properties
            this.props.selectTemplate({ section: 'templates', value })
        })
    }
    onChangeFontColor = (e, selected_template) => {
        this.setState({
            template_properties:
            {
                ...this.state.template_properties,
                colors: {
                    ...this.state.template_properties.colors,
                    [selected_template]: {
                        ...this.state.template_properties.colors[selected_template],
                        fontColor: e.target.value
                    }
                }
            }
        }, () => {
            const value = this.state.template_properties
            this.props.selectTemplate({ section: 'templates', value })
        })
    }
    exportResume = async () => {
        const a = document.createElement("a");
        a.href = await URL.createObjectURL(new Blob([JSON.stringify(this.props.resume, null, 2)], {
            type: "json"
        }));
        a.setAttribute("download", "ResumePro.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    importResume = () => {
        const myfile = document.getElementById('myfile2')
        myfile.click()
    }
    onJSONselect = e => {
        if (e.target.files[0].type === 'application/json') {
            var reader = new FileReader();
            reader.readAsText(e.target.files[0]);
            reader.onload = async () => {
                let data = JSON.parse(reader.result)
                if ('projects' in data) {
                    this.props.loadDataPro(data)
                    window.location.reload()
                } else {
                    alert('Please import Pro Resume json file')
                }
            }
        } else {
            alert('Please import Pro Resume json file')
        }
    }
    render() {
        const { templates, template_properties: { selected_template } } = this.state
        return (
            <div className="  ">
                <RightBoxes title="Pro Templates">
                    <div className="grid grid-cols-2 gap-2 pt-3">
                        {Object.entries(templates).map(([templateKey, value]) => (
                            <TemplateImage key={templateKey} selectTemplate={() => this.selectTemplate(templateKey)} selected_template={selected_template} templateKey={templateKey} template={value} />
                        ))}
                    </div>
                </RightBoxes>
                {('Template2' === selected_template || 'Template3' === selected_template || 'Template4' === selected_template) ?
                    <RightBoxes title="Choose color to customise template">
                        <div className="flex pt-2">
                            <label htmlFor="pickbgColor" className='hover:bg-blue-300 border w-2/4 pb-4 float-left bg-blue-400 rounded-sm border-blue-400 border-solid cursor-pointer'>
                                <p className=" text-xs py-2 ">Background Color</p>
                                <input className="cursor-pointer p-2" id="pickbgColor" type="color" name="pickbgColor" onChange={(e) => this.onChangeBgColor(e, selected_template)} />
                            </label>
                            <label htmlFor="pickFontColor" className='hover:bg-blue-400 border ml-1 w-2/4 pb-2 float-right bg-blue-600 rounded-sm border-blue-400 border-solid cursor-pointer'>
                                <p className="text-xs py-2">Font Color</p>
                                <input className="cursor-pointer bg-black p-2" id="pickFontColor" type="color" name="pickFontColor" onChange={(e) => this.onChangeFontColor(e, selected_template)} />
                            </label>
                        </div>
                    </RightBoxes> : null}
                <RightBoxes
                    title="Import or Export Data!"
                    description="These actions will import all your data from existing json file
                        or export as json to save resume for future update.">
                    <Button color="blue" tooltip="Saves resume in json format" onClickHandle={this.exportResume}>Export</Button>

                    <Button color="blue" tooltip="Select json file to update existing resume" onClickHandle={this.importResume}>Import</Button>

                    <input type="file" id="myfile2" onChange={this.onJSONselect} name="myfile" style={{ display: "none" }} />
                </RightBoxes>
            </div>
        )
    }
}
const mapStateToProps = ({ proResume }) => ({
    template: proResume.templates,
    resume: proResume
})
const mapDispatchToProps = dispatch => ({
    selectTemplate: (data) => dispatch(addDataPro(data)),
    loadDataPro: data => dispatch(loadDataPro(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(BasicTemp)
