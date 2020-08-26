import React, { Component } from 'react'
import { connect } from 'react-redux'
import RightBoxes from '../Shared/RightBoxes'
import { addData } from '../../redux/basicResume/actions'
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
    render() {
        return (
            <div className="left-right-container pt-3 shadow-2xl lg:w-64 xl:w-64 md:w-full">
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
            </div>
        )
    }
}
const mapStateToProps = ({ resume }) => ({
    template: resume.templates
})
const mapDispatchToProps = dispatch => ({
    selectTemplate: (data) => dispatch(addData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(BasicTemp)
