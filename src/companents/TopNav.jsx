import React from 'react'
import './TopNav.css'
import { Link, NavLink } from 'react-router-dom'

export const TopNav = () => {
    return (
        <>
            <div class='navbar'>
                <div id='logo'><h2>Hey ! yadav ji </h2></div>

                <NavLink class='nav1'>

                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/experiences'>Experiences</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                </NavLink>
            </div>
          {/* <Home/> */}
          {/* <Maincontente></Maincontente> */}
          {/* <Slider></Slider> */}
          {/* <Maincontente></Maincontente> */}
        </>
    )
}
export default TopNav