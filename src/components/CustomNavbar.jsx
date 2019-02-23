import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import './CustomNavbar.css'
import {Animated} from "react-animated-css";
export default class CustomNavbar extends Component {
  render() {
    return (
<Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">
  <img
        src="/favicon.ico"
        width="35"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
  /> OOMIM GARDEN
 

      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="/shop">Shop</Nav.Link>
      <Nav.Link href="/support">Support</Nav.Link>
     
      
    </Nav>
    <Nav>
      <Nav.Link href="/upload">Payment</Nav.Link>
    <Nav.Link eventKey={2} href="/SignUp">
        Sign Up
      </Nav.Link>
      <Nav.Link eventKey={2} href="/login">
        Login 
    </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Animated>



    );
  }
}
