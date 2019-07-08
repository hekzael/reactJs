import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import Login from '../../Components/Login';
import Register from '../../Components/Register';

class ModalLogin extends Component{
    constructor(){
        super();
        this.state = {
            showModal: false,
            showForm: false,
        }

        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleFormShow = this.handleFormShow.bind(this);

    }

    handleModalClose(){
        this.setState({ showModal: false, showForm: false });
    }
    handleModalShow(){
        this.setState({ showModal: true, showForm: true });
    }
    handleFormShow(){
        this.setState({ showForm: !this.state.showForm })
    }
    

    render(){
        const showForm = this.state.showForm;
        return(
            <div>
            <Button variant='primary' onClick={this.handleModalShow}>Sing In or Up</Button>

            <Modal size='lg' arial-labelledby='contained-modal-title-vcenter' centered show={this.state.showModal} onHide={this.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { showForm ? <Login /> : <Register /> }
                </Modal.Body>
                <Modal.Footer>
                    { showForm ?
                    <Button variant='primary' onClick={this.handleFormShow}>Register</Button> :
                    <Button variant='primary' onClick={this.handleFormShow}>Login</Button> }
                    <Button variant='secondary' onClick={this.handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

export default ModalLogin;