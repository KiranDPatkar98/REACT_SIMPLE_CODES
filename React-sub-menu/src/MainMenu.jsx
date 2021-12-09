import React from 'react'
import Menu from './Menu';
import List from './List'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';




const MainMenu = () => {
  
  return (
    <div>
       <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      > 
   {/* <ul>
   {
     
List.map((value,index)=><Menu  title={value.name} items={()=>value.id(value.name)} />)
   }
  </ul> */}
  
    
  
  {List.map((item1) => (
      <NavDropdown title={item1.name} id="navbarScrollingDropdown">
   
     
        
        {item1.values.map(detail => (
        
          <div>
       <NavDropdown.Item href="#action3">{detail.name}</NavDropdown.Item>
           </div> 

        ))}
        </NavDropdown>
 
 ))} 
  
     </Nav>
       
      
     </Navbar.Collapse>
   </Container>
 </Navbar>     
 
    </div>
  )
}

export default MainMenu;
