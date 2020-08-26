import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addData } from '../../../../redux/basicResume/actions'
import TextArea from '../../../Shared/TextArea'
import Header from '../../../Shared/Header'

class Objective extends Component {
    state = {
        objective: this.props.objective
    }
    onHandleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => {
            const value = this.state.objective
            this.props.addData({ section: 'objective', value })
        })
    }

    render() {
        const { objective } = this.state
        return (
            <React.Fragment>
                <Header label="Objective" onclick={e => this.props.toggle(e, 'objective')} />
                {this.props.show === 'objective'
                    ? <div className=" pt-2 pb-10">
                        <TextArea name="objective" onHandleChange={this.onHandleChange}
                            placeholder="Objective" value={objective} />
                    </div>
                    : null}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    objective: state.resume.objective
})
const mapDispatchToProps = (dispatch) => ({
    addData: data => dispatch(addData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Objective)
