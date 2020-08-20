import React, { useState } from 'react'
import Draggable from "react-draggable";
import Button from '../Shared/Button'
import Template1 from '../../templates/Template1';

const Resume = () => {
    const [pos, setPos] = useState('top')
    const printMe = () => {
        const printContents = document.getElementById('page').innerHTML

        document.getElementById('print-page').innerHTML = printContents
        window.alert("Select option to save as PDF")
        window.print()
    }
    const scrollButton = () => {
        if (pos === 'top') {
            window.scrollTo({
                top: 2000,
                left: 0,
                behavior: 'smooth'
            });
            setPos('bottom')
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            setPos('top')
        }
    }
    return (
        <div className="flex-1 overflow-hidden shadow-inner relative">
            <Draggable
                handle=".drag"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
            >
                <div className=" lg:w-11/12 lg:h-auto xl:w-11/12  xl:h-auto  drag px-8 py-16 m-3 bg-white shadow-2xl rounded-sm cursor-move" id="page">
                    <Template1 />
                </div>
            </Draggable>
            <div className="bottom-0 fixed z-50">
                <Button onClickHandle={printMe} color="blue">Print or Save</Button>
            </div>
            <div className="bottom-0 fixed z-50 right-0 lg:hidden sm:block mb-2">
                <button className=" bg-gray-400 rounded pl-3 pr-3 text-black" onClick={scrollButton} >&#8691;</button>
            </div>
        </div>
    )
}
export default Resume;