import React, { Component } from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
    render() {
        return (
            <>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">cocktails</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Fav-cocktails</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
                
            </>
        )
    }
}

export default Header

