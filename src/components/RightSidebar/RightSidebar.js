import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function RightSidebar() {
    useEffect(() => {
        toast.dark(`Hello I am Toaster.`, {
            bodyClassName: 'text-center text-black-800 py-2',
        });
    })

    return (
        <div className="left-right-container">
            <div className="bg-white rounded shadow text-center sticky top-0">
                <h2>Right</h2>
            </div>
        </div>
    )
}
