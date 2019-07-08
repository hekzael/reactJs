import React from 'react'
import { connect } from 'react-redux'
import { toggleList } from '../../Actions/todos'
import List from '../../Components/List'
import { ListGroup, Container } from 'react-bootstrap'
import './index.css'

const TodoList = ({ titlesFiltro, toggleList }) => {
	console.log(titlesFiltro)
	return(
		<Container className='scrolers'>
			<ListGroup as="ul">
			{ titlesFiltro? 
				titlesFiltro .map(todo => (
						<List key={todo.id} todo={todo} onClick={()=>toggleList(todo.id)} />  
				))
				: undefined}
			</ListGroup>
		</Container>
	)
}

const getVisibleTodos = (titles, filter) => {
	console.log(filter.visibilityFilter)
  switch (filter.visibilityFilter) {
		
    case 'SHOW_ALL':
      return titles
    case 'SHOW_COMPLETE':
      return titles.filter(t => t.complete)
    case 'SHOW_ACTIVE':
      return titles.filter(t => !t.complete)
    default:
      throw new Error('Unknown filter: ' + filter.visibilityFilter)
  }
}

const mapStateToProps = state => ({

	titlesFiltro: getVisibleTodos( state.todos.titles ? state.todos.titles	: [] , state.filter )
})

const mapDispatchToProps = dispatch => ({
	toggleList: id => dispatch(toggleList(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
