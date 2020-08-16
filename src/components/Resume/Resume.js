import React from 'react'
import Draggable from "react-draggable";

import Template1 from '../../templates/Template1';

const Resume = () => {
    const printMe = () => {
        const printContents = document.getElementById('page').innerHTML

        document.getElementById('print-page').innerHTML = printContents

        window.print()
    }
    return (
        <div className="flex-1 p-1 my-2 overflow-hidden shadow-inner relative ">
            <Draggable
                handle=".drag"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
            >
                <div className="drag px-8 py-16 m-3  bg-white shadow-lg rounded-sm cursor-move" id="page">
                    <Template1 />
                </div>
            </Draggable>
            <div className="bottom-0 fixed bg-gray-500">
                <button onClick={printMe} className="rounded-sm bg-black text-white px-5 m-1">Print</button>
            </div>
        </div>
    )
}
export default Resume;