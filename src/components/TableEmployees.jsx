import React,{useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {Container, Row, Col, Table, Button} from 'react-bootstrap';
import "../styles/TableEmployees.css";

function TableEmployees(){

    /* ================= GET METOD ===================== */
    const [employees, setEmployees] = useState([]);
    const{id} = useParams();

    useEffect( ()=>{
            getEmployees(); 
    },[]);

    const getEmployees = async() => {
        const result= await axios.get("https://react-springboot-backend-production.up.railway.app/employees");
        setEmployees(result.data);
    };

    /* ====================== DELETE METOD ========================= */
    const deleteEmployee = async (id)=> {
        await axios.delete(`https://react-springboot-backend-production.up.railway.app/employees/delete/${id}`)
        .then( () =>{console.log("done!")})
        .then( () => getEmployees());
    }
    
    /* =============================================================== */

    const listEmployees = employees.map( (user, index) => (
        <tr key={index}>
            <td >{user.id}</td>
            <td >{user.firstName}</td>
            <td >{user.lastName}</td>
            <td >{user.email}</td>
            <td>
                <Link to={`/edit-employee/${user.id}`} className="btn btn-primary mx-2">Edit</Link>
                <Button className="btn btn-danger" onClick={() => deleteEmployee(user.id)}>Delete</Button>
            </td>
        </tr>
    ));

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <Table striped className="table" responsive="sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listEmployees}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-btn-add">
                        <Link className="btn btn-add" to="/add-employee">Add</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TableEmployees;