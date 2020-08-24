import React from 'react'
import { connect } from 'react-redux'
import photo from '../assets/image/user.JPG'

const Contact = ({ contact, image, name }) => {
    const img = image.source ? image.source : photo;
    return (
        <div className="flex">
            <div className="flex-1 overflow-hidden">
                <div className="flex justify-center lg:h-40 sm:h-24">
                    {image.enable && <img src={img} alt="pic" id="photo" className="h-40 w-40  rounded-full object-center" />}
                </div>
            </div>
            <div className=" flex-auto pt-12 text-center">
                <span className="curriculum font-bold lg:text-lg uppercase">{name}</span>
                {(contact.email).trim() !== '' && <span className="text-xs block"><b>Email:</b> {contact.email}</span>}
                {(contact.cell).trim() !== '' && <span className="text-xs block pb-8"><b>Moblile No:</b> {contact.cell}</span>}
            </div>
            <div className="flex-1">
            </div>
        </div>
    )
}
const Objective = ({ objective }) => {
    return (
        <div className="">
            <div className="title font-bold uppercase pl-2  border-b-2 border-solid">OBJECTIVE:</div>
            <p className="font-normal pl-40">
                {objective}
            </p>
        </div>
    )
}
const Qualification = ({ qualification }) => {
    return (
        <div className="pt-3">
            <div className="title font-bold uppercase pl-2  border-b-2 border-solid">QUALIFICATION:</div>
            {
                Object.values(qualification.description).map((value, id) => (
                    <p className="font-semibold pl-40" key={id}>
                        {value}
                    </p>
                ))
            }
        </div>
    )
}
const Experience = ({ experience }) => {
    return (
        <div className=" pt-3">
            <div className="title font-bold uppercase pl-2  border-b-2 border-solid">Work Experience:</div>
            {
                Object.values(experience.description).map((value, id) => (
                    <p className="pl-40" key={id}>
                        {value}
                    </p>
                ))
            }
        </div>
    )
}
const Certification = ({ certification }) => {
    return (
        <div className="pt-3">
            <div className="title font-bold uppercase pl-2  border-b-2 border-solid">certification:</div>
            {
                Object.values(certification.description).map((value, id) => (
                    <p className="pl-40" key={id}>
                        {value}
                    </p>
                ))
            }
        </div>
    )
}
const Skills = ({ skills }) => {
    return (
        <div className="pt-3">
            <div className="title font-bold uppercase pl-2 border-b-2 border-solid">Additional skills:</div>
            {
                Object.values(skills.description).map((value, id) => (
                    <p className="pl-40" key={id}>{value}</p>
                ))
            }
        </div>
    )
}
const AddSections = ({ add_section }) => {
    return (
        <span className="pt-3">
            {
                Object.entries(add_section).map(([key1, value1]) => (
                    key1 !== "enable" ?
                        ((value1.section_name).trim() !== '' &&
                            Object.entries(value1).map(([section, desc]) => (
                                <div key={section} >
                                    {section === 'section_name' &&
                                        <div className="title font-bold uppercase pl-2 block  border-b-2 border-solid">{`${desc ? desc + ':' : ''}`}</div>
                                    }
                                    {section !== 'section_name' &&
                                        <p className="pl-40">{desc}</p>
                                    }
                                </div>
                            ))) : null
                ))
            }
        </span>
    )
}
const Profile = ({ profile }) => {
    return (
        <div className="pt-3">
            <div className="title font-bold uppercase border-b-2 border-solid pl-2">PERSONAL PROFILE:</div>
            <div className="pl-40">
                <table className="">
                    <thead></thead>
                    <tbody>
                        {
                            Object.entries(profile).map(([key, value]) => (
                                (value.trim() !== '' && <tr key={key}>
                                    <td className="pt-2 align-top capitalize">{key.split('_').join(' ')}</td>
                                    <td className="pt-2 align-top px-4">:</td>
                                    <td className="pt-2 align-top capitalize">
                                        {value}</td>
                                </tr>)
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const Address = ({ address }) => {
    return (
        <div className=" min-w-xs pt-3">
            <div className="title pl-2 font-bold border-b-2 border-solid uppercase">Address:</div>
            <div className="pl-40">
                <table>
                    <thead></thead>
                    <tbody className="grid grid-cols-2">
                        {
                            Object.entries(address).map(([key, value]) => (
                                (value.trim() !== '' && <tr key={key}>
                                    <td className="align-top capitalize font-normal">{key.split('_').join(' ')}</td>
                                    <td className="align-top pr-2 ">-</td>
                                    <td className="align-top capitalize pr-4">{value}</td>
                                </tr>)
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const Declaration = () => {
    return (
        <div className="pt-3">
            <div>
                <div className="title font-bold uppercase border-b-2 border-solid block pl-2">declaration:</div>
                <p className="lg:text-base sm:text-sm mt-2 pl-40">
                    I hereby declare that the above mentioned particulars are true and genuine to the best
                    of my knowledge and belief.
                </p>
            </div>
        </div>
    )
}

class Template4 extends React.Component {
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
                <Profile profile={profile} />
                <Address address={address} />
                <Declaration declaration={declaration} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ resume }) => ({
    resume
})

export default connect(mapStateToProps)(Template4)
