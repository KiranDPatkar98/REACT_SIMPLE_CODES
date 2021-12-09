import React from 'react'
import { NavDropdown } from 'react-bootstrap'
const Dropdown = (props) => {
    return (
        
              <NavDropdown title={props.title} id="basic-nav-dropdown">
          <NavDropdown.Item  href="www.fb.com">{props.item1}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">{props.item2}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">{props.item3}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">{props.item4}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">{props.item5}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">{props.item6}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">{props.item7}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">{props.item8}</NavDropdown.Item>
        </NavDropdown>

        
    )
}

export default Dropdown

