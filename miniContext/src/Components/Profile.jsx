import React,{useContext} from "react";
import UserContext from "../context/userContext";

 export function Profile(){

    const{user}=useContext(UserContext)

   if(!user) return <div className="text-white"><br/>Please Login</div>

   return  (
        <div className='text-white font-medium text-lg'>
            Welcome! {user.username}     
        </div>
   )

        
        
        
    

}