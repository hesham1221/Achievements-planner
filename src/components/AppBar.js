import React from 'react'
import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import '../styles/Home/home.css'
import photo from '../photos/user.png'

const AppBar = () => {
    return (
        <>
           <Navbar className = 'navbar' variant='light' >
               <NavbarBrand href='#'>Achievements planner </NavbarBrand>
               <NavbarToggle />
               <NavbarCollapse className='nav-col'>
                   <span>welcom, user</span>
                   <div className='photo-container'>  
                 <img  src={photo} className='photo' />
                 </div>
                 <NavLink href='#' className='link' >Logout</NavLink>
               </NavbarCollapse>
            </Navbar> 
        </>
    )
}

export default AppBar
