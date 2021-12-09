import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import MainMenu from './MainMenu';
// import List from './List';

const Menu = (props) => {
 
  return (
    <div>
      
     
        {/* <Nav.Link href="#action1">{props.item}</Nav.Link> */}
        {/* <Nav.Link href="#action2">{props.item}</Nav.Link> */}
 
        {/* {List.map((item1)=> */}
      
        <NavDropdown title={props.title} id="navbarScrollingDropdown">
        {/* )} */}
         
          <NavDropdown.Item href="#action3">{props.items}</NavDropdown.Item>
         
          

       
        </NavDropdown>
    
       
  
    </div>
  )
}

export default Menu;
