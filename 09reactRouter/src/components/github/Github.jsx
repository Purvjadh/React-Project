import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data=useLoaderData()
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then((data)=>setData(data))
    // },[])

    return(
        <>
          <div className='bg-slate-400'>
          <h1 className='text-center text-2xl font-bold text-orange-700' >Github</h1>
          <img src={data.avatar_url} alt="profile pic" className='w-40 ' />
          <br />
          <div className='text-lg font-semibold'>Followers: {data.followers}</div>
          <div className='text-lg font-semibold pb-3'>Following: {data.following}</div>
          </div>
        </>
    )
}

export default Github

//another approach for fetaching data from Api

export const githubApiInfoLoader= async()=>{
    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
 