import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 justify-center bg-sky-950 w-[100%] p-3 text-2xl font-bold'>
   
    <NavLink 
    className={({isActive}) =>
              isActive ? 'text-blue-500' : "text-white"
  }
    
    to="/"
    
    >
        Home
    </NavLink>

    <NavLink 
    className={({isActive}) =>
          isActive ? 'text-blue-600' : "text-white"}
    
    to="/pastes"
    
    >
        Pastes
    </NavLink>

    </div>
  )
}

export default Navbar
