import React from 'react'
import { connect } from 'react-redux'
import photo from '../../assets/image/user.JPG'

const Image = ({ image }) => {
    const img = image.source ? image.source : photo;
    return (
        <div className="flex justify-center overflow-hidden ">
            <div className=" lg:h-40 sm:h-24 pr-4 pl-4">
                {image.enable && <img src={img} alt="pic" id="photo" className="h-40 w-40  rounded-full object-center" />}
            </div>
        </div>
    )
}
const Contact = ({ contact, profile }) => {
    return (
        <div className="flex mt-2 justify-center text-center border border-gray-600 border-solid">
            <div className="">
                {(contact.cell).trim() !== '' && <div><p className="pt-2 text-xs font-semibold block">Phone Number</p><p className="text-xs">{contact.cell}</p></div>}
                {(contact.email).trim() !== '' && <div><p className="pt-2 text-xs font-semibold block">Email Address</p><p className="text-xs ">{contact.email}</p></div>}
                {(contact.website).trim() !== '' && <div><p className="pt-2 text-xs font-semibold block">Website</p><p className="text-xs ">{contact.website}</p></div>}
                {(profile.current_location).trim() !== '' && <div><p className="pt-2 text-xs font-semibold "><i className="fa fa-map-marker"></i></p><p className="pb-2 text-xs block capitalize">{profile.current_location}</p></div>}
            </div>
        </div>
    )
}
const Summary = ({ summary }) => {
    return (
        <div className="flex  text-justify">
            <div>
                <p className="title font-bold uppercase border-solid border-gray-600 border-b block">summary</p>
                <p className="text-sm ">
                    {summary}
                </p>
            </div>
        </div >
    )
}
const Skills = ({ skills }) => {
    return (
        <div className="pt-8">
            <p className="title font-bold uppercase border-solid border-gray-600 border-b text-center block">skills</p>

            {Object.keys(skills).map((skill, id) => (
                <span key={id}>
                    {(skills[skill].trim()).length > 1 &&
                        <div className={`${(Object.keys(skills).lastIndexOf(skill) !== Object.keys(skills).length - 1) ? 'border-dashed border-gray-600 border-b pb-4' : ''} pt-2  capitalize`}>
                            <h4 className=" font-normal pb-2 text-center">{skill.split('_').join(' ')}</h4>

                            {skills[skill].split(',').map(k => (
                                <span key={k} className="pl-1 pr-1 mb-1 text-sm font-semibold w-auto border-gray-600">{k}</span>
                            ))}
                        </div>}
                </span>
            ))}
        </div>
    )
}
const Experience = ({ experience }) => {
    return (
        <div className="pt-8">
            <div className="title font-bold uppercase border-solid border-gray-600 border-b block">Experience</div>
            {
                Object.keys(experience).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(experience).lastIndexOf(key1) !== Object.keys(experience).length - 1) ? 'border-dashed border-gray-600 border-b pb-4 ' : ''} pt-2 capitalize`}>
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
            <div className="title font-bold uppercase border-solid border-gray-600 border-b block">projects</div>
            {
                Object.keys(projects).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(projects).lastIndexOf(key1) !== Object.keys(projects).length - 1) ? 'border-dashed border-gray-600 border-b  pb-4 ' : ''} pt-2 capitalize`}>
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
        <div className="pt-8">
            <p className="title font-bold uppercase border-solid border-gray-600 border-b block">qualification</p>
            {
                Object.keys(qualification).map((key1, value1) => (
                    <div key={key1} className={`${(Object.keys(qualification).lastIndexOf(key1) !== Object.keys(qualification).length - 1) ? 'border-dashed border-gray-600 border-b pb-4' : ''} pt-2  capitalize`}>
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
            <p className="title font-bold uppercase border-solid border-gray-600 border-b text-center block">Personal Info</p>
            <div className='pb-4 text-sm capitalize'>
                {(profile.date_of_birth).trim() !== '' &&
                    <div className="pb-3  pt-2 text-center  border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Date of Birth</h4>
                        <h4>{profile.date_of_birth}</h4>
                    </div>}
                {(profile.gender).trim() !== '' &&
                    <div className="pb-3 pt-2 text-center  border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Gender</h4>
                        <h4 className="">{profile.gender}</h4>
                    </div>}
                {(profile.languages).trim() !== '' &&
                    <div className="pb-3 pt-2 text-center  border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Languages Known</h4>
                        <h4 className="">{profile.languages}</h4>
                    </div>}
                {address.trim() !== '' &&
                    <div className="pb-3 pt-2 text-center  border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Address</h4>
                        <address>{address}</address>
                    </div>}
                {contact.linkedIn.trim() !== '' &&
                    <div className="pb-3 pt-2 text-center  border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">LinkedIn</h4>
                        <h4 className="break-words lowercase">{contact.linkedIn}</h4>
                    </div>}
                {contact.github.trim() !== '' &&
                    <div className="pb-3 pt-2 text-center  border-dashed border-gray-600 border-b">
                        <h4 className="font-medium">Github</h4>
                        <h4 className="break-words lowercase">{contact.github}</h4>
                    </div>}
            </div>
        </div>
    )
}
const Certification = ({ certification }) => {
    return (
        <div className="pt-8">
            <div>
                <p className="title font-bold uppercase border-solid border-gray-600 border-b text-center block">certification</p>
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
        <div className="pt-8">
            <div className="title font-bold uppercase border-solid border-gray-600 border-b block">References</div>
            {
                Object.keys(references).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(references).lastIndexOf(key1) !== Object.keys(references).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} pt-2 pb-4 capitalize`}>
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
                <p className="title font-bold uppercase border-solid border-gray-600 border-b text-center block">hobbies</p>
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
        <div className="">
            {
                Object.entries(add_section).map(([key1, value1]) => (
                    key1 !== "enable" ?
                        ((value1.section_name).trim() !== '' &&
                            <div key={key1}>
                                {Object.entries(value1).map(([section, desc]) => (
                                    <div key={section} >
                                        {section === 'section_name' &&
                                            <div className="pt-8"><span className="title font-bold uppercase border-solid border-gray-600 border-b block">{desc}</span></div>}
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


class Template4 extends React.Component {
    render() {
        const { contact, summary, profile, projects, address, qualification, image,
            skills, experience, certification, references, hobbies, add_section } = this.props.proResume
        const { bgcolor, fontColor } = this.props.proResume.templates.colors.Template4
        return (
            <React.Fragment>
                <div className="flex w-full">
                    <div style={{ backgroundColor: bgcolor, color: fontColor }} className="w-4/12 h-full  pl-6 pr-6 py-8">
                        <Image image={image} />
                        <div className="text-center">
                            <p className="uppercase font-bold lg:text-2xl pt-1">{profile.name}</p>
                            <p className="capitalize font-bold">{profile.current_designation}</p>
                        </div>
                        <Contact contact={contact} profile={profile} />
                        <Skills skills={skills} />
                        {certification.enable && <Certification certification={certification} />}
                        {hobbies.enable && <Hobbies hobbies={hobbies} />}
                        <PersonalInfo profile={profile} address={address} contact={contact} />
                    </div>
                    <div className="w-auto px-2"></div>
                    <div className=" w-8/12 pr-6 py-8">
                        <Summary summary={summary} />
                        <Experience experience={experience} />
                        <Projects projects={projects} />
                        <Qualification qualification={qualification} />
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

export default connect(mapStateToProps)(Template4)
