// Navbar.js
import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavbarFrom = () => {
  
  return (
    <Navbar bg="primary" variant="dark">
         <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            {/* <NavLink to="/" style={{color:"white"}}>Home</NavLink>
            <NavLink to="/football" style={{color:"white"}}>Fot</NavLink> */}
            <Nav.Link href="/football">Football</Nav.Link>
            <Nav.Link href="/NBA">NBA</Nav.Link>
            <Nav.Link href="/tennis">Tennis</Nav.Link>
            <Nav.Link href="/nfl">NFL</Nav.Link>
            <Nav.Link href="/f1">F1</Nav.Link>
            <Nav.Link href="/cricket">Cricket</Nav.Link>
          </Nav>
        </Container>
      
      {/* <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/football">
        Football
      </NavLink> */}
      </Navbar>
  );
};

export default NavbarFrom;