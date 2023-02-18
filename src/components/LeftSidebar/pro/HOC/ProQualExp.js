import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import uuid from 'react-uuid'

import { addDataPro } from '../../../../redux/proResume/actions'
import FormInput from '../../../Shared/FormInput'
import Header from '../../../Shared/Header'
import RemoveInputField from '../../../Utils/RemoveInputField'
import Checkbox from '../../../Shared/Checkbox'

export default function ProQualExp(WrappedComponent, componentName, enable = false) {
    class WithTabs extends Component {
        state = {
            [componentName]: this.props[componentName]
        }

        toastId = React.createRef(null);

        onHandleChange = (e, key) => {
            const { name, value } = e.target
            this.setState({
                [componentName]: { ...this.state[componentName], [key]: { ...this.state[componentName][key], [name]: value } }
            }, () => {
                const value = this.state[componentName]
                this.props.addDataPro({ section: componentName, value })
            })
        }
        appendSection = () => {
            let newInputs = `item-${uuid()}`
            var data;
            const myState = this.state[componentName];
            let findKey = Object.keys(myState).find(i => i.startsWith('item'));
            let tempVar = { ...myState[findKey] }
            for (let key in tempVar) {
                tempVar[key] = '';
            }
            data = tempVar;

            this.setState({
                [componentName]: { ...this.state[componentName], [newInputs]: data }
            })
        }
        removeSection = (e, key) => {
            const updatedInputs = RemoveInputField(key, this.state[componentName])
            if (updatedInputs) {
                this.setState({
                    ...this.state,
                    [componentName]: updatedInputs
                }, () => {
                    const value = this.state[componentName]
                    this.props.addDataPro({ section: componentName, value })
                })
            } else {
                alert('Need to keep atleast one field')
            }
        }
        onEnable = (e, key) => {
            const en = e.target.checked
            this.setState({
                [key]: { ...this.state[key], enable: en }
            }, () => {
                const value = this.state[key]
                this.props.addDataPro({ section: key, value })
                if (en) {
                    this.toastId.current = toast.success(`${[key]} added.`, {
                        autoClose: 5000,
                        type: toast.TYPE.INFO,
                        hideProgressBar: false,
                        closeOnClick: true,
                        theme: "colored"
                    });
                } else {
                    this.toastId.current = toast.error(`${[key]} removed.`, {
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        theme: "dark"
                    });
                }

            })
        }
        render() {
            const myState = this.state[componentName];
            return (
                <WrappedComponent>
                    <Header label={componentName} onclick={e => this.props.toggle(e, componentName)} />

                    {this.props.show === `${componentName}` ?
                        <div className=" pt-2 pb-6">
                            {Object.entries(myState).map(([key1, value]) => (
                                key1 !== 'enable' ?
                                    <div className=" border-b-2 pb-5 border-white border-solid" key={key1}>
                                        <button onClick={e => this.removeSection(e, key1)} className="transition float-right ease-in duration-700 px-2 py-0 inline border border-white border-solid rounded-sm bg-red-600 hover:text-white hover:bg-black" >X</button>
                                        {Object.entries(value).map(([key2, val]) => (
                                            <span key={key2}>
                                                <h4 className="pl-2 text-gray-500 capitalize">{key2.charAt(0).toUpperCase() + key2.slice(1).split('_').join(' ')}</h4>
                                                <FormInput type="text"
                                                    name={key2} onHandleChange={e => this.onHandleChange(e, key1)}
                                                    placeholder={key2} value={val} />
                                            </span>
                                        ))}
                                    </div> : null
                            ))}
                            <button onClick={this.appendSection} className="transition ease-in duration-700  float-right w-full inline border border-white border-solid rounded-sm ml-px hover:text-white hover:bg-black" >+</button>
                            {enable && <Checkbox onEnable={e => this.onEnable(e, componentName)} enabled={this.state[componentName].enable} />}
                        </div>
                        : null}

                </WrappedComponent>
            )
        }
    }
    const mapStateToProps = ({ proResume }) => ({
        [componentName]: proResume[componentName]
    })
    const mapDispatchToProps = (dispatch) => ({
        addDataPro: data => dispatch(addDataPro(data))
    })
    return connect(mapStateToProps, mapDispatchToProps)(WithTabs)
}
