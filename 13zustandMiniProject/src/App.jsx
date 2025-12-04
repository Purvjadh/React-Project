import useCourseStore from './app/courseStore'
import './App.css'
import { CourseForm } from './components/CourseForm'
import { CourseList } from './components/CourseList'

function App() {
 const courses = useCourseStore((state) => state.courses)

  return (
    <>
    <div className='mb-4'>
        <CourseForm/>
    </div>
     
     <div className='mb-4'>
        {
          courses.map((course) => 
          <div key={course.id} className={`${course.completed?'bg-pink-400':'bg-slate-400'} mb-3 p-2 `} >
              <CourseList course={course}/>
          </div>
         )
        }
     </div>
    </>
  )
}

export default App
