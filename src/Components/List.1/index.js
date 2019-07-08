import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

const List = ({ todo , onClick}) => {
	return(
		<ListGroupItem onClick={onClick} variant='primary' as="li"
			style={{ textDecoration: todo.complete ? 'line-through': 'none'}}>
			{todo.text}
		</ListGroupItem>
	)
}

export default List