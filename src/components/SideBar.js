import React, { useState } from "react";
import { Collapse, Nav, NavLink } from "react-bootstrap";
import { Drawer } from "react-bootstrap-drawer";
import '../styles/Home/home.css'

const SideBar = () => {
    const [open,setOpen] = useState(true);
    const clickHandler=()=>{
        setOpen(()=>!open)
    }
  return (
    <div>
      <Drawer  className='draw_container'>
        <Drawer.Toggle className='tog' onClick={clickHandler} />

        <Collapse in={open} >
          <Drawer.Overflow>
            <Drawer.ToC>
              <Drawer.Header className='draw_header'>Keep up , you are <br/> 100% engineer</Drawer.Header>

              <Drawer.Nav>
                <NavLink className='draw_items'>My ToDo List</NavLink>
                <NavLink className='draw_items'> Week Summary</NavLink>
                <NavLink className='draw_items'> Week Summary</NavLink>
                <NavLink className='draw_items'>Achieved</NavLink>
                <NavLink className='draw_items'> My Courses</NavLink>
                <NavLink className='draw_items'> My Books</NavLink>
                <NavLink className='draw_items'> Category</NavLink>
              </Drawer.Nav>
            </Drawer.ToC>
          </Drawer.Overflow>
        </Collapse>
      </Drawer>
    </div>
  );
};

export default SideBar;
