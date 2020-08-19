import React from 'react'
import Draggable from "react-draggable";
import Button from '../Shared/Button'
import Template1 from '../../templates/Template1';

const Resume = () => {
    const printMe = () => {
        const printContents = document.getElementById('page').innerHTML

        document.getElementById('print-page').innerHTML = printContents
        window.alert("Select option to save as PDF")
        window.print()
    }

    return (
        <div className="flex-1 overflow-hidden shadow-inner relative w-full h-full">
            <Draggable
                handle=".drag"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
            >
                <div className="drag px-8 py-16 m-3 bg-white shadow-2xl rounded-sm cursor-move" id="page">
                    <Template1 />
                </div>
            </Draggable>
            <div className="bottom-0 fixed z-50">
                <Button onClickHandle={printMe} color="blue">Print or Save</Button>
            </div>
        </div>
    )
}
export default Resume;