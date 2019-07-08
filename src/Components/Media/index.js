import React from 'react';
import { Media, Row, Col } from 'react-bootstrap';
import './index.css';

const MediaJs = ( {userComent, typeMedia} )=> {
	const coment = userComent ?
		<Media className='myMedia'>
				<img width={50} height={50} className='mr-3 rounded-circle' src='./img/man1.png' alt='generic'/>
			<Media.Body>	
				<Row>
					<Col><h5>{userComent.userName}</h5></Col>
					<Col>{userComent.date}</Col>
				</Row>
			  <p>{userComent.text}</p>
			</Media.Body>
		</Media>
		 : '';
	const otro = true ?
		<Media className='myMedia'>
				<img width={50} height={50} className='mr-3 rounded-circle' src='./img/man1.png' alt='generic'/>
			<Media.Body>	
				<Row>
					<Col><h5>Heading</h5></Col>
					<Col>15/8/99</Col>
				</Row>
				<p>esto seria otro media </p>
			</Media.Body>
		</Media>
		: '';
	return(
		<div>
			{ typeMedia ? coment : otro}
		</div>
		
	)
}

export default MediaJs