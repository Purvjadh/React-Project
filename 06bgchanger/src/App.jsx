import { useState } from 'react'




function App() {
 const [color,setColor] = useState("olive")

  return (
   <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor('Red')} className='text-white py-2 rounded-2xl font-bold px-5' style={{backgroundColor:'red'}} >
              Red
            </button>

            <button onClick={()=>setColor('Blue')} className='text-white py-2 px-5 rounded-2xl font-bold' style={{backgroundColor:'blue'}}>
              blue
            </button>

            <button onClick={()=>setColor('Green')} className='text-white py-2 px-5 rounded-2xl font-bold' style={{backgroundColor:'green'}}>
              green
            </button>

            <button onClick={()=>setColor('Orange')} className='text-white py-2 px-5 rounded-2xl font-bold' style={{backgroundColor:'orange'}}>
              Orange
            </button>

            <button onClick={()=>setColor('gray')} className='text-white py-2 px-5 rounded-2xl font-bold' style={{backgroundColor:'gray'}}>
              gray
            </button>

            <button onClick={()=>setColor('Violet')}className='text-white py-2 px-5  rounded-2xl font-bold' style={{backgroundColor:'violet'}}>
              Violet
            </button>

            <button onClick={()=>setColor('black')} className='text-white py-2 px-5  rounded-2xl font-bold' style={{backgroundColor:'black'}}>
              black
            </button>

            <button onClick={()=>setColor('pink')} className='text-white py-2 px-5  rounded-2xl font-bold' style={{backgroundColor:'pink'}}>
              pink
            </button>

            
        </div>
    </div>
   </div>

   
  )
}

export default App
