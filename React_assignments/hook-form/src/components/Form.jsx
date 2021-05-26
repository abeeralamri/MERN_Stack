import React, { useState } from  'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

    
const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <>


        <Form onSubmit={ createUser }>
            <Form.Group controlId="formBasicFname">
                <Form.Label> First name </Form.Label>
                <Form.Control type="text" placeholder="First name" onChange={ (e) => setFname(e.target.value) } />
            </Form.Group>

            <Form.Group controlId="formBasicLname">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" onChange={ (e) => setLname(e.target.value) } />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={ (e) => setEmail(e.target.value) } />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value) } />
            </Form.Group>

            <Form.Group controlId="formBasicCheckPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={ (e) => setPassword(e.target.value) } />
            </Form.Group>
            
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form><br></br>
            
        <p>First name: {fname}</p>
        <p>Last name: {lname}</p>
        <p>Email: {email}</p>
        <p>password: {password}</p>
        <p>Confirm password: {password}</p>


        </>
    );
};
    
export default UserForm;