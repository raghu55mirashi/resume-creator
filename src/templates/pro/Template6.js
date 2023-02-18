import React from 'react'
import { connect } from 'react-redux'
import photo from '../../assets/image/user.JPG'

const Contact = ({ contact, profile }) => {
    return (
        <div className="flex pl-2 h-40">
            <div className=" flex-auto">
                <div className="pt-3">
                    <div className="float-right text-right">
                        {(contact.phone).trim() !== '' && <span className="text-xs block">{contact.phone}<i className="fa fa-phone pl-1"></i></span>}
                        {(contact.email).trim() !== '' && <span className="text-xs block">{contact.email}<i className="fa fa-at pl-1"></i></span>}
                        {(contact.website).trim() !== '' && <span className="text-xs block">{contact.website}<i className="fa fa-link pl-1" aria-hidden="true"></i></span>}
                        {(profile.current_location).trim() !== '' && <span className="text-xs block capitalize pl-1">{profile.current_location}<i className="fa fa-map-marker pl-2"></i></span>}
                    </div>
                </div>
            </div>
        </div>
    )
}
const Image = ({ image }) => {
    const img = image.source ? image.source : photo;
    return (
        <div className="flex-auto overflow-hidden ">
            <div className=" text-center lg:h-40 sm:h-24 pt-5 pl-1">
                {image.enable && <img src={img} alt="pic" id="photo" style={{objectFit: "cover"}} className="h-32 w-32  rounded-full object-center" />}
            </div>
        </div>
    )
}
const Summary = ({ summary, profile }) => {
    return (
        <div className="flex">
            <div>
                <div className="curriculum uppercase font-bold lg:text-2xl pt-1 pl-2">{profile.name}</div>
                <div className="capitalize font-bold pl-2">{profile.current_designation}</div>
                <p className=" text-xs mt-1 pl-2">
                    {summary}
                </p>
            </div>
        </div>
    )
}
const Skills = ({ skills }) => {
    return (
        <div className="pt-6">
            <div className="title font-bold uppercase block pl-2">skills</div>

            {Object.keys(skills).map((skill, id) => (
                <span key={id}>
                    {(skills[skill].trim()).length > 1 &&
                        <div className={`${(Object.keys(skills).lastIndexOf(skill) !== Object.keys(skills).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} capitalize pl-2 py-2`}>
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
        <div className="pt-4">
            <div className="title font-bold uppercase block pl-2">Experience</div>
            {
                Object.keys(experience).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(experience).lastIndexOf(key1) !== Object.keys(experience).length - 1) ? 'border-dashed border-gray-600 border-b pb-4' : ''} pl-2 pt-2 capitalize`}>
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
                                            <span className="normal-case">{experience[key1].duties}</span>
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
        <div className="pt-8">
            <div className="title font-bold uppercase block pl-2">projects</div>
            {
                Object.keys(projects).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(projects).lastIndexOf(key1) !== Object.keys(projects).length - 1) ? 'border-dashed border-gray-600 border-b pb-4' : ''} pl-2 pt-2 capitalize`}>
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
                                    <li>
                                        <div className="text-sm ">{(projects[key1]['tech_stack']).trim() !== '' &&
                                            <span>
                                                <span className="font-medium">Tech Stack: </span>
                                                <span >{projects[key1]['tech_stack']}</span>
                                            </span>}
                                        </div>
                                    </li>
                                    {(projects[key1].description).trim() !== '' &&
                                        <li>
                                            <span className=" normal-case text-sm">{projects[key1].description}</span>
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
        <div className="pt-4">
            <div className="title font-bold uppercase block pl-2">qualification</div>
            {
                Object.keys(qualification).map((key1, value1) => (
                    <div key={key1} className={`${(Object.keys(qualification).lastIndexOf(key1) !== Object.keys(qualification).length - 1) ? 'border-dashed border-gray-600 border-b pb-4' : ''} pl-2 pt-2 capitalize`}>
                        {(qualification[key1].degree).trim() !== '' && <h4 className=" font-normal">{qualification[key1].degree}</h4>}
                        {(qualification[key1].university).trim() !== '' && <span className=" font-semibold text-sm">{qualification[key1].university}</span>}
                        <div className="text-xs">
                            {(qualification[key1].duration).trim() !== '' && <span className="pr-5"><i className="fa fa-calendar"></i>{' '}{qualification[key1].duration}</span>}
                            {(qualification[key1].grade).trim() !== '' && <span className="pr-5">Grade:{' '}{qualification[key1].grade}</span>}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
const PersonalInfo = ({ profile, address, contact }) => {
    return (
        <div className="pt-8">
            <div className="title font-bold uppercase block pl-2">Personal Info</div>
            <div className='pl-2 pt-2 pb-4 text-sm capitalize'>
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
                {contact.linkedIn.trim() !== '' &&
                    <div className="pb-3 border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">LinkedIn</h4>
                        <span className="break-words lowercase">{contact.linkedIn}</span>
                    </div>}
                {contact.github.trim() !== '' &&
                    <div className="pb-3 border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Github</h4>
                        <span className="break-words lowercase">{contact.github}</span>
                    </div>}
            </div>
        </div>
    )
}
const Certification = ({ certification }) => {
    return (
        <div className="pt-8">
            <div>
                <div className="title font-bold uppercase block pl-2">certification</div>
                {
                    Object.values(certification.description).map((value, id) => (
                        (value.trim() !== '' && <p className="pl-8 mt-1" key={id}>
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
        <div className="pt-8">
            <div className="title font-bold uppercase block pl-2">References</div>
            {
                Object.keys(references).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(references).lastIndexOf(key1) !== Object.keys(references).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} pl-2 pt-2 pb-4 capitalize`}>
                            {(references[key1].name).trim() !== '' && <h4 className=" font-semibold pl-4">{references[key1].name}</h4>}
                            {(references[key1].phone).trim() !== '' && <h5 className=" text-sm"><i className="fa fa-phone"></i>{' '}{references[key1].phone}</h5>}
                            {(references[key1].email).trim() !== '' && <h5 className=" lowercase  text-sm">@{' '}{references[key1].email}</h5>}

                        </div> : null
                ))
            }

        </div>
    )
}
const Hobbies = ({ hobbies }) => {
    return (
        <div className="pt-8">
            <div>
                <div className="title font-bold uppercase block pl-2">hobbies</div>
                {
                    Object.values(hobbies.description).map((value, id) => (
                        (value.trim() !== '' &&
                            <p className="pl-8 mt-1" key={id}>
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
        <div className="">
            {
                Object.entries(add_section).map(([key1, value1]) => (
                    key1 !== "enable" ?
                        ((value1.section_name).trim() !== '' &&
                            <div key={key1}>
                                {Object.entries(value1).map(([section, desc]) => (
                                    <div key={section} >
                                        {section === 'section_name' &&
                                            <div className="pt-8 "><span className="title font-bold uppercase block pl-2">{desc}</span></div>}
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


class Template6 extends React.Component {
    render() {
        const { contact, summary, profile, projects, address, qualification, image,
            skills, experience, certification, references, hobbies, add_section } = this.props.proResume
        return (
            <React.Fragment>
                <div className="grid grid-cols-5 px-8 pb-px pt-8 border-b-2 border-solid border-gray-600">
                    <div className="col-span-2">
                        <Summary summary={summary} profile={profile} />
                    </div>
                    <div className="col-span-1">
                        <Image image={image} />
                    </div>
                    <div className="col-span-2">
                        <Contact contact={contact} profile={profile} />
                    </div>
                </div>
                <div className="flex w-full px-8 pb-8">
                    <div className="w-6/12">
                        <Experience experience={experience} />
                        <Projects projects={projects} />
                        {add_section.enable && <AddSections add_section={add_section} />}
                        {references.enable && <References references={references} />}
                    </div>
                    <div className="w-6/12 pl-4">
                        <Qualification qualification={qualification} />
                        <Skills skills={skills} />
                        {certification.enable && <Certification certification={certification} />}
                        {hobbies.enable && <Hobbies hobbies={hobbies} />}
                        <PersonalInfo profile={profile} address={address} contact={contact} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ proResume }) => ({
    proResume
})

export default connect(mapStateToProps)(Template6)
