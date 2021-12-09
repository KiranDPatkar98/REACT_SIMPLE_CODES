import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,NavDropdown,Nav,Form,FormControl,Button } from 'react-bootstrap';
// import DropdownSubmenu from "react-bootstrap-submenu";
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
// import { FontAwesomeIcon } from 'react-fontawesome';
import './Bar.css';

const Bar=()=>{
  
  // toggle=(props)=> {
  //   setState(prevState => ({
  //     dropdownOpen: !prevState.dropdownOpen
  //   }));
  // }

  // onMouseEnter=()=> {
  //   setState({dropdownOpen: true});
  // }

  // onMouseLeave=()=> {
  //   setState({dropdownOpen: false});
  // }

return(
<div>
<Navbar collapseOnSelect expand="lg" bg="white" fixed="top" >
<Container >
      <Navbar.Brand href="#home"><img src="https://i0.wp.com/www.estuate.com/wp-content/uploads/2020/02/estuate-logo.png"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
         
          <NavDropdownMenu className="space" title="SERVICES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
            <DropdownSubmenu href="#action/3.7" title="Digital Transformation">
            <DropdownSubmenu href="#action/3.7" title="Data & Analytics">
              <NavDropdown.Item href="#action/8.1">IBM</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Big Data &#038;Business Inteligence</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Incorts</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">IBM Cognos</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">SAP BusinessObjects</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">QlikView</NavDropdown.Item>
              
              </DropdownSubmenu>
              <DropdownSubmenu href="#action/3.7" title="Business Intelligence & Automation">
              <NavDropdown.Item href="#action/8.1">Artifical Intelligence</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Oracle BI Solutions &#038;</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Robotic Process Automation</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Machine Learning Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Internet of Things (IoT)</NavDropdown.Item>
              </DropdownSubmenu>


              <DropdownSubmenu href="#action/3.7" title="cloud Enablement">
              <NavDropdown.Item href="#action/8.1">Artifical Intelligence</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Oracle BI Solutions &#038;</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Robotic Process Automation</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Machine Learning Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Internet of Things (IoT)</NavDropdown.Item>
              </DropdownSubmenu>
              </DropdownSubmenu>


              {/* 3rd part */}
              <DropdownSubmenu href="#action/3.7" title="Application & Technology">
            <DropdownSubmenu href="#action/3.7" title="Zendesk">
              <NavDropdown.Item href="#action/8.1">Zendesk CSM</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Zendesk ITSM&#038;</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Zendesk Sell</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Zendesk Sunshine</NavDropdown.Item>
              
              </DropdownSubmenu>
              <NavDropdown.Item href="#action/3.1">Zuora</NavDropdown.Item>
            
              <DropdownSubmenu href="#action/3.7" title="Salesforce">
              <NavDropdown.Item href="#action/8.1">Salesforce CPQ Billing</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Sales and Service Cloud&#038;</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Force.com Platform Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Managed Services</NavDropdown.Item>
              </DropdownSubmenu>
              <NavDropdown.Item href="#action/3.1">Oracle</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">SAP</NavDropdown.Item>
            
  
             
             
              </DropdownSubmenu>
              {/* 4th part */}

              <DropdownSubmenu href="#action/3.7" title="Governance, Risk & Comliance">
            
              <NavDropdown.Item href="#action/8.1">IBM</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Informatica&#038;</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">MetricStream</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Sparta Systems</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Asg Data Lineage</NavDropdown.Item>
              </DropdownSubmenu>
              
              {/* 5th part */}
              <DropdownSubmenu href="#action/3.7" title="Product Engineering">
              <NavDropdown.Item href="#action/8.1">Quality Assurance & Testing</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">DevOps&#038;</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Mobility Solutions</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Integrations & Migration</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Product Planning</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Information Security Consulting</NavDropdown.Item>
              <NavDropdown.Item href="#action/8.1">Platform Modernization Solutions</NavDropdown.Item>
              
              </DropdownSubmenu>
              
             
            
              <NavDropdown.Item href="#action/3.1">Managed Services</NavDropdown.Item>
          </NavDropdownMenu>
          <NavDropdownMenu className="space"  title="PRODUCTS" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Archlenz</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Giftlenz</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Kloudlenz</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">e-TAS</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">ASG IGC Connector</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Itron-MDM</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">E-Vino</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">EZ$tream</NavDropdown.Item>
            </NavDropdownMenu>

            <NavDropdownMenu className="space"  title="INDUSTRIES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Enterprises</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Finance</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Kloudlenz</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Health care</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Retail</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Manufacturing</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Utilities</NavDropdown.Item>
            
            </NavDropdownMenu>

            <NavDropdownMenu className="space"  title="RESOURCES" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Data sheets</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">White-Papers</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">E-books</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Success Stories</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Recorded webinars</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Press Releases</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Demos</NavDropdown.Item>
            
            </NavDropdownMenu>

            <NavDropdownMenu className="space"  title="COMPANY" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Our Leaders</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Patners</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Events</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Our-Certifications</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Estuate cares</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Careers</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
           
            </NavDropdownMenu>

          <Nav.Link className="space"  href="#clients">CLIENTS</Nav.Link>
          
          <Nav.Link className="space1"  href="#contact">CONTACTS</Nav.Link>
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          {/* <Nav.Link className="space1"  href="#contact"><i className="bi bi-search"></i></Nav.Link> */}
        
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

</div>

)

}
export default Bar;