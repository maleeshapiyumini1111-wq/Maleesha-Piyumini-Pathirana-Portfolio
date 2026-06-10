import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavigationBar() {
  
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="shadow">
      <Container>
        
        <Navbar.Brand 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
          className="fw-bold fs-4 text-primary"
          style={{ cursor: 'pointer' }}
        >
          Maleesha Piyumini Pathirana
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fw-medium">
            
            <Nav.Link href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</Nav.Link>
            <Nav.Link href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}