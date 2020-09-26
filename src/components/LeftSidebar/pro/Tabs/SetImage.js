import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDataPro } from '../../../../redux/proResume/actions'
import Header from '../../../Shared/Header'
import Checkbox from '../../../Shared/Checkbox'

class SetImage extends Component {
    state = {
        image: this.props.image
    }

    onHandleChange = async e => {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            this.setState({
                image: { ...this.state.image, source: reader.result }
            }, () => {
                const value = this.state.image
                this.props.addDataPro({ section: 'image', value })
            })
        })
        await reader.readAsDataURL(e.target.files[0])
    }
    onEnable = (e) => {
        const en = e.target.checked
        this.setState({
            image: { ...this.state.image, enable: en }
        }, () => {
            const value = this.state.image
            this.props.addDataPro({ section: "image", value })
        })
    }
    render() {
        return (
            <React.Fragment>
                <Header label="Image" onclick={e => this.props.toggle(e, 'image')} />
                {this.props.show === 'image'
                    ? <div className=" pt-2 pb-2  text-center">
                        <label htmlFor="myfile" className={`transition ease-in duration-700 mt-2 mb-2 pl-3 pr-3 pt-px pb-px hover:bg-black hover:text-white  text-gray-800 font-semibold border border-gray-400 rounded shadow`}>
                            Select Image
                        </label>
                        <input type="file" id="myfile" accept="image/png, image/jpeg" className="pb-2 hidden" name="image" onChange={this.onHandleChange} />
                        <Checkbox onEnable={e => this.onEnable(e)} enabled={this.state.image.enable} />
                    </div>
                    : null}
            </React.Fragment>
        )
    }
}
const mapStateToProps = ({ proResume }) => ({
    image: proResume.image
})
const mapDispatchToProps = (dispatch) => ({
    addDataPro: data => dispatch(addDataPro(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(SetImage)
