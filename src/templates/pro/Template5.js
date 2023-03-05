import React from 'react'
import { connect } from 'react-redux'
import photo from '../../assets/image/user.JPG'

const Contact = ({ contact, profile }) => {
    return (
        <div className="flex pl-2 h-40">
            <div className=" flex-auto">
                <div className="curriculum uppercase font-bold lg:text-2xl pt-1">{profile.name}</div>
                <div className="capitalize font-bold">{profile.current_designation}</div>
                <div className="pt-3">
                    <div className="float-left">
                        {(contact.phone).trim() !== '' && <span className="text-xs block"><i className="fa fa-phone"></i>{' '}{contact.phone}</span>}
                        {(profile.current_location).trim() !== '' && <span className="text-xs block capitalize pl-1"><i className="fa fa-map-marker"></i>{' '}{profile.current_location}</span>}
                    </div>
                    <div className="float-right">
                        {(contact.email).trim() !== '' && <span className="text-xs block"><i className="fa fa-at"></i>{' '}{contact.email}</span>}
                        {(contact.website).trim() !== '' && <span className="text-xs block"><i className="fa fa-link" aria-hidden="true"></i>{' '}{contact.website}</span>}
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
            <div className="float-left"></div>
            <div className=" float-right lg:h-40 sm:h-24 pr-4">
                {image.enable && <img src={img} alt="pic" id="photo" style={{objectFit: "cover"}} className="h-40 w-40  rounded-full object-center" />}
            </div>
        </div>
    )
}
const Summary = ({ summary }) => {
    return (
        <div className="flex">
            <div>
                <div className="title font-bold uppercase bg-gray-200 block pl-2">summary</div>
                <p className="text-sm mt-1 pl-2">
                    {summary}
                </p>
            </div>
        </div>
    )
}
const Skills = ({ skills }) => {
    return (
        <div className="pt-8">
            <div className="title font-bold uppercase bg-gray-200 block pl-2">skills</div>

            {Object.keys(skills).map((skill, id) => (
                <span key={id}>
                    {(skills[skill].trim()).length > 1 &&
                        <div className={`${(Object.keys(skills).lastIndexOf(skill) !== Object.keys(skills).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} capitalize pl-2 py-2`}>
                            <h4 className=" font-normal pb-2">{skill.split('_').join(' ')}</h4>

                            {skills[skill].split(',').map(k => (
                                k.trim() !== '' && <span key={k} className="mr-1 mb-1 text-sm font-semibold w-auto bg-gray-700 px-2 text-white rounded inline-block">{k}</span>
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
            <div className="title font-bold uppercase bg-gray-200 block pl-2">Experience</div>
            {
                Object.keys(experience).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(experience).lastIndexOf(key1) !== Object.keys(experience).length - 1) ? 'border-dashed border-gray-600 border-b pb-4' : ''} pl-2 pt-2 capitalize`}>
                            <div className="grid grid-cols-8">
                                <div className="col-span-6">
                                    {(experience[key1].designation).trim() !== '' && <h4 className=" font-normal">{experience[key1].designation}</h4>}
                                </div>
                                <div className="text-xs col-span-2 text-right">
                                    {(experience[key1].duration).trim() !== '' && <span><i className="fa fa-calendar"></i>{' '}{experience[key1].duration}</span>}
                                </div>
                            </div>
                            <div className="grid grid-cols-8">
                                <div className="col-span-6">
                                    {(experience[key1].company).trim() !== '' && <span className=" font-semibold text-sm">{experience[key1].company}</span>}
                                </div>
                                <div className="text-xs col-span-2 text-right">
                                    {(experience[key1].place).trim() !== '' && <span><i className="fa fa-map-marker"></i>{' '}{experience[key1].place}</span>}
                                </div>
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
            <div className="title font-bold uppercase bg-gray-200 block pl-2">projects</div>
            {
                Object.keys(projects).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(projects).lastIndexOf(key1) !== Object.keys(projects).length - 1) ? 'border-dashed border-gray-600 border-b pb-4' : ''} pl-2 pt-2 capitalize`}>
                            <div className="grid grid-cols-8">
                                <div className="col-span-6">
                                    {(projects[key1].project_name).trim() !== '' && <h4 className=" font-normal">{projects[key1].project_name}</h4>}
                                </div>
                                <div className="text-xs col-span-2 text-right">
                                    {(projects[key1].duration).trim() !== '' && <span><i className="fa fa-calendar"></i>{' '}{projects[key1].duration}</span>}
                                </div>
                            </div>
                            <div className="grid grid-cols-8">
                                <div className="col-span-6">
                                    {(projects[key1].company).trim() !== '' && <span className=" font-semibold text-sm">{projects[key1].company}</span>}
                                </div>
                                <div className="text-xs col-span-2 text-right">
                                    {(projects[key1].place).trim() !== '' && <span><i className="fa fa-map-marker"></i>{' '}{projects[key1].place}</span>}
                                </div>
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
        <div className="pt-6">
            <div className="title font-bold uppercase bg-gray-200 block pl-2">qualification</div>
            {
                Object.keys(qualification).map((key1, value1) => (
                    <div key={key1} className={`${(Object.keys(qualification).lastIndexOf(key1) !== Object.keys(qualification).length - 1) ? 'border-dashed border-gray-600 border-b pb-4' : ''} pl-2 pt-2 capitalize`}>
                        <div className="grid grid-cols-8">
                            <div className="col-span-6">
                                {(qualification[key1].degree).trim() !== '' && <h4 className=" font-normal">{qualification[key1].degree}</h4>}
                            </div>
                            <div className="text-xs col-span-2 text-right">
                                <div className="text-xs">
                                    {(qualification[key1].grade).trim() !== '' && <span className="pr-5">Grade:{' '}{qualification[key1].grade}</span>}
                                    {(qualification[key1].duration).trim() !== '' && <span className="pr-5"><i className="fa fa-calendar"></i>{' '}{qualification[key1].duration}</span>}
                                </div>
                            </div>
                        </div>

                        {(qualification[key1].university).trim() !== '' && <span className=" font-semibold text-sm">{qualification[key1].university}</span>}

                    </div>
                ))
            }

        </div>
    )
}
const PersonalInfo = ({ profile, address, contact }) => {
    return (
        <div className="pt-8">
            <div className="title font-bold uppercase bg-gray-200 block pl-2">Personal Info</div>
            <div className='pl-2 pt-2 pb-4 text-sm capitalize'>
                {(profile.date_of_birth).trim() !== '' &&
                    <div className="border-dashed border-gray-600 border-b">
                        <h4 className="font-medium py-1">Date of Birth:<span className="font-normal pl-2">{profile.date_of_birth}</span></h4>
                    </div>}
                {(profile.gender).trim() !== '' &&
                    <div className="border-dashed border-gray-600 border-b">
                        <h4 className="font-medium py-1">Gender:<span className="font-normal pl-2">{profile.gender}</span></h4>
                    </div>}
                {(profile.languages).trim() !== '' &&
                    <div className="border-dashed border-gray-600 border-b">
                        <h4 className="font-medium py-1">Languages Known:<span className="font-normal pl-2">{profile.languages}</span></h4>
                    </div>}
                {address.trim() !== '' &&
                    <div className="border-dashed border-gray-600 border-b">
                        <h4 className="font-medium py-1">Address:<address className="font-normal pl-2 inline">{address}</address></h4>
                    </div>}
                {contact.linkedIn.trim() !== '' &&
                    <div className="border-dashed border-gray-600 border-b">
                        <h4 className="font-medium py-1">LinkedIn: <span className="font-normal pl-2 break-words lowercase">{contact.linkedIn}</span></h4>
                    </div>}
                {contact.github.trim() !== '' &&
                    <div className="border-dashed border-gray-600 border-b">
                        <h4 className="font-medium py-1">Github: <span className="font-normal pl-2 break-words lowercase">{contact.github}</span></h4>
                    </div>}
            </div>
        </div>
    )
}
const Certification = ({ certification }) => {
    return (
        <div className="pt-8">
            <div>
                <div className="title font-bold uppercase bg-gray-200 block pl-2">certification</div>
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
        <div className="pt-4">
            <div className="title font-bold uppercase bg-gray-200 block pl-2">References</div>
            {
                Object.keys(references).map((key1, value1) => (
                    key1 !== "enable" ?
                        <div key={key1} className={`${(Object.keys(references).lastIndexOf(key1) !== Object.keys(references).length - 1) ? 'border-dashed border-gray-600 border-b' : ''} pl-2 pt-2 pb-4 capitalize`}>
                            {(references[key1].name)?.trim() !== '' && <h4 className=" font-semibold pl-4">{references[key1].name}</h4>}
                            {(references[key1].phone)?.trim() !== '' && <h5 className=" text-sm"><i className="fa fa-phone"></i>{' '}{references[key1].phone}</h5>}
                            {(references[key1].email)?.trim() !== '' && <h5 className=" lowercase  text-sm">@{' '}{references[key1].email}</h5>}

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
                <div className="title font-bold uppercase bg-gray-200 block pl-2">hobbies</div>
                {
                    Object.values(hobbies.description).map((value, id) => (
                        (value.trim() !== '' &&
                            <p className="pl-8 mt-1 inline-block" key={id}>
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
                                            <div className="pt-8 "><span className="title font-bold uppercase bg-gray-200 block pl-2">{desc}</span></div>}
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


class Template5 extends React.Component {
    render() {
        const { contact, summary, profile, projects, address, qualification, image,
            skills, experience, certification, references, hobbies, add_section } = this.props.proResume
        return (
            <React.Fragment>
                <div className="flex p-8">
                    <div className="w-full">
                        <div className="flex">
                            <div className="w-3/5"><Contact contact={contact} profile={profile} /></div>
                            <div className="w-2/5"><Image image={image} /></div>
                        </div>
                        <Summary summary={summary} />
                        <Experience experience={experience} />
                        <Projects projects={projects} />
                        <Skills skills={skills} />
                        <Qualification qualification={qualification} />
                        {certification.enable && <Certification certification={certification} />}
                        {hobbies.enable && <Hobbies hobbies={hobbies} />}
                        {add_section.enable && <AddSections add_section={add_section} />}
                        <PersonalInfo profile={profile} address={address} contact={contact} />
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

export default connect(mapStateToProps)(Template5)
