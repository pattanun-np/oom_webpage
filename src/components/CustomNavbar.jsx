import React, { Component } from 'react'
import { Navbar, Nav, NavItem,Container,NavDropdown } from 'react-bootstrap';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/"><img
        src="/favicon.ico"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="/shop">Shop</Nav.Link>
      
    </Nav>
    <Nav>
    <Nav.Link eventKey={2} href="/login">
        Sign Up
      </Nav.Link>
      <Nav.Link eventKey={2} href="/login">
        Login 
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>



    );
  }
}
