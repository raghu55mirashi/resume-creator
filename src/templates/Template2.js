import React from 'react'
import { connect } from 'react-redux'
import photo from '../assets/image/user.JPG'

const Objective = ({ objective }) => {
    return (
        <div className="flex">
            <div>
                <div className="title font-bold uppercase bg-blue-100 block pl-2">OBJECTIVE:</div>
                <p className="font-normal mt-1 pl-2">
                    {objective}
                </p>
            </div>
        </div>
    )
}
const Profile = ({ profile }) => {
    return (
        <div className="flex-1 pt-4">
            <div className="title font-bold uppercase bg-blue-100 block pl-2">PERSONAL PROFILE:</div>
            <table className="table-auto">
                <thead></thead>
                <tbody>
                    {
                        Object.entries(profile).map(([key, value]) => (
                            <tr key={key}>
                                <td className="align-top pt-2 pl-2 capitalize">{key.split('_').join(' ')}</td>
                                <td className="pr-2 align-top pt-2">:</td>
                                <td className="pt-2 align-top capitalize">
                                    {value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
const Address = ({ address }) => {
    return (
        <div className="flex-1 min-w-xs pt-4">
            <div className="title font-bold bg-blue-100 block">Permanent Address:</div>
            <table>
                <thead></thead>
                <tbody>
                    {
                        Object.entries(address).map(([key, value]) => (
                            <tr key={key}>
                                <td className="align-top pt-2 capitalize">{key.split('_').join(' ')}</td>
                                <td className="pr-2 align-top pt-2">:</td>
                                <td className="pt-2 align-top capitalize">{value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
const Contact = ({ contact, image, name }) => {
    const img = image.source ? image.source : photo;
    return (
        <div className="flex">
            <div className="flex-1">
            </div>
            <div className="flex-1 py-10 text-center pt-2">
                <span className="text-base block uppercase"><b>{name}</b></span>
                <span className="text-xs block"><b>Email:</b> {contact.email}</span>
                <span className="text-xs block pb-8"><b>Moblile No:</b> {contact.cell}</span>
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
        <div className="pt-4">
            <div>
                <div className="title font-bold uppercase bg-blue-100 block pl-2">qualification:</div>
                {
                    Object.values(qualification.description).map((value, id) => (
                        <p className="font-semibold pl-8 mt-1" key={id}>
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
        <div className="pt-4">
            <div>
                <div className="title font-bold uppercase bg-blue-100 block pl-2">additional skills:</div>
                <ul className="pl-8">
                    {
                        Object.values(skills.description).map((value, id) => (
                            <li className="list-disc mt-1" key={id}>
                                <p>{value}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
const Experience = ({ experience }) => {
    return (
        <div className="pt-4">
            <div>
                <div className="title font-bold uppercase bg-blue-100 block pl-2">Work Experience:</div>
                {
                    Object.values(experience.description).map((value, id) => (
                        <p className="pl-8 mt-1" key={id}>
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
        <div className="pt-4">
            <div>
                <div className="title font-bold uppercase bg-blue-100 block pl-2">certification:</div>
                {
                    Object.values(certification.description).map((value, id) => (
                        <p className="pl-8 mt-1" key={id}>
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
        <div className="">
            <div>
                {
                    Object.entries(add_section).map(([key1, value1]) => (
                        key1 !== "enable" ?
                            (value1.section_name !== '' &&
                                <div key={key1} className="pt-4">
                                    {Object.entries(value1).map(([section, desc]) => (
                                        <div key={section} >
                                            {section === 'section_name' &&
                                                <span className="title font-bold uppercase bg-blue-100 block pl-2">{`${desc ? desc + ':' : ''}`}</span>}
                                            {section !== 'section_name' &&
                                                <p className="pl-8 mt-1">
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
        <div className="pt-4">
            <div>
                <div className="title font-bold uppercase bg-blue-100 block pl-2">declaration:</div>
                <p className="lg:text-base sm:text-sm mt-2 pl-2">
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
                <Contact contact={contact} image={image} name={profile.name} />
                <Objective objective={objective} />
                <Qualification qualification={qualification} />
                {experience.enable && <Experience experience={experience} />}
                {certification.enable && <Certification certification={certification} />}
                {skills.enable && <Skills skills={skills} />}
                {add_section.enable && <AddSections add_section={add_section} />}
                <ProfileAndAddress profile={profile} address={address} />
                <Declaration declaration={declaration} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ resume }) => ({
    resume
})

export default connect(mapStateToProps)(Template1)
