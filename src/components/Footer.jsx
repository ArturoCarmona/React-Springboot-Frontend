import React from 'react';
import {Container, Row} from 'react-bootstrap';
import '../styles/Footer.css';

function Footer(){
    return(
        <div>
            <Container>
                <Row className="row-footer">
                    
                    <h6> &copy; Copyright</h6>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;