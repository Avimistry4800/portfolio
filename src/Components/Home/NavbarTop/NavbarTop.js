import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarTop = () => {
    return (
        <Navbar  className="navbar-fixed"collapseOnSelect expand="lg" bg="none" variant="light">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav  className="ml-auto mr-auto">
            <Nav.Link    > <Link style={{color:"White",textDecoration: "none",padding:"10px"}} target="_blank" to="/home">Home</Link></Nav.Link>
            <Nav.Link    > <Link style={{color:"White",textDecoration: "none" ,padding:"10px"}} target="_blank" to="/about">About</Link></Nav.Link>
            <Nav.Link    > <Link style={{color:"White",textDecoration: "none" ,padding:"10px"}} target="_blank" to="/project">Projects</Link></Nav.Link>
          <NavDropdown title="Find More" id="collasible-nav-dropdown ">
              <NavDropdown.Item target="_blank"   href="https://www.linkedin.com/in/avi-mistry-52232a132/">Linkedin</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://github.com/Avimistry4800">Github</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://twitter.com/Avi_mistry48/">Twitter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavbarTop;