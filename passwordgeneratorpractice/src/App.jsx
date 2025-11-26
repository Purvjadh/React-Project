import { useEffect, useState,useCallback,useRef} from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [characterAllowed,setCharacterAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const passRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let  pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+='0123456789'
    if(characterAllowed) str+='~`!@#$%^&*()_+=-{}|:<>,./?'

    for (let i = 1; i <= length; i++) {
      const pos= Math.floor(Math.random()*str.length+1)
      const char=str.charAt(pos)
      pass+=char
    }
    setPassword(pass)
  },
  [length,numberAllowed,characterAllowed,setPassword])
  
 const copyToClipboard= useCallback(()=>{
        passRef.current?.select()
       window.navigator.clipboard.writeText(password)
      
  },[password])
  

  useEffect(()=>{
    passwordGenerator()
  },
  [length,numberAllowed,characterAllowed])


 
  
  
  
  return (
    <>
      
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            value={password}
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyToClipboard}
        >
        copy
        </button>
    </div>


    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        className='cursor-pointer'
        value={length}
        max={200}
        min={8}
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length:{length} </label>
     </div>

    <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          value={numberAllowed}
          defaultChecked={false}
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>

    <div className="flex items-center gap-x-1">
      <input
        type="checkbox"
        id="characterInput"
        defaultChecked={false}
        onChange={()=>{setCharacterAllowed((prev)=>!prev)}}
      />
      <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
    
    </>
  )
}

export default App
