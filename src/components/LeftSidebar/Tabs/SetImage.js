import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addData } from '../../../redux/actions'
import Header from '../../Shared/Header'
import Checkbox from '../../Shared/Checkbox'

class SetImage extends Component {
    state = {
        image: this.props.image
    }

    onHandleChange = e => {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            this.setState({
                image: { ...this.state.image, source: reader.result }
            }, () => {
                const value = this.state.image
                this.props.addData({ section: 'image', value })
            })
        })
        reader.readAsDataURL(e.target.files[0])
    }
    onEnable = (e) => {
        const en = e.target.checked
        this.setState({
            image: { ...this.state.image, enable: en }
        }, () => {
            const value = this.state.image
            this.props.addData({ section: "image", value })
        })
    }
    render() {
        return (
            <React.Fragment>
                <Header label="Image" onclick={e => this.props.toggle(e, 'image')} />
                {this.props.show === 'image'
                    ? <div className=" pt-2 pb-10 text-center">
                        <input type="file" style={{ width: "104px" }} name="image" onChange={this.onHandleChange} />
                        <Checkbox onEnable={e => this.onEnable(e)} enabled={this.state.image.enable} />
                    </div>
                    : null}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    image: state.resume.image
})
const mapDispatchToProps = (dispatch) => ({
    addData: data => dispatch(addData(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(SetImage)
