import React, { Component } from 'react'
import { connect } from 'react-redux'
import RightBoxes from '../Shared/RightBoxes'
import { addDataPro, loadDataPro } from '../../redux/proResume/actions'
import Button from '../Shared/Button'
import image1 from '../../assets/image/tempPro1.JPG'
import image2 from '../../assets/image/tempPro2.JPG'
import image3 from '../../assets/image/tempPro3.JPG'
import image4 from '../../assets/image/tempPro4.JPG'

class BasicTemp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            template_name: this.props.template.template_name,
            bgcolor: this.props.template.bgcolor,
            fontColor: this.props.template.fontColor
        }
    }
    selectTemplate = (template) => {
        this.setState({ template_name: template }, () => {
            const value = this.state
            this.props.selectTemplate({ section: 'templates', value })
        })
    }
    onChangeBgColor = e => {
        this.setState({ bgcolor: e.target.value }, () => {
            const value = this.state
            this.props.selectTemplate({ section: 'templates', value })
        })
    }
    onChangeFontColor = e => {
        this.setState({ fontColor: e.target.value }, () => {
            const value = this.state
            this.props.selectTemplate({ section: 'templates', value })
        })
    }
    exportResume = () => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(this.props.resume, null, 2)], {
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
            reader.onload = function () {
                let data = JSON.parse(reader.result)
                if ('projects' in data) {
                    this.props.loadDataPro(data)
                    window.location.reload(true)
                } else {
                    alert('Please import Pro Resume json file')
                }
            }.bind(this)
        } else {
            alert('Please import Pro Resume json file')
        }
    }
    render() {
        return (
            <div className="  ">
                <RightBoxes title="Pro Templates">
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
                <RightBoxes title="Choose color to customise template">
                    <div className="flex pt-2">
                        <label htmlFor="pickbgColor" className='hover:bg-blue-300 border w-2/4 pb-4 float-left bg-blue-400 rounded-sm border-blue-400 border-solid cursor-pointer'>
                            <p className=" text-xs py-2 ">Background Color</p>
                            <input className="cursor-pointer p-2" id="pickbgColor" type="color" name="pickbgColor" onChange={this.onChangeBgColor} />
                        </label>
                        <label htmlFor="pickFontColor" className='hover:bg-blue-400 border ml-1 w-2/4 pb-2 float-right bg-blue-600 rounded-sm border-blue-400 border-solid cursor-pointer'>
                            <p className="text-xs py-2">Font Color</p>
                            <input className="cursor-pointer bg-black p-2" id="pickFontColor" type="color" name="pickFontColor" onChange={this.onChangeFontColor} />
                        </label>
                    </div>
                </RightBoxes>
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
