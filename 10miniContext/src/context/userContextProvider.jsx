import React from 'react'

import UserContext from './userContext'



const UserContextProvider = ({children}) => {
    const [user,setUser]=React.useState(null)//the data for which we  are providing access,We can make API Callls here 
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}  {/*components to which are giving access*/}
        </UserContext.Provider> 
    )
}

export default UserContextProvider