import React, { Component } from 'react'
import { connect } from 'react-redux'
import Draggable from "react-draggable";
import Button from '../Shared/Button'
import Template1 from '../../templates/Template1';
import Template2 from '../../templates/Template2';

class Resume extends Component {
    state = {
        pos: 'top'
    }
    printMe = () => {
        const printContents = document.getElementById('page').innerHTML

        document.getElementById('print-page').innerHTML = printContents
        window.alert("Select option to save as PDF")
        window.print()
    }
    scrollButton = () => {
        if (this.state.pos === 'top') {
            window.scrollTo({
                top: 2000,
                left: 0,
                behavior: 'smooth'
            });
            this.setState({ pos: 'bottom' })
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            this.setState({ pos: 'top' })
        }
    }
    renderTemplates = (template) => {
        switch (template) {
            case 'Template1':
                return <Template1 />
            case 'Template2':
                return <Template2 />
            default:
                return <Template1 />
        }
    }
    render() {
        return (
            <div className="flex-1 overflow-hidden shadow-inner relative">
                <Draggable
                    handle=".drag"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[1, 1]}
                    scale={1}
                >
                    <div className=" lg:w-11/12 lg:h-auto xl:w-11/12  xl:h-auto  drag px-8 py-16 m-3 bg-white shadow-2xl rounded-sm cursor-move" id="page">
                        {this.renderTemplates(this.props.templates.template_name)}
                    </div>
                </Draggable>
                <div className="bottom-0 fixed z-50">
                    <Button onClickHandle={this.printMe} color="blue">Print or Save</Button>
                </div>
                <div className="bottom-0 fixed z-50 right-0 lg:hidden sm:block mb-2">
                    <button className=" bg-gray-400 rounded pl-3 pr-3 text-black" onClick={this.scrollButton} >&#8691;</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ resume }) => ({
    templates: resume.templates
})
export default connect(mapStateToProps)(Resume)