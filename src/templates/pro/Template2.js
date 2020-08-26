import React from 'react'
import { connect } from 'react-redux'
import photo from '../../assets/image/user.JPG'

const Contact = ({ contact, profile }) => {
    return (
        <div className="flex pb-6 pt-2">
            <div className="float-left">
                {(contact.cell).trim() !== '' && <span className="pb-2 text-xs block"><i className="fa fa-phone"></i>{' '}{contact.cell}</span>}
                {(contact.email).trim() !== '' && <span className="pb-2 text-xs block"><i className="fa fa-at"></i>{' '}{contact.email}</span>}
                {(contact.github).trim() !== '' && <span className="pb-2 text-xs block"><i className="fa fa-link" aria-hidden="true"></i>{' '}{contact.github}</span>}
                {(profile.current_location).trim() !== '' && <span className="pb-2 text-xs block"><i className="fa fa-map-marker"></i>{' '}{profile.current_location}</span>}
            </div>
        </div>
    )
}
const Image = ({ image }) => {
    const img = image.source ? image.source : photo;
    return (
        <div className="flex justify-center overflow-hidden ">
            <div className=" lg:h-40 sm:h-24 pr-4">
                {image.enable && <img src={img} alt="pic" id="photo" className="h-40 w-40  rounded-full object-center" />}
            </div>
        </div>
    )
}
const Objective = ({ objective, profile }) => {
    return (
        <div className="flex pb-8">
            <div>
                <div className="curriculum uppercase font-bold lg:text-2xl pt-1">{profile.name}</div>
                <div className="capitalize font-bold">{profile.current_designation}</div>
                <p className="text-sm mt-1 border-solid border-gray-600 border-t">
                    {objective}
                </p>
            </div>
        </div>
    )
}
const Skills = ({ skills }) => {
    return (
        <div className="pb-6">
            <div className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">skills</div>

            {Object.keys(skills).map((skill, id) => (
                <span key={id}>
                    {(skills[skill].trim()).length > 1 &&
                        <div className={`${(Object.keys(skills).lastIndexOf(skill) !== Object.keys(skills).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} capitalize py-2`}>
                            <h4 className=" font-normal pb-2">{skill.split('_').join(' ')}</h4>

                            {skills[skill].split(',').map(k => (
                                <span key={k} className="mr-5 mb-1 text-sm font-semibold w-auto border-gray-600">{k}</span>
                            ))}
                        </div>}
                </span>
            ))}
        </div>
    )
}
const Experience = ({ experience }) => {
    return (
        <div className="pb-4">
            <div className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">Experience</div>
            {
                Object.keys(experience).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(experience).lastIndexOf(key1) !== Object.keys(experience).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} pt-2 pb-4 capitalize`}>
                            {(experience[key1].designation).trim() !== '' && <h4 className=" font-normal">{experience[key1].designation}</h4>}
                            {(experience[key1].company).trim() !== '' && <span className=" font-semibold text-sm">{experience[key1].company}</span>}
                            <div className="text-xs">
                                {(experience[key1].duration).trim() !== '' && <span className="pr-5"><i className="fa fa-calendar"></i>{' '}{experience[key1].duration}</span>}
                                {(experience[key1].place).trim() !== '' && <span><i className="fa fa-map-marker"></i>{' '}{experience[key1].place}</span>}
                            </div>
                            <div className="pl-5">
                                <ul className="list-disc text-sm">
                                    {(experience[key1]['tools_tech']).trim() !== '' &&
                                        <li>
                                            <span className=" font-medium">Tools/Tech Used: </span>
                                            <span >{experience[key1]['tools_tech']}</span>
                                        </li>}
                                    {(experience[key1].duties).trim() !== '' &&
                                        <li>
                                            <span>{experience[key1].duties}</span>
                                        </li>}
                                </ul>
                            </div>
                        </div> : null
                ))
            }

        </div>
    )
}
const Projects = ({ projects }) => {
    return (
        <div className="pb-6">
            <div className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">projects</div>
            {
                Object.keys(projects).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(projects).lastIndexOf(key1) !== Object.keys(projects).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} pt-2 pb-4 capitalize`}>
                            {(projects[key1].project_name).trim() !== '' && <h4 className=" font-normal">{projects[key1].project_name}</h4>}
                            {(projects[key1].company).trim() !== '' && <span className=" font-semibold text-sm">{projects[key1].company}</span>}
                            <div className="text-xs">
                                {(projects[key1].duration).trim() !== '' && <span className="pr-5"><i className="fa fa-calendar"></i>{' '}{projects[key1].duration}</span>}
                                {(projects[key1].place).trim() !== '' && <span><i className="fa fa-map-marker"></i>{' '}{projects[key1].place}</span>}
                            </div>
                            <div className="pl-5">
                                <ul className="list-disc">
                                    {((projects[key1]['team_size']).trim() !== '' || (projects[key1]['role']).trim() !== '') &&
                                        <li>
                                            <div className="text-sm ">
                                                {(projects[key1]['team_size']).trim() !== '' &&
                                                    <span>
                                                        <span className="font-medium">Team-Size: </span>
                                                        <span className="pr-5">{projects[key1]['team_size']}</span>
                                                    </span>}
                                                {(projects[key1]['role']).trim() !== '' &&
                                                    <span>
                                                        <span className="font-medium">Role: </span>
                                                        <span >{projects[key1]['role']}</span>
                                                    </span>}
                                            </div>
                                        </li>}
                                    {(projects[key1].description).trim() !== '' &&
                                        <li>
                                            <span className=" text-sm">{projects[key1].description}</span>
                                        </li>}
                                </ul>
                            </div>
                        </div> : null
                ))
            }
        </div>
    )
}
const Qualification = ({ qualification }) => {
    return (
        <div className="pb-6">
            <div className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">qualification</div>
            {
                Object.keys(qualification).map((key1, value1) => (
                    <div key={key1} className={`${(Object.keys(qualification).lastIndexOf(key1) !== Object.keys(qualification).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} pt-2 pb-4 capitalize`}>
                        {(qualification[key1].degree).trim() !== '' && <h4 className=" font-normal">{qualification[key1].degree}</h4>}
                        {(qualification[key1].university).trim() !== '' && <span className=" font-semibold text-sm">{qualification[key1].university}</span>}
                        <div className="text-xs">
                            {(qualification[key1].duration).trim() !== '' && <span className="pr-5"><i className="fa fa-calendar"></i>{' '}{qualification[key1].duration}</span>}
                            {(qualification[key1].place).trim() !== '' && <span><i className="fa fa-map-marker"></i>{' '}{qualification[key1].place}</span>}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
const PersonalInfo = ({ profile, address, linkedIn }) => {
    return (
        <div className="pb-6">
            <div className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">Personal Info</div>
            <div className=' pt-2 pb-4 text-sm capitalize'>
                {(profile.date_of_birth).trim() !== '' &&
                    <div className="pb-3 border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Date of Birth</h4>
                        <h4>{profile.date_of_birth}</h4>
                    </div>}
                {(profile.gender).trim() !== '' &&
                    <div className="pb-3 border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Gender</h4>
                        <span className="">{profile.gender}</span>
                    </div>}
                {(profile.languages).trim() !== '' &&
                    <div className="pb-3 border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Languages Known</h4>
                        <span className="">{profile.languages}</span>
                    </div>}
                {address.trim() !== '' &&
                    <div className="pb-3 border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Address</h4>
                        <address>{address}</address>
                    </div>}
                {linkedIn.trim() !== '' &&
                    <div className="pb-3 border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">LinkedIn</h4>
                        <span className="">{linkedIn}</span>
                    </div>}
            </div>
        </div>
    )
}
const Certification = ({ certification }) => {
    return (
        <div className="pb-6">
            <div>
                <div className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">certification</div>
                {
                    Object.values(certification.description).map((value, id) => (
                        (value.trim() !== '' && <p className="pl-4 mt-1" key={id}>
                            <i className='fa fa-caret-right'></i>{' '}{value}
                        </p>)
                    ))
                }
            </div>
        </div>
    )
}
const References = ({ references }) => {
    return (
        <div className="pb-4">
            <div className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">References</div>
            {
                Object.keys(references).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(references).lastIndexOf(key1) !== Object.keys(references).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} pt-2 pb-4 capitalize`}>
                            {(references[key1].name).trim() !== '' && <h4 className=" font-semibold pl-4">{references[key1].name}</h4>}
                            {(references[key1].phone).trim() !== '' && <h5 className=" text-sm"><i className="fa fa-phone"></i>{' '}{references[key1].phone}</h5>}
                            {(references[key1].email).trim() !== '' && <h5 className="  text-sm">@{' '}{references[key1].email}</h5>}

                        </div> : null
                ))
            }

        </div>
    )
}
const Hobbies = ({ hobbies }) => {
    return (
        <div className="pb-6">
            <div>
                <div className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">hobbies</div>
                {
                    Object.values(hobbies.description).map((value, id) => (
                        (value.trim() !== '' &&
                            <p className="pl-4 mt-1" key={id}>
                                <i className='fa fa-caret-right'></i>{' '}{value}
                            </p>)
                    ))
                }
            </div>
        </div>
    )
}
const AddSections = ({ add_section }) => {
    return (
        <div className="pb-8">
            {
                Object.entries(add_section).map(([key1, value1]) => (
                    key1 !== "enable" ?
                        ((value1.section_name).trim() !== '' &&
                            <div key={key1}>
                                {Object.entries(value1).map(([section, desc]) => (
                                    <div key={section} >
                                        {section === 'section_name' &&
                                            <span className="title font-bold uppercase border-solid border-gray-600 border-b-2 block">{desc}</span>}
                                        {section !== 'section_name' &&
                                            <p className="pl-2 pt-1">
                                                {desc}
                                            </p>}
                                    </div>
                                ))}

                            </div>) : null
                ))
            }
        </div>
    )
}


class Template1 extends React.Component {
    render() {
        const { contact, objective, profile, projects, address, qualification, image,
            skills, experience, certification, references, hobbies, add_section } = this.props.proResume
        return (
            <React.Fragment>
                <div className="flex w-full">
                    <div className="w-4/12">
                        <Image image={image} />
                        <Contact contact={contact} profile={profile} />
                        <Skills skills={skills} />
                        <Qualification qualification={qualification} />
                        {certification.enable && <Certification certification={certification} />}
                        {hobbies.enable && <Hobbies hobbies={hobbies} />}
                        <PersonalInfo profile={profile} address={address} linkedIn={contact.linkedIn} />
                    </div>
                    <div className="w-auto px-2"></div>
                    <div className=" w-8/12">
                        <Objective objective={objective} profile={profile} />
                        <Experience experience={experience} />
                        <Projects projects={projects} />
                        {add_section.enable && <AddSections add_section={add_section} />}
                        {references.enable && <References references={references} />}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ proResume }) => ({
    proResume
})

export default connect(mapStateToProps)(Template1)
