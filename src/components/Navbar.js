import React from 'react'

const Navbar = (props) => {

    const {isDark, setDark} = props;
    
    if(isDark){
        var theme='🌞';
    }
    else{
        theme='🌚';
    }
    return (
        <div className="dark:bg-slate-800  dark:text-white" >
        <nav className="sticky dark:border-b-slate-800 top-0 z-10 bg-white dark:bg-slate-800 dark:text-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <span className="text-2xl text-gray-900 font-semibold dark:text-white">Greetings!</span>
            <div className="flex space-x-4 text-gray-900 text-lg dark:text-white">
                <a href="#about">About</a>
                <a href="#quali">Qualifications</a>
                <a href="#it">IT Proficiency</a>
                <a href="#job">Experience</a>
                <a href="#strenghts">Strenghts</a>
                <a href="#hobbies">Hobbies</a>
                <a href="#contact">Contact Me!</a>
                <button className="text-2xl pl-2" onClick={()=>{setDark(!isDark)}}>{theme}</button>
            </div>
        </div>
        </div>
        </nav>
        </div>
    )
}

export default Navbar
