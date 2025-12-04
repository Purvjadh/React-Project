import React, { useState } from "react"


import useCourseStore from "../app/courseStore.js"



export const CourseForm = () => {
    const addCourse=useCourseStore((state) => state.addCourse)

    const [courseTitle,setCourseTitle]=useState('')

    const handleSubmit = () => {
        if (!courseTitle) return alert('please enter the course name')
        
        addCourse({
            id:Math.ceil(Math.random()*100000),
            text:courseTitle,
            completed:false
        })

        setCourseTitle('')

    }


    return(
        <>
            <div className="">
                <input className=" shadow-md p-1" value={courseTitle} onChange={(e)=> setCourseTitle(e.target.value)}/>
                <button className="bg-blue-400 shadow-md p-1 rounded-e-md" onClick={() => (handleSubmit())}>Add</button>
            </div>

        </>
    )
}