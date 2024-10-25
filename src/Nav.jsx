import React from 'react'
import './Nav.css'
function Nav({HandleSearch}) {
   
  return (
    <div className='nav'>
       <input type="text" onChange={HandleSearch} />
        <div className='link'>
         <p>Home</p>
         <p>About</p>
         <p>Contact Us</p>
        </div>
    </div>
  )
}

export default Nav