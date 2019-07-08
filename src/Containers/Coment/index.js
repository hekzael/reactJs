import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './index.css';

const Coment = () => {
	return(
		<Container className='border border-primary rounded'>
			<Row className='coment no-gutters'>
				<Col md={2}>
					<img src='./img/logo.png' width={35} height={35} alt='coment-logo'/>
				</Col>
				<Col>HELP</Col>
			</Row>
			<Row className='coment'>
				<Col>
					<p>Estamos para ayudarte en cualquier momento</p>
					<p>Atencion personalizada</p>
				</Col>
			</Row>
			<Row className='coment-2'>
				<Col>
					<p>Ayuda 24/7 </p>
				</Col>
				
			</Row>
		</Container>
	)
}

export default Coment