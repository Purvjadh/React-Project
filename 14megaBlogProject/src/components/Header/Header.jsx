import React from "react"

import {Logo,LogoutBtn,Container} from '../index'

import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"

//Conditional rendering=> if user is logged in then only show logout button
// useSelector se hi hame pata chalega user is logged in or not
// Here in navItems slug is for url kaha pe ja raha hai we can write it as url also it just a name
// user jab logged in hai to use logged in and sign up ka btn nahi dikhayenge
// active is depend on authstatus mtlab user is logged in or not
//jo html element repeat hota hai udhar hum keys lagate hai
// authStatus true hoha means user logged in hoga tohi use logout btn dikhao otherwise kyu dikhana hai

 function Header () {

    const authStatus=useSelector((state) => state.auth.status)
    const navigate=useNavigate()

    const navItems = [
        {
            name:'Home',
            slug:'/', 
            active:true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    return(
       <header className="py-3 shadow bg-gray-400">
        <Container>
            <nav className="flex">
                <div className="mr-4">
                    <Link to='/'>
                        <Logo width='70px'/>
                    </Link>
                </div>

                <ul className="flex ml-auto">
                    {
                        navItems.map((item)=>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                    onClick={() => navigate(item.slug)}
                                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )
                    }

                    //if authStatus is true then only next code will execute, to uske age ka display hoga
                    {authStatus && (
                        <li><LogoutBtn/></li>
                    )}

                </ul>
            </nav>
        </Container>
       </header>
    )
}

export default Header