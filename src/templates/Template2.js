import React from 'react'

import photo from '../assets/images/me.JPG'

const Contact = () => {
    return (
        <div className="flex">
            <div className="flex-1 text-left">
                <span className="text-xs block">Contact No: 8217895259</span>
                <span className="text-xs block">raghu55mirashi@gmail.com</span>
            </div>
            <div className="flex-1 py-10 text-center pt-16">
                <span className="font-bold text-lg">CURRICULUM VITAE</span>
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="flex justify-center">
                    <img src={photo} alt="pic" className="h-40 w-40 rounded-full object-center" />
                </div>
            </div>
        </div>
    )
}
const Objective = () => {
    return (
        <div className="flex">
            <div>
                <h1 className="font-bold uppercase pb-1">objective:</h1>
                <p className="text-base font-semibold">
                    Being given to understand that you are entertaining candidates for various jobs in your
                    esteemed organization. I offer myself as one of the candidate for a suitable job and furnish
                    the following Curriculum Vitae for favoring of your consideration and early orders.
                </p>
            </div>
        </div>
    )
}
const Profile = () => {
    return (
        <div className="flex-1">
            <h1 className="font-bold uppercase py-1 pt-4">PERSONAL PROFILE:</h1>
            <table className="table-auto">
                <thead></thead>
                <tbody>
                    <tr><td className="align-top pt-2">Name</td><td className="pr-2 align-top pt-2">:</td><td className="align-top pt-2">Raghavendra Apparao Mirashi</td></tr>
                    <tr><td className="align-top pt-2">Date of Birth</td><td className="pr-2 align-top pt-2">:</td><td className="align-top pt-2">5th March 1988</td></tr>
                    <tr><td className="align-top pt-2">Gender</td><td className="pr-2 align-top pt-2">:</td><td className="align-top pt-2">Male</td></tr>
                    <tr><td className="align-top pt-2">Father’s Name</td><td className="pr-2 align-top pt-2">:</td><td className="align-top pt-2">Apparao Mirashi</td></tr>
                    <tr><td className="align-top pt-2">Marital status</td><td className="pr-2 align-top pt-2">:</td><td className="align-top pt-2">Unmarried</td></tr>
                    <tr><td className="align-top pt-2">Languages known</td><td className="pr-2 align-top pt-2">:</td><td className="align-top pt-2">English, Hindi, Marathi, Kannada</td></tr>
                </tbody>
            </table>
        </div>
    )
}
const Address = () => {
    return (
        <div className="flex-initial max-w-xs">
            <p className="font-bold pr-10 pt-4">Permanent Address:</p>
            <table>
                <thead></thead>
                <tbody>
                    <tr><td className="align-top pt-2">At</td><td className="pr-2 align-top pt-2">:</td><td className="pt-2 align-top">Mundwad</td></tr>
                    <tr><td className="align-top pt-2">Post</td><td className="pr-2 align-top pt-2">:</td><td className="pt-2 align-top">Kannigeri</td></tr>
                    <tr><td className="align-top pt-2">Tal</td><td className="pr-2 align-top pt-2">:</td><td className="pt-2 align-top">Yellapur</td></tr>
                    <tr><td className="align-top pt-2">Dist</td><td className="pr-2 align-top pt-2">:</td><td className="pt-2 align-top">Uttar kannada</td></tr>
                    <tr><td className="align-top pt-2">State</td><td className="pr-2 align-top pt-2">:</td><td className="pt-2 align-top">Karnataka</td></tr>
                    <tr><td className="align-top pt-2">Pin</td><td className="pr-2 align-top pt-2">:</td><td className="pt-2 align-top">581359</td></tr>
                </tbody>
            </table>
        </div>
    )
}
const ProfileAndAddress = () => {
    return (
        <div className="flex">
            <Profile />
            <Address />
        </div>
    )
}
const Qualification = () => {
    return (
        <div className="flex">
            <div>
                <h1 className="font-bold uppercase pb-1 pt-4">qualification:</h1>
                <p className="text-base font-semibold pl-8">
                    Bachelor of Engineering in Computer Science
                </p>
            </div>
        </div>
    )
}
const Skills = () => {
    return (
        <div className="flex">
            <div>
                <h1 className="font-bold uppercase pb-1 pt-4">additional skills:</h1>
                <ul className="pl-8">
                    <li className="list-disc text-base">
                        Computer networking and System Services
                    </li>
                    <li className="list-disc text-base">
                        Windows and Linux Operating Systems
                    </li>
                </ul>
            </div>
        </div>
    )
}
const Experience = () => {
    return (
        <div className="flex">
            <div>
                <h1 className="font-bold uppercase pb-1 pt-4">Work Experience:</h1>
                <p className="text-base pl-8">
                    1 year as Software Developer in Softebizz Technologies Pvt Ltd/Pune
                </p>
                <p className="text-base pl-8">
                    3 Years as IT-Engineer in Premier Services/Goa
               </p>
            </div>
        </div>
    )
}
const Certification = () => {
    return (
        <div className="flex">
            <div>
                <h1 className="font-bold uppercase pb-1 pt-4">certification:</h1>
                <p className="text-base pl-8">
                    <span className="font-semibold">Land Acquisition Certificate</span> - Land acquired by state Govt. in Bommanalli pickup Dam
                </p>
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

const Template1 = () => {
    return (
        <React.Fragment>
            <Contact />
            <Objective />
            <ProfileAndAddress />
            <Qualification />
            <Skills />
            <Experience />
            <Certification />
            <Declaration />
        </React.Fragment>
    )
}

export default Template1
