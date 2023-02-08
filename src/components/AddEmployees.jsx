import React,{useState} from 'react';
import axios from 'axios';
import {Container, Row, Form, Button} from 'react-bootstrap';
import '../styles/AddEmployees.css';
import { useNavigate, Link } from 'react-router-dom';


function AddEmployees(){

    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName:"",
        lastName:"",
        email:""
    });

    const{firstName, lastName, email} = employee;

    const inputChange= (e) =>{
        setEmployee({...employee,[e.target.name]: e.target.value});
    }

    const onSubmit= async(e) => {
        e.preventDefault();
        await axios.post("http://react-springboot-backend-production.up.railway.app/employees",employee);
        navigate("/");
    }

    return(
        <div>
            <Container>
                <Row className="row-form">
                    <Form onSubmit={(e) => onSubmit(e)} className="form">
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" value={firstName} onChange={(e)=>inputChange(e)} placeholder="enter your first name"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" value={lastName} onChange={(e)=>inputChange(e)} placeholder="enter your last name"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={(e)=>inputChange(e)} placeholder="youremail@email.com"></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="btn btn-primary">Add</Button>
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </Form>
                </Row>
            </Container>
        </div>
    );
}

export default AddEmployees;