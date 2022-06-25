import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import uuid from 'react-uuid'

import { addData } from '../../../../redux/basicResume/actions'
import FormInput from '../../../Shared/FormInput'
import Header from '../../../Shared/Header'
import RemoveInputField from '../../../Utils/RemoveInputField'
import Checkbox from '../../../Shared/Checkbox'

class AddMoreSection extends Component {
    state = {
        add_section: this.props.add_section
    }
    
    toastId = React.createRef(null);

    onChangeAddSection = (e, key) => {
        const { value } = e.target
        this.setState({
            add_section: { ...this.state.add_section, [key]: { ...this.state.add_section[key], section_name: value } }
        }, () => {
            const value = this.state.add_section
            this.props.addData({ section: 'add_section', value })
        })
    }
    onChangeAddDescription = (e, section, description) => {
        const { value } = e.target
        this.setState({
            add_section: {
                ...this.state.add_section,
                [section]: { ...this.state.add_section[section], [description]: value }
            }
        }, () => {
            const value = this.state.add_section
            this.props.addData({ section: 'add_section', value })
        })
    }
    appendSection = () => {
        let newInputs = `section-${uuid()}`
        this.setState({
            add_section: { ...this.state.add_section, [newInputs]: { section_name: '', description_0: '' } }
        })
    }
    appendDescription = (sectionKey) => {
        let newInputs = `description-${uuid()}`
        this.setState({
            add_section: {
                ...this.state.add_section, [sectionKey]: { ...this.state.add_section[sectionKey], [newInputs]: '' }
            }
        })
    }
    removeSection = (e, key) => {
        const updatedInputs = RemoveInputField(key, this.state.add_section)
        if (updatedInputs) {
            this.setState({
                ...this.state,
                add_section: updatedInputs
            }, () => {
                const value = this.state.add_section
                this.props.addData({ section: 'add_section', value })
            })
        } else {
            alert('Need to keep atleast one field')
        }
    }
    removeDescription = (e, key, section) => {
        const updatedInputs = RemoveInputField(key, this.state.add_section[section])
        if (updatedInputs) {
            this.setState({
                add_section: { ...this.state.add_section, [section]: updatedInputs }
            }, () => {
                const value = this.state.add_section
                this.props.addData({ section: 'add_section', value })
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
        const { add_section } = this.state

        return (
            <React.Fragment>
                <Header label="Add More" onclick={e => this.props.toggle(e, 'Add More')} />

                {this.props.show === 'Add More' ?
                    <span>
                        {Object.entries(add_section).map(([key1, value]) => (
                            key1 !== 'enable' ?
                                <div className=" border-b-2 border-white border-solid" key={key1}>
                                    <h4 className="pl-2 text-gray-500">Section</h4>
                                    <FormInput type="text" extraButton={true} appendButton={this.appendSection}
                                        name={key1} onHandleChange={e => this.onChangeAddSection(e, key1)} removeButton={this.removeSection}
                                        placeholder="Add Section" value={add_section[key1].section_name} />
                                    {Object.entries(value).map(([key2, val]) => (
                                        key2 !== 'section_name' ?
                                            <span key={key2}>
                                                <h4 className="pl-2 text-gray-500">Description</h4>
                                                <FormInput type="text" extraButton="true" section={key1} appendButton={this.appendDescription}
                                                    name={key2} onHandleChange={e => this.onChangeAddDescription(e, key1, key2)} removeButton={this.removeDescription}
                                                    placeholder="Add Description" value={val} />
                                            </span> : null
                                    ))}
                                </div> : null
                        ))}
                        <Checkbox onEnable={e => this.onEnable(e, 'add_section')} enabled={this.state.add_section.enable} />
                    </span>
                    : null}

            </React.Fragment>
        )
    }
}
const mapStateToProps = ({ resume }) => ({
    add_section: resume.add_section
})
const mapDispatchToProps = (dispatch) => ({
    addData: data => dispatch(addData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(AddMoreSection)