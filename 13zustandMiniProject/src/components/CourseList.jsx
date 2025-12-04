import React from "react"
import useCourseStore from "../app/courseStore"



export const CourseList = ({course}) => {
  
   const removeCourse= useCourseStore((state) => state.removeCourse)
   const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus)
   //console.log(courses)
   

  
  
    return(
       <div className="flex justify-between">
        <input type="checkbox" value={course.completed} onChange={(e) => toggleCourseStatus(course.id)}/>
        <span className="">{course.text}</span>
        <button onClick={(e) => removeCourse(course.id)} className="bg-blue-400 px-1 rounded-md">Delete</button>
       </div>
    )
}