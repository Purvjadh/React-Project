import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//To check the authenticaton status of pages we want

export default function Protected({children,authentication=true}){
    const navigate=useNavigate()
    const [loader,setLoader] =useState(true)
    const authStatus= useSelector((state) => (state.auth.status))

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login')
        } else if (!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    },
    [authStatus,navigate,authentication])


    return loader ? <h1> loading ...</h1> : <>{children}</>
}

