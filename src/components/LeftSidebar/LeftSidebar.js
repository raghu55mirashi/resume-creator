import React, { Component } from 'react'
import { connect } from 'react-redux'
import Draggable from "react-draggable";
import BasicSidebar from './basic/BasicSidebar'
import ProSidebar from './pro/ProSidebar'
import { changeTemp, changeTheme } from '../../redux/switchReducer'
import RightBoxes from '../Shared/RightBoxes'

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
        const { template, theme } = this.props.switchResume
        const { size } = this.state
        var myclass;
        if (size > 500) {
            myclass = 'drag' //dynamically added to solve mobile view dragging issue
        }
        return (
            <div className="left-right-container left-container shadow-2xl md:w-full" >
                <Draggable
                    handle=".drag"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[1, 1]}
                    scale={1}
                >
                    <div className={`${myclass} z-50 lg:cursor-move rounded shadow flex-wrap sticky top-0`} >
                        <div className={`text-center pb-2 pt-1 text-blue-500 sticky top-0 `} style={{ background: theme ? '#ced4db' : '#18191a' }}>
                            <button onClick={() => this.onLoad('basic')}
                                className={`${template === 'basic' ? 'border' : 'border-none'}  mx-1 border-solid border-white rounded-sm w-20`}>Basic</button>
                            <button onClick={() => this.onLoad('pro')}
                                className={`${template === 'pro' ? 'border' : 'border-none'}  mx-1 border-solid border-white rounded-sm w-20`}>Pro</button>
                        </div>

                        <div className="rounded overflow-auto mb-1 " style={{ height: `${template === 'pro' ? '77vh' : '54.5vh'}`, background: theme ? '#e2e8f0' : '#242526' }}>
                            {template === 'basic' && <BasicSidebar />}
                            {template === 'pro' && <ProSidebar />}
                        </div>
                        <RightBoxes>
                            <label htmlFor="toogleA"
                                className="flex items-center fixed-bottom cursor-pointer justify-center">
                                <i className="fa fa-lg fa-moon-o" aria-hidden="true"></i><p className="pr-4 pl-2">Dark Theme</p>
                                <div className="relative">
                                    <input id="toogleA" onClick={() => this.props.changeTheme()} type="checkbox" className="hidden" />
                                    <div className="toggle__line w-6 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                                    <div className="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0"></div>
                                </div>
                            </label>
                        </RightBoxes>
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
    changeTemp: data => dispatch(changeTemp(data)),
    changeTheme: () => dispatch(changeTheme())
})
export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar)