import {useHistory} from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"

function NavBar() {

    return (
        <>
            <Navbar className="color-nav" variant="dark" >
                <Container className="nav-container" style={{display: 'flex'}}>
                    <Navbar.Brand  className="mr-auto" style={{color: '#c9caca', fontSize: 'larger'}} href="/">Brendan Finnegan</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link style={{color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar