import React, { Component } from 'react'
import { connect } from 'react-redux'
import RightBoxes from '../Shared/RightBoxes'
import { addDataPro } from '../../redux/proResume/actions'
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
    render() {
        return (
            <div className="left-right-container pt-3 shadow-2xl lg:w-64 xl:w-64 md:w-full">
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
                    <div className="flex pt-2">
                        <label htmlFor="pickbgColor" className='border w-2/4 pb-2 float-left bg-red-500 rounded-sm border-blue-400 border-solid cursor-pointer'>
                            <p className=" text-xs py-2 ">Background Color</p>
                            <input className="cursor-pointer p-2" id="pickbgColor" type="color" name="pickbgColor" onChange={this.onChangeBgColor} />
                        </label>
                        <label htmlFor="pickFontColor" className='border ml-1 w-2/4 pb-2 float-right bg-blue-600 rounded-sm border-blue-400 border-solid cursor-pointer'>
                            <p className="text-xs py-2">Font Color</p>
                            <input className="cursor-pointer bg-black p-2" id="pickFontColor" type="color" name="pickFontColor" onChange={this.onChangeFontColor} />
                        </label>
                    </div>
                </RightBoxes>
            </div>
        )
    }
}
const mapStateToProps = ({ proResume }) => ({
    template: proResume.templates
})
const mapDispatchToProps = dispatch => ({
    selectTemplate: (data) => dispatch(addDataPro(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(BasicTemp)
