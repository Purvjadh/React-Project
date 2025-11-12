import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h3>Custom React App!!! | chai aur code</h3>
    )
}

/*
const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    childern:'click me to visit google'
}
*/

const anotherElement=(
    <a href="https://goggle.com" target="_blank">Visit Google</a>
)



const myName=' Purva Jadhav'

//correct element
const reactElement=React.createElement(
    'a',
    {href:'https://google.com',title:'_blank'},
    'Click on me !!!',
     myName
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
    //<App />,
    //<MyApp/>
    //MyApp()
    //ReactElement
    //anotherElement
    reactElement
)
