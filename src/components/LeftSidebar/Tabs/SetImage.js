import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addData } from '../../../redux/actions'
import Header from '../../Shared/Header'

class SetImage extends Component {
    state = {
        image: this.props.image
    }
    onHandleChange = e => {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            console.log(reader.result);
            this.setState({
                image: reader.result
            }, () => {
                const value = this.state.image
                this.props.addData({ section: 'image', value })
            })
        })
        reader.readAsDataURL(e.target.files[0])
    }

    render() {
        return (
            <React.Fragment>
                <Header label="Image" onclick={e => this.props.toggle(e, 'image')} />
                {this.props.show === 'image'
                    ? <div className=" pt-2 pb-10">
                        <input type="file" name="image" onChange={this.onHandleChange} />
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
