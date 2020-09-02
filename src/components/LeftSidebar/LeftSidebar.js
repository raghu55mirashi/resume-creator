import React, { Component } from 'react'
import { connect } from 'react-redux'
import Draggable from "react-draggable";
import BasicSidebar from './basic/BasicSidebar'
import ProSidebar from './pro/ProSidebar'
import { changeTemp } from '../../redux/switchReducer'

class LeftSidebar extends Component {
    state = {
        template: this.props.switchResume.template,
        size: ''
    }
    onLoad = type => {
        this.setState({ template: type }, () => {
            const value = this.state.template
            this.props.changeTemp(value)
        })
    }
    componentDidMount() {
        this.setState({ size: window.innerWidth })
    }
    render() {
        const { template } = this.props.switchResume
        const { size } = this.state
        var myclass;
        if (size > 500) {
            myclass = 'drag' //dynamically added to solve mobile view dragging issue
        }
        return (
            <div className="left-right-container left-container pt-3 shadow-2xl md:w-full" >
                <Draggable
                    handle=".drag"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[1, 1]}
                    scale={1}
                >
                    <div className={`${myclass} z-50 lg:cursor-move bg-gray-300 rounded shadow flex-wrap sticky top-0`}>
                        <div className="text-center pb-2 text-blue-500 sticky top-0 bg-gray-300">
                            <button onClick={() => this.onLoad('basic')}
                                className={`${template === 'basic' ? 'border' : 'border-none'}  mx-1 border-solid border-white rounded-sm w-20`}>Basic</button>
                            <button onClick={() => this.onLoad('pro')}
                                className={`${template === 'pro' ? 'border' : 'border-none'}  mx-1 border-solid border-white rounded-sm w-20`}>Pro</button>
                        </div>

                        <div className=" lg:h-screen md:h-screen overflow-auto">
                            {template === 'basic' && <BasicSidebar />}
                            {template === 'pro' && <ProSidebar />}
                        </div>
                    </div>
                </Draggable>
            </div>
        )
    }
}
const mapStateToProps = ({ switchResume }) => ({
    switchResume
})
const mapDispatchToProps = dispatch => ({
    changeTemp: data => dispatch(changeTemp(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar)