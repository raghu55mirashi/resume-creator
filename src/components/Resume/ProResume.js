import React, { Component } from 'react'
import { connect } from 'react-redux'
import Template1 from '../../templates/pro/Template1';
import Template2 from '../../templates/pro/Template2';
// import Template3 from '../../templates/Template3';
// import Template4 from '../../templates/Template4';

class ProResume extends Component {
    renderTemplates = (template) => {
        switch (template) {
            case 'Template1':
                return <Template1 />
            case 'Template2':
                return <Template2 />
            // case 'Template3':
            //     return <Template3 />
            // case 'Template4':
            //     return <Template4 />
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
const mapStateToProps = ({ proResume }) => ({
    templates: proResume.templates
})
export default connect(mapStateToProps)(ProResume)

