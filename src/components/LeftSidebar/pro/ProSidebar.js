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
        this.setState({
            show: this.state.show === arg ? '' : arg
        });
    }
    render() {
        const {show} = this.state;
        return (
            <React.Fragment>
                <Profile show={show} toggle={this.toggle} />
                <Qualification show={show} toggle={this.toggle} />
                <Experience show={show} toggle={this.toggle} />
                <Projects show={show} toggle={this.toggle} />
                <Contact show={show} toggle={this.toggle} />
                <Skills show={show} toggle={this.toggle} />
                <Summary show={show} toggle={this.toggle} />
                <Objective show={show} toggle={this.toggle} />
                <Address show={show} toggle={this.toggle} />
                <Certification show={show} toggle={this.toggle} />
                <References show={show} toggle={this.toggle} />
                <Hobbies show={show} toggle={this.toggle} />
                <SetImage show={show} toggle={this.toggle} />
                <AddSection show={show} toggle={this.toggle} />
            </React.Fragment>
        )
    }
}
export default ProSidebar    
