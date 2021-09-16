import {useHistory} from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Chip, Grid } from "@material-ui/core"
function NavBar() {

    return (
        <>
            <Navbar className="color-nav" variant="dark" style={{display: 'flex', paddingTop: '15px', height: '2rem', padding: '10px'}} >
            <Grid container >
                    <Grid item xs={2} >
                    <Navbar.Brand  className="mr-auto" style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold', marginLeft: '10px', left: '0', position: 'fixed'}} href="/">Brendan Finnegan</Navbar.Brand>
                    </Grid>
                    
                  
                        <Grid item xs={2} >
                    <Nav className="mr-auto">
                        <Nav.Link style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Home</Nav.Link>
                    </Nav>
                    </Grid>

                    <Grid item xs={2}>
                    <Nav className="mr-auto">
                        <Nav.Link style={{textDecoration: 'none', color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">About Me</Nav.Link>
                    </Nav>
                    </Grid>

                    <Grid item xs={2} >
                    <Nav className="mr-auto">
                        <Nav.Link style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Portfolio</Nav.Link>
                    </ Nav>
                    </ Grid>

                    <Grid item xs={2} >
                    <Nav className="mr-auto">
                        <Nav.Link style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Contact</Nav.Link>
                    </ Nav>
                    </ Grid>

                    </ Grid>
        
                    <Chip style={{height: '27px', marginLeft: '10px', marginRight: '10px', right: '0', position: 'fixed'}} className="mr-auto" label="Resume"  />
                        {/* <Nav.Link style={{color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Resume</Nav.Link> */}
            </Navbar>
        </>
    )
}

export default NavBar