import React,{useId} from 'react'

// when we make any form we require multiple input fields likr for usename, password,email so for that in production grade application we make separate component for input ,but kaisa hai jidhar hamara input fieild hai udhar hi hum state ka access lete hai lekin form banate samay hum login form ke liye alag page ya component banayenge to udhar hume ye input field ka refrence lagega, in that case we use 'ref' earlier forwardRef was there but nowit is deprecated

// now wecan pass ref as a prop

// in html we use 'for' here in jsx we use 'htmlFor' which binds or links label and input

// label ka htmlFor and input field ka id should be same 

//to ref form se pass kiya jayage and to edhar se hame state ka access milega

function Input({
    label,
    type='text',
    className='',
    ref,
    ...props
}){
    const id=useId()
    return(
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input 
             type={type}
             className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border
              border-gay-200 w-full  ${className}`}
              ref={ref}
              {...props}
              id={id}
             />
        </div>
    )
}

export default Input