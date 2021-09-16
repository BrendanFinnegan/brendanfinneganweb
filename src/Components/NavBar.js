import {useHistory} from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Chip } from "@material-ui/core"
function NavBar() {

    return (
        <>
            <Navbar className="color-nav" variant="dark" style={{display: 'flex', paddingTop: '10px', height: '3rem'}} >
                    <Navbar.Brand  className="mr-auto" style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Brendan Finnegan</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link style={{paddingLeft: '10px', textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Home</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link style={{paddingLeft: '10px',textDecoration: 'none', color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">About Me</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link style={{paddingLeft: '10px',textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Portfolio</Nav.Link>
                    </Nav>
                    <Chip style={{marginLeft: '10px'}} className="mr-auto" label="Resume"  />
                        {/* <Nav.Link style={{color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Resume</Nav.Link> */}
            </Navbar>
        </>
    )
}

export default NavBar