import React from 'react';
import './index.css'
import { Card, Container, ListGroup, ListGroupItem, Col, Row, Button } from 'react-bootstrap';

const Agends = ( {userAgend, onClickBack} ) =>{
	return(
		<Container className='agend'>
			<Card>
				<Card.Header className=''>
					<Row>
						<Col md={10}><h5>Agenda: Contactos</h5></Col>
						<Col md={2}><span onClick={onClickBack} className='pointer'> {'<='} </span></Col>
					</Row>
				</Card.Header>
				<ListGroup as="ul" className='scrolers'>
					{ userAgend? 
						userAgend.map(contact => (
							<ListGroupItem variant='primary' as="li" key={contact.id}>
								<Row>
									<Col md={9} xs={7}>
										<h5>Nombre:{contact.name}</h5>
										<h6>Telefono:{contact.phone}</h6>
										<h6>Direccion:{contact.address}</h6>
									</Col>
									<Col md={3} xs={5}>
										<Button>Edit</Button>
										<Button>Delet</Button>
									</Col>
								</Row>
							</ListGroupItem> 
						))
							: ''}
						</ListGroup>
			</Card>
		</Container>
	)
}

export default Agends