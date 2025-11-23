import React from "react"
import { useParams } from "react-router-dom"

function User(){

    const {userid}=useParams()
   return(
     <>
    <h1 className="text-center font-bold text-2xl bg-slate-400 h-96">User:-{userid}</h1>
    </>
   )
}

export default User