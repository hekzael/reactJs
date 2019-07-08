import React from 'react';
import './index.css'
import { Card, Button } from 'react-bootstrap';

const ShowIten = ({ title, userInfo, newAdd, delet, onClickShow }) => {
	return(
		<Card className='cS-1 border-primary rounded-circle text-center'>
			<Card.Header className='cS-header' onClick={onClickShow}>
				<Card.Title>{title}</Card.Title>
			</Card.Header>
			<Card.Body onClick={onClickShow}>
				<Card.Text className='text-primary'>
					Registrados:{userInfo ? userInfo.length : 0}
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Button size='sm' type='submit' onClick={newAdd}>Add new</Button>
			</Card.Footer>
		</Card>
	)
}

export default ShowIten