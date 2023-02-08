import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

function Nav(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Full Stack App</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Nav;