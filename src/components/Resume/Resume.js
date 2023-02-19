import React, { Component } from 'react'
import { connect } from 'react-redux'
import Draggable from "react-draggable";
import Button from '../Shared/Button'
import BasicResume from './BasicResume';
import ProResume from './ProResume';

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
    render() {
        const { template } = this.props.switchResume
        return (
            <div className="flex-1 overflow-hidden shadow-inner relative">
                <Draggable
                    handle=".drag"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[1, 1]}
                    scale={1}
                >
                    <div className="lg:w-11/12 lg:h-auto xl:w-11/12  xl:h-auto  drag bg-white shadow-2xl cursor-move resume-container" id="page" style={{ borderRadius: 0 }}>
                        {template === 'basic' && <BasicResume />}
                        {template === 'pro' && <ProResume />}
                    </div>
                </Draggable>
                <div className="bottom-0 fixed z-50">
                    <Button onClickHandle={this.printMe} color="blue">Preview/Print/Save</Button>
                </div>
                <div className="bottom-0 fixed z-50 right-0 lg:hidden sm:block mb-2">
                    <button className=" bg-gray-400 rounded pl-3 pr-3 text-black" onClick={this.scrollButton} >&#8691;</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    switchResume: state.switchResume
})
export default connect(mapStateToProps)(Resume)