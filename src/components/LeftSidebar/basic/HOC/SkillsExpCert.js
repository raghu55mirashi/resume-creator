import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import uuid from 'react-uuid'

import { addData } from '../../../../redux/basicResume/actions'
import { addDataPro } from '../../../../redux/proResume/actions'
import FormInput from '../../../Shared/FormInput'
import Header from '../../../Shared/Header'
import RemoveInputField from '../../../Utils/RemoveInputField'
import Checkbox from '../../../Shared/Checkbox'

export default function SkillsExpCert(WrappedComponent, componentName, enable = false, resumeType = '') {
    class WithTabs extends Component {
        state = {
            [componentName]: this.props[componentName]
        }

        toastId = React.createRef(null);

        onHandleChange = e => {
            const { name, value } = e.target
            this.setState({
                [componentName]: { ...this.state[componentName], description: { ...this.state[componentName].description, [name]: value } }
            }, () => {
                const value = this.state[componentName]
                this.props.addData({ section: componentName, value })
            })
        }
        appendButton = () => {
            let newInputs = `description-${uuid()}`
            this.setState({
                [componentName]: { ...this.state[componentName], description: { ...this.state[componentName].description, [newInputs]: '' } }
            })
        }
        removeButton = (e, key) => {
            const updatedInputs = RemoveInputField(key, this.state[componentName].description)
            if (updatedInputs) {
                this.setState({
                    [componentName]: { ...this.state[componentName], description: updatedInputs }
                }, () => {
                    const value = this.state[componentName]
                    this.props.addData({ section: componentName, value })
                })
            } else {
                alert('Sorry, Need to keep atleast one field')
            }
        }
        onEnable = (e, key) => {
            const en = e.target.checked
            this.setState({
                [key]: { ...this.state[key], enable: en }
            }, () => {
                const value = this.state[key]
                this.props.addData({ section: key, value })
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
            const { description } = this.state[componentName]

            return (
                <WrappedComponent>
                    <Header label={componentName} onclick={e => this.props.toggle(e, componentName)} />

                    {this.props.show === `${componentName}` ?
                        <div className=" pt-2 pb-2">
                            {Object.entries(description).map(([key, value]) => (
                                <FormInput type="text" extraButton="true" appendButton={this.appendButton}
                                    name={key} onHandleChange={this.onHandleChange} removeButton={this.removeButton}
                                    placeholder={componentName} value={value} key={key} />
                            ))}

                            {enable && <Checkbox onEnable={e => this.onEnable(e, componentName)} enabled={this.state[componentName].enable} />}
                        </div>
                        : null}

                </WrappedComponent>
            )
        }
    }
    //below code is written bcoz this HOC is used by proResume- Certification
    var func;
    var resum;
    if (resumeType === 'proResume') {
        func = addDataPro
        resum = 'proResume'
    } else {
        func = addData
        resum = 'resume'
    }
    const mapStateToProps = (state) => ({
        [componentName]: state[resum][componentName]
    })
    const mapDispatchToProps = (dispatch) => ({
        addData: data => dispatch(func(data))
    })
    return connect(mapStateToProps, mapDispatchToProps)(WithTabs)
}
