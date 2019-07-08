import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

const List = ({ contact , onClick}) => {
	return(
		<ListGroupItem onClick={onClick} variant='primary' as="li">
			<h5>{contact.name}</h5>
			<h6>{contact.phone}</h6>
			<h6>{contact.address}</h6>
		</ListGroupItem>
	)
}

export default List