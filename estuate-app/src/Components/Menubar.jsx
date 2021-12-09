import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import Dropdown from './Dropdown';
import "./Menubar.css"

import 'bootstrap/dist/css/bootstrap.min.css';

const Menubar = () => {
    return (
        <>
        <Navbar id="navbar" bg="success" expand="lg">
  <Container id="menucontainer" >
  <Navbar.Brand><img src="https://i0.wp.com/www.estuate.com/wp-content/uploads/2020/02/estuate-logo.png"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {/* <Dropdown  title="Services"  item1="Overview" item2=" Digital Transformation" item3="Application And Technology" item4="Governance Risk & Compliance" item5="Product Engineering" item6="Managed Services"/> */}

      <NavDropdown title="Services" id="basic-nav-dropdown">
      <NavDropdown.Item  href="www.fb.com">Overview</NavDropdown.Item>
      <NavDropdown  title="Digital Transformation" id="basic-nav-dropdown">
      <NavDropdown   title="Data and Analytics" id="basic-nav-dropdown">
      <NavDropdown.Item  href="www.fb.com">IBM</NavDropdown.Item>
      <NavDropdown.Item  href="www.fb.com">BIG Data And Intelligence</NavDropdown.Item>
      <NavDropdown.Item  href="www.fb.com">Incorta</NavDropdown.Item>
      <NavDropdown.Item  href="www.fb.com">IBM COGNOS</NavDropdown.Item>
      <NavDropdown.Item  href="www.fb.com">SAP Business Object</NavDropdown.Item>
      <NavDropdown.Item  href="www.fb.com">QlikView</NavDropdown.Item>

        </NavDropdown>
        

          </NavDropdown>
          </NavDropdown>
      <Dropdown title="Products" item1="Overview" item2="Archlenz" item3="Giftlenz" item4="Kloudlenz" item4="e-Tas" item5="ASC IGC Connector" item6="Itron MDM" item7="E-Vino" item8="EZ$tream"/>
      <Dropdown title="Industries" item1="Overview" item2="Enterprises" item3="Finance" item4="Health Care" item5="Retail" item6="Manufacturing" item7="Utilities" />
      <Dropdown title="Resourses" item1="Overview" item2="DataSheets" item3="White-Papers" item4="E-books" item5="Sucees Stories" item6="Recorded Webinars" item7="Press Releases" item8="Demo" />
      <Dropdown title="Company" item1="About Us" item2="Our Leaders" item3="Patners" item4="Events" item5="Our certifications" item6="Estuate Cares" item7="Careers" item8="Blog"/>
      <Nav.Link href="#home">Clients</Nav.Link>

      <Nav.Link href="#home">Cares</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}

export default Menubar
