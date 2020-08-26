import React, { Component } from 'react'
import Contact from './Tabs/Contact'
import Objective from './Tabs/Objective'
import Address from './Tabs/Address'
import Profile from './Tabs/Profile'
import Qualification from './Tabs/Qualification'
import Skills from './Tabs/Skills'
import Experience from './Tabs/Experience'
import Certification from './Tabs/Certification'
import SetImage from './Tabs/SetImage'
import AddSection from './Tabs/AddSection'

class BasicSidebar extends Component {
    state = {
        show: ''
    }
    toggle = (e, arg) => {
        if (this.state.show === arg) {
            this.setState({
                show: ''
            })
        } else {
            this.setState({
                show: arg
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <Contact show={this.state.show} toggle={this.toggle} />
                <Objective show={this.state.show} toggle={this.toggle} />
                <Profile show={this.state.show} toggle={this.toggle} />
                <Address show={this.state.show} toggle={this.toggle} />
                <Qualification show={this.state.show} toggle={this.toggle} />
                <Skills show={this.state.show} toggle={this.toggle} />
                <Experience show={this.state.show} toggle={this.toggle} />
                <Certification show={this.state.show} toggle={this.toggle} />
                <SetImage show={this.state.show} toggle={this.toggle} />
                <AddSection show={this.state.show} toggle={this.toggle} />
            </React.Fragment>
        )
    }
}
export default BasicSidebar