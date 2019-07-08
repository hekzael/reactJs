import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import './index.css';

/* Si es true muestra las card simples con hover */

const Cards = ({ titleCard, bodyText, error, onRequestPage, typeCard }) =>{
	return(
		<Card className={typeCard ? 'c-1': 'c-n-1'}>
		{typeCard ? 
			<Card.Header as='h5' className={typeCard ?'c-header' : ''}>
				<Image src='./img/woman1.png' width={35} height={35} roundedCircle/>
				<div className='w-100'></div>
				{titleCard}
			</Card.Header>
			:
			<Card.Header>
				<Card.Title>
					{titleCard}
				</Card.Title>
			</Card.Header>
		}
		{typeCard ? null :<Card.Img variant='top' src="./img/trono.jpg" alt="Card image cap"/>}
		{ typeCard ? 
			<Card.Body>
				{ error ? 
					<Card.Text className='c-text'>Uh oh - someting went wrong!!!</Card.Text>:
					<Card.Text className="text-justify" onClick={onRequestPage}>{bodyText}</Card.Text>}    
			</Card.Body>
			:
			<Card.Body>
				<Card.Text>
					{bodyText}
				</Card.Text>
			</Card.Body>
		}
		{typeCard ? null : 
			<Card.Footer>
			<Button type='submit'>More</Button>
			</Card.Footer>
		}
		</Card>

	)
}

export default Cards