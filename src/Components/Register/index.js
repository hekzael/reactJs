import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";


class Register extends Component {
    constructor(){
        super();
        this.state = { validated: false}
    }

    handleSubmint(event){
        const form = event.currentTarget;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: false })
    }
    render(){
        const { validated } = this.state;
        return(
            <Form noValidate validated={validated} onSubmit={e => this.handleSubmint(e)}>
                <Form.Group controlId='validationCustom03'>
                    <Form.Label>Email address este es diferente</Form.Label>
                    <Form.Control required type='email' placeholder='Enter email'></Form.Control>
                    <Form.Control.Feedback type='invalid'>Pleace enter your email</Form.Control.Feedback>
                    <Form.Text className='text-muted'> We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type='password' placeholder='Password'></Form.Control>
                    <Form.Control.Feedback type='invalid'>Pleace enter your password</Form.Control.Feedback>
                </Form.Group>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        )
    }
    
}

export default Register;