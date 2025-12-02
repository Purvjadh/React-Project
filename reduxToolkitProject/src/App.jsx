
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'


function App() {
 

  return (
    <>
     <div className='text-2xl font-bold text-white'> Todo with Redux Tolkit</div>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
