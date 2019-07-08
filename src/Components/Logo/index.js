import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import './index.css'

const Logo = ({ srcImage, nameUser, roleUser, lastNameUser }) => {
	const name = nameUser + " " + lastNameUser
	return(
	<Row className='no-gutters duser-w'>
		<Col xs={2}>
			<Image src={srcImage} width={35} height={35} roundedCircle/>
		</Col>
		<Col xs={6}>
			<h6>{name}</h6>
			<p>{roleUser}</p>
		</Col>
	</Row>
)}
	
export default Logo