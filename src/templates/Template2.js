import React from 'react'
import { connect } from 'react-redux'
import photo from '../assets/image/user.JPG'

const Objective = ({ objective }) => {
    return (
        <div className="flex">
            <div>
                <h1 className="font-bold uppercase pb-1">objective:</h1>
                <p className="text-base font-semibold">
                    {objective}
                </p>
            </div>
        </div>
    )
}
const Profile = ({ profile }) => {
    return (
        <div className="flex-1">
            <h1 className="font-bold uppercase py-1 pt-4">PERSONAL PROFILE:</h1>
            <table className="table-auto">
                <thead></thead>
                <tbody>
                    {
                        Object.entries(profile).map(([key, value]) => (
                            <tr key={key}>
                                <td className="align-top pt-2 capitalize">{key.split('_').join(' ')}</td>
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
        <div className="flex-initial max-w-xs">
            <p className="font-bold pr-10 pt-4">Permanent Address:</p>
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
const Contact = ({ contact, image }) => {
    const img = image.source ? image.source : photo;
    return (
        <div className="flex">
            <div className="flex-1 text-left">
                <span className="text-xs block">Contact No: {contact.cell}</span>
                <span className="text-xs block">{contact.email}</span>
            </div>
            <div className="flex-1 py-10 text-center pt-16">
                <span className="font-bold text-lg">CURRICULUM VITAE</span>
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="flex justify-center h-40">
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
                <h1 className="font-bold uppercase pb-1 pt-4">qualification:</h1>
                {
                    Object.values(qualification.description).map((value, id) => (
                        <p className="text-base font-semibold pl-8" key={id}>
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
                <h1 className="font-bold uppercase pb-1 pt-4">additional skills:</h1>
                <ul className="pl-8">
                    {
                        Object.values(skills.description).map((value, id) => (
                            <li className="list-disc text-base" key={id}>
                                {value}
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
        <div className="flex">
            <div>
                <h1 className="font-bold uppercase pb-1 pt-4">Work Experience:</h1>
                {
                    Object.values(experience.description).map((value, id) => (
                        <p className="text-base pl-8" key={id}>
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
                <h1 className="font-bold uppercase pb-1 pt-4">certification:</h1>
                {
                    Object.values(certification.description).map((value, id) => (
                        <p className="text-base pl-8" key={id}>
                            {value}
                        </p>
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
                <h1 className="font-bold uppercase pb-1 pt-4">declaration:</h1>
                <p className="text-base">
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
            skills, experience, certification, declaration } = this.props.resume
        return (
            <React.Fragment>
                <Contact contact={contact} image={image} />
                <Objective objective={objective} />
                <ProfileAndAddress profile={profile} address={address} />
                <Qualification qualification={qualification} />
                {skills.enable && <Skills skills={skills} />}
                {experience.enable && <Experience experience={experience} />}
                {certification.enable && <Certification certification={certification} />}
                <Declaration declaration={declaration} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ resume }) => ({
    resume
})

export default connect(mapStateToProps)(Template1)
