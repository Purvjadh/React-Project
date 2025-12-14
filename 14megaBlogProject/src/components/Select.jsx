import React ,{useId} from 'react'

// select ke attribtes name and is hai wo as a props hum spread karenge
//options ka hume automatically ek array hi milta hai
//options me value hoga hi, aisa nahi hai esliye use optionally chain karenge
// option element me as a value hum array se jo value yani jo option ata hai wahi pass karate
//forward reference edhar bhi lagela kyunki eska bhi refrence lagega hume but now it is deprecatedd

function Select({
    options,
    label,
    className='',
    ref,
    ...props
}){
    const id = useId()
    
    return(
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>{label}</label>}

            <select 
            {...props}
            id={id}
            ref={ref}
            className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}
            >
                {options?.map((option) => (
                    <option  key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default Select