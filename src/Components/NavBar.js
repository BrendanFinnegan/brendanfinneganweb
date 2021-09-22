import {useHistory} from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Chip, Grid } from "@material-ui/core"
function NavBar() {

    function resumePop () {
        window.open(
            `https://brendanbucket1988.s3.us-east-2.amazonaws.com/Brendan+Finnegan+Resume+September+2021.pdf`,
            '_blank' 
          );
    }

    return (
        <>
            <Navbar className="color-nav" variant="dark" style={{display: 'flex', paddingTop: '15px', height: '2rem', padding: '10px',  width: '100%', zIndex: '9999'}} >
            <Grid container >
                    <Grid item xs={3} >
                    <Navbar.Brand  className="mr-auto" style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold', marginLeft: '10px', left: '0', position: 'fixed'}} href="/">Brendan Finnegan</Navbar.Brand>
                    </Grid>
                    
                  
                        <Grid item xs={2} >
                    <Nav className="mr-auto">
                        <Nav.Link style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Home</Nav.Link>
                    </Nav>
                    </Grid>

                    <Grid item xs={2}>
                    <Nav className="mr-auto">
                        <Nav.Link style={{textDecoration: 'none', color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/about">About Me</Nav.Link>
                    </Nav>
                    </Grid>

                    <Grid item xs={2} >
                    <Nav className="mr-auto">
                        <Nav.Link style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/portfolio">Portfolio</Nav.Link>
                    </ Nav>
                    </ Grid>

                    <Grid item xs={2} >
                    <Nav className="mr-auto">
                        <Nav.Link style={{textDecoration: 'none',color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/contact">Contact</Nav.Link>
                    </ Nav>
                    </ Grid>

                    </ Grid>
        
                    <Chip onClick={resumePop} style={{height: '27px', marginLeft: '10px', marginRight: '10px', right: '0', position: 'fixed'}} className="mr-auto" label="Resume"  />
                        {/* <Nav.Link style={{color: '#c9caca', fontSize: 'large', fontWeight: 'bold'}} href="/">Resume</Nav.Link> */}
            </Navbar>
        </>
    )
}

export default NavBar