import React, { Component } from 'react'
import { connect } from 'react-redux'
import Template1 from '../../templates/basic/Template1';
import Template2 from '../../templates/basic/Template2';
import Template3 from '../../templates/basic/Template3';
import Template4 from '../../templates/basic/Template4';

class BasicResume extends Component {
    renderTemplates = (template) => {
        switch (template) {
            case 'Template1':
                return <Template1 />
            case 'Template2':
                return <Template2 />
            case 'Template3':
                return <Template3 />
            case 'Template4':
                return <Template4 />
            default:
                return <Template1 />
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.renderTemplates(this.props.templates.template_name)}
            </React.Fragment>
        )
    }
}
const mapStateToProps = ({ resume }) => ({
    templates: resume.templates
})
export default connect(mapStateToProps)(BasicResume)