import React from 'react'

import { useContext,useState } from 'react'
import UserContext from '../context/userContext'



export function Login(){
    const[username,setUsername]=useState("")

    const[password,setPassword]=useState("")

    const{setUser}=useContext(UserContext)

    const handleClick=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

    return(
        <div className=''>
             
            
            <h2 className='font-semibold text-white'>Login</h2>
            <br/>
            <div>
                <input type="text" placeholder='username' value={username}
                onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <br />
            <div>
                <input type="text" placeholder='password' value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <br />

            <div>
                <button className='bg-blue-300 p-2 rounded-sm'
                onClick={handleClick}
                >Submit</button>
            </div>

        </div>
    )
}