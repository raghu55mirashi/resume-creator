import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDataPro } from '../../../../redux/proResume/actions'
import TextArea from '../../../Shared/TextArea'
import Header from '../../../Shared/Header'

export default function OtherHoc(WrappedComponent, componentName) {
    class WithTabs extends Component {
        state = {
            [componentName]: this.props[componentName]
        }
        onHandleChange = e => {
            const { value } = e.target
            this.setState({
                [componentName]: value
            }, () => {
                const value = this.state[componentName]
                this.props.addDataPro({ section: componentName, value })
            })
        }
        render() {
            const data = this.state[componentName]
            return (
                <WrappedComponent>
                    <Header label={componentName} onclick={e => this.props.toggle(e, componentName)} />
                    {this.props.show === `${componentName}` ?
                        <div className="pt-2 pb-10">
                            <TextArea name={componentName} onHandleChange={this.onHandleChange}
                                placeholder={componentName} value={data} height='30vh' />
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
