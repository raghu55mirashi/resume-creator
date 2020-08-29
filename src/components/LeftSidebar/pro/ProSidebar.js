import React, { Component } from 'react'
import Summary from './Tabs/Summary'
import Objective from './Tabs/Objective'
import Contact from './Tabs/Contact'
import Address from './Tabs/Address'
import Profile from './Tabs/Profile'
import Skills from './Tabs/Skills'
import Qualification from './Tabs/Qualification'
import Projects from './Tabs/Projects'
import Experience from './Tabs/Experience'
import Certification from './Tabs/Certification'
import References from './Tabs/References'
import Hobbies from './Tabs/Hobbies'
import SetImage from './Tabs/SetImage'
import AddSection from './Tabs/AddSection'

class ProSidebar extends Component {
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
                <Profile show={this.state.show} toggle={this.toggle} />
                <Qualification show={this.state.show} toggle={this.toggle} />
                <Experience show={this.state.show} toggle={this.toggle} />
                <Projects show={this.state.show} toggle={this.toggle} />
                <Contact show={this.state.show} toggle={this.toggle} />
                <Skills show={this.state.show} toggle={this.toggle} />
                <Summary show={this.state.show} toggle={this.toggle} />
                <Objective show={this.state.show} toggle={this.toggle} />
                <Address show={this.state.show} toggle={this.toggle} />
                <Certification show={this.state.show} toggle={this.toggle} />
                <References show={this.state.show} toggle={this.toggle} />
                <Hobbies show={this.state.show} toggle={this.toggle} />
                <SetImage show={this.state.show} toggle={this.toggle} />
                <AddSection show={this.state.show} toggle={this.toggle} />
            </React.Fragment>
        )
    }
}
export default ProSidebar    
