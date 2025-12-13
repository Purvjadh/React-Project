import React from 'react'

//childern is just button text
// here we are passing props
// giving by default values later we can overwrite it
//className is attribute or we can say property of btn , like this button can have other attributes also so we are spreading that using ...props

function Button ({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor= 'text-white',
    className='',
    ...props

}){
    return(
        <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`}{...props}>{children}</button>
    )
}

// hume bahut sari places par btn use karana padata hai esliye elisye production mai hum hamesha button ke liye ek separate component banake rakhate hai