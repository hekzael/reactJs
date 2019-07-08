import React from 'react';
//import './index.css'
import { Card, Container, ListGroup, ListGroupItem, Col, Row, Button } from 'react-bootstrap';

const Notes = ( {userNotes, onClickBack} ) =>{
	return(
		<Container className='agend'>
			<Card>
				<Card.Header className=''>
					<Row>
						<Col md={10}><h5>Notas:</h5></Col>
						<Col md={2}><span onClick={onClickBack} className='pointer'> {'<='} </span></Col>
					</Row>
				</Card.Header>
				<ListGroup as="ul" className='scrolers'>
					{ userNotes? 
						userNotes.map(note => (
							<ListGroupItem variant='primary' as="li" key={note.id}>
								<Row>
									<Col md={9} xs={7}>
										<h5>Nombre:{note.title}</h5>
										<h6>Telefono:{note.coment}</h6>
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

export default Notes