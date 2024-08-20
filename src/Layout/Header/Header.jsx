import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';


const HeaderPart = () => {
  return (
    <Navbar expand="lg"  bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Hairnic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="about-page">Service</Nav.Link>
            <Nav.Link as={Link} to="product-page">Product</Nav.Link>
            <Nav.Link as={Link} to="contact-page">Contact</Nav.Link>
            <Nav.Link as={Link} to="new-page">NewPagw</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderPart