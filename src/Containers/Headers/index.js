import React, { Component } from 'react';
import { Container, Row, Col, Form, FormControl, Button, InputGroup, Image, Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux';
import './index.css'
import logo from '../../logo.svg';
import Logo from '../../Components/Logo';
import LoginBottons from '../../Components/LoginButtons';

class Headers extends Component{
	render(){
		const { userLoged } = this.props
		return(
			Object.keys(userLoged).length > 0 ?
			<Container fluid className='header'>
				<Row className='row1'>
					<Col md={1} xs={1}>
						<span className='d-flex justify-content-center'>
							<img src={logo} alt='logo' className='App-logo'/>
						</span>
					</Col>
					<Col md={5} xs={3}>
						<span className='title-page'><strong>Desarrollo Web React Js</strong></span>
					</Col>
					<Col md={6} xs={3}>
						<Navbar collapseOnSelect expand='lg'>
							<Navbar.Toggle aria-controls='resp-navbar'/>
							<Navbar.Collapse id='resp-navbar'>
								<Nav className='ml-auto'>
									{ true ? <Nav.Link href='#perfil'>Perfil</Nav.Link>
									 : <Nav.Link href='#home'>Home</Nav.Link> }
									<Nav.Link href='#information'>Information</Nav.Link>
									{ true ? <Nav.Link href='#applications'>Applications</Nav.Link>
									: null}
									<Nav.Link href='#contact'>Contact</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</Col>
				</Row>
				<Row className='row2'>
						<Col md={2} xs={1} className='d-flex justify-content-around d-user'>
							{ true ? <Logo srcImage={userLoged.img.perfil} nameUser={userLoged.name} lastNameUser={userLoged.lastName} roleUser={userLoged.role}/>
							: <a href='#home'>
								<Image src='./img/logo.png' width='30' height='30' />
							</a> }
							
						</Col>
						<Col md={8} xs={4}>
							<Form> 
								<InputGroup className=''>
									<FormControl type='text' placeholder='Search' aria-describedby='basic-addon2'/>
									<InputGroup.Append>
										<Button variant='outline-success'>Search</Button>
									</InputGroup.Append>

								</InputGroup>
							</Form>
						</Col>
						<Col md={2} xs={1}>
							<LoginBottons  isLogin={true}/>
						</Col>
				</Row>
			</Container>
			: ''
		)
	}
}

const mapStateToProps = ( state ) => ({
	userLoged : state.user.userLoged
})

const mapDispatchToProps = ( dispatch ) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Headers);