import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDataPro } from '../../../../redux/proResume/actions'
import FormInput from '../../../Shared/FormInput'
import Header from '../../../Shared/Header'

export default function OtherHoc(WrappedComponent, componentName) {
    class WithTabs extends Component {
        state = {
            [componentName]: this.props[componentName]
        }
        onHandleChange = e => {
            const { name, value } = e.target
            this.setState({
                [componentName]: { ...this.state[componentName], [name]: value }
            }, () => {
                const value = this.state[componentName]
                this.props.addDataPro({ section: componentName, value })
            })
        }
        render() {
            const data = this.state[componentName];
            return (
                <WrappedComponent>
                    <Header label={componentName} onclick={e => this.props.toggle(e, componentName)} />
                    {this.props.show === `${componentName}` ?
                        <div className="pt-2 pb-10">
                            {Object.entries(data).map(([key, value]) => (
                                <FormInput type="text" label={key}
                                    name={key} onHandleChange={this.onHandleChange}
                                    placeholder={key} value={value} key={key} />
                            ))}
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
