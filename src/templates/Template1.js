import React from 'react'
import { connect } from 'react-redux'
import photo from '../assets/image/user.JPG'

const Objective = ({ objective }) => {
    return (
        <div className="flex">
            <div>
                <div className="title font-bold uppercase pb-1">objective:</div>
                <p className="font-normal">
                    {objective}
                </p>
            </div>
        </div>
    )
}
const Profile = ({ profile }) => {
    return (
        <div className="flex-1">
            <div className="title font-bold uppercase py-1 pt-4">PERSONAL PROFILE:</div>
            <table className="table-auto">
                <thead></thead>
                <tbody>
                    {
                        Object.entries(profile).map(([key, value]) => (
                            (value.trim() !== '' &&
                                <tr key={key}>
                                    <td className="align-top pt-2 capitalize">{key.split('_').join(' ')}</td>
                                    <td className="pr-2 align-top pt-2">:</td>
                                    <td className="pt-2 align-top capitalize">
                                        {value}</td>
                                </tr>)
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
const Address = ({ address }) => {
    return (
        <div className="flex-initial min-w-xs pr-0 address">
            <p className="font-bold pt-4">Permanent Address:</p>
            <table>
                <thead></thead>
                <tbody>
                    {
                        Object.entries(address).map(([key, value]) => (
                            (value.trim() !== '' &&
                                <tr key={key}>
                                    <td className="align-top pt-2 capitalize">{key.split('_').join(' ')}</td>
                                    <td className="pr-2 align-top pt-2">:</td>
                                    <td className="pt-2 align-top capitalize">{value}</td>
                                </tr>)
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
const Contact = ({ contact, image }) => {
    const img = image.source ? image.source : photo;
    return (
        <div className="flex" id="sc">
            <div className="flex-1 text-left pt-3">
                {(contact.cell).trim() !== '' && <span className="text-xs block">Contact No: {contact.cell}</span>}
                {(contact.email).trim() !== '' && <span className="text-xs block">{contact.email}</span>}
            </div>
            <div className="flex-1 py-10 text-center pt-16">
                <span className="curriculum font-bold lg:text-lg">CURRICULUM VITAE</span>
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="flex justify-center lg:h-40 sm:h-24">
                    {image.enable && <img src={img} alt="pic" id="photo" className="h-40 w-40  rounded-full object-center" />}
                </div>
            </div>
        </div>
    )
}
const ProfileAndAddress = ({ profile, address }) => {
    return (
        <div className="flex">
            <Profile profile={profile} />
            <Address address={address} />
        </div>
    )
}
const Qualification = ({ qualification }) => {
    return (
        <div className="flex">
            <div>
                <div className="title font-bold uppercase pb-1 pt-4">qualification:</div>
                {
                    Object.values(qualification.description).map((value, id) => (
                        <p className="font-semibold pl-8" key={id}>
                            {value}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}
const Skills = ({ skills }) => {
    return (
        <div className="flex">
            <div>
                <div className="title font-bold uppercase pb-1 pt-4">additional skills:</div>
                <ul className="pl-8">
                    {
                        Object.values(skills.description).map((value, id) => (
                            (value.trim() !== '' &&
                                <li className="list-disc" key={id}>
                                    <p>{value}</p>
                                </li>)
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
const Experience = ({ experience }) => {
    return (
        <div className="flex">
            <div>
                <div className="title font-bold uppercase pb-1 pt-4">Work Experience:</div>
                {
                    Object.values(experience.description).map((value, id) => (
                        <p className="pl-8" key={id}>
                            {value}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}
const Certification = ({ certification }) => {
    return (
        <div className="flex">
            <div>
                <div className="title font-bold uppercase pb-1 pt-4">certification:</div>
                {
                    Object.values(certification.description).map((value, id) => (
                        <p className="pl-8" key={id}>
                            {value}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}
const AddSections = ({ add_section }) => {
    return (
        <div className="flex">
            <div>
                {
                    Object.entries(add_section).map(([key1, value1]) => (
                        key1 !== "enable" ?
                            ((value1.section_name).trim() !== '' &&
                                <div key={key1}>
                                    {Object.entries(value1).map(([section, desc]) => (
                                        <div key={section}>
                                            {section === 'section_name' &&
                                                <div className="title font-bold uppercase pb-1 pt-4">{`${desc ? desc + ':' : ''}`}</div>}
                                            {section !== 'section_name' &&
                                                <p className="pl-8">
                                                    {desc}
                                                </p>}
                                        </div>
                                    ))}

                                </div>) : null
                    ))
                }
            </div>
        </div>
    )
}
const Declaration = () => {
    return (
        <div className="flex">
            <div>
                <div className="title font-bold uppercase pb-1 pt-4">declaration:</div>
                <p className="lg:text-base sm:text-sm">
                    I hereby declare that the above mentioned particulars are true and genuine to the best
                    of my knowledge and belief.
                </p>
            </div>
        </div>
    )
}

class Template1 extends React.Component {
    render() {
        const { objective, profile, address, contact, qualification, image,
            skills, experience, certification, add_section, declaration } = this.props.resume
        return (
            <React.Fragment>
                <Contact contact={contact} image={image} />
                <Objective objective={objective} />
                <ProfileAndAddress profile={profile} address={address} />
                <Qualification qualification={qualification} />
                {skills.enable && <Skills skills={skills} />}
                {experience.enable && <Experience experience={experience} />}
                {certification.enable && <Certification certification={certification} />}
                {add_section.enable && <AddSections add_section={add_section} />}
                <Declaration declaration={declaration} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ resume }) => ({
    resume
})

export default connect(mapStateToProps)(Template1)
