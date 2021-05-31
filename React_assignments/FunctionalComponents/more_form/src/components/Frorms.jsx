import React, { useState } from  'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

    
const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [fnameError, setFnameError] = useState("");

    const [lname, setLname] = useState("");
    const [lnameError, setLnameError] = useState("");

    const [email, setEmail] = useState("");
    const [EmailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");  
    const [PwError, setPwError] = useState("");

    const [ConfirmPw, setConfirmPw] = useState("");  
    const [ConfirmPwError, setConfirmPwError] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password, ConfirmPw };
        console.log("Welcome", newUser);
    };
   
    const CheckFname = (e) =>{
        setFname(e.target.value);
        if(e.target.value.length < 2 ){
            setFnameError("First Name must be at least 2 character")

        }}

    const CheckLname = (e) =>{
        setLname(e.target.value);
        if(e.target.value.length < 2 ){
            setLnameError("Last Name must be at least 2 character")

        }}

    const CheckEmail = (e) =>{
        setEmail(e.target.value);
        if(e.target.value.length < 2 ){
            setEmailError("Email must be at least 2 character")

        }}
    const CheckPw = (e) =>{
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0){
            setPwError("Password must be at least 8 character")

        }
    }

    const CheckConfirmPw = (e) =>{
        setConfirmPw(e.target.value);
        if(e.target.value !== password  ) {
            setConfirmPwError("Passwords must match")
    
        }

    }
    

    return(
        <>


        <Form onSubmit={ createUser } >
            <Form.Group controlId="formBasicFname">
                <Form.Label> First name </Form.Label>
                <Form.Control type="text" placeholder="First name" onChange={ CheckFname } />
                {
                    fnameError ?
                    <p style={{color:'red'}}>{ fnameError }</p> :
                    ''
                }
            </Form.Group>

            <Form.Group controlId="formBasicLname">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" onChange={ CheckLname  } />
                {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={ CheckEmail } />

                {
                    EmailError ?
                    <p style={{color:'red'}}>{ EmailError }</p> :
                    ''
                }
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange = {CheckPw}  />
                {
                    PwError ?
                    <p style={{color:'red'}}>{ PwError }</p> :
                    ''
                }
            </Form.Group>

            <Form.Group controlId="formBasicCheckPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password"  onChange = {CheckConfirmPw} />
                {
                    ConfirmPwError ?
                    <p style={{color:'red'}}>{ ConfirmPwError }</p> :
                    ''
                }
            </Form.Group>
            
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form><br></br>
   

        </>
    );
};
    
export default UserForm;