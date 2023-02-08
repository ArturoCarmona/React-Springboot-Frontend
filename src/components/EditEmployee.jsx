import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Form, Row, Button} from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../styles/EditEmployee.css';

function EditEmployee(){

    const {id} = useParams();
    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName:"",
        lastName:"",
        email:""
    });

    const {firstName, lastName, email} = employee;

    const inputChange = (e) => {
        setEmployee({...employee, [e.target.name]:e.target.value});
    }

    useEffect( ()=>{
        loadEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const onSubmit = async(e) =>{
        e.preventDefault(e);
        await axios.put(`http://react-springboot-backend-production.up.railway.app/employees/${id}`,employee)
        .then( (response)=>{setEmployee(response.data)});
        navigate("/");
    }

    const loadEmployees = async() => {
        const result= await axios.get(`http://react-springboot-backend-production.up.railway.app/employees/id/${id}`);
        setEmployee(result.data);
    };

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

export default EditEmployee;