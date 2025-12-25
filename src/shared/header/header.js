import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div >
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">My Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/aboutMe">About Me</NavLink>
                            <NavLink to="/thoughts">My Thoughts</NavLink>
                            <NavLink to="">Contact me</NavLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;


// <Nav.Link href="/aboutMe">About Me</Nav.Link>
//                             <Nav.Link href="/thoughts">My Thoughts</Nav.Link>
//                             <Nav.Link href="#link">Contact me</Nav.Link>