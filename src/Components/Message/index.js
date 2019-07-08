import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './index.css'
import MediaJs from '../Media';

class Message extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			index: 0,
			direction: null,
		}
		this.handleSelect = this.handleSelect.bind(this)
	}

	handleSelect( selectedIndex, e ){
		this.setState({
			index: selectedIndex,
			direction: e.direction,
		})
	} 
	render(){
		const { index, direction } = this.state	
		const { userComent } = this.props	
		
		return(
			<div className='myCarousel2 bg-light border border-primary rounded mt-3'>
			<Carousel  
				activeIndex={index}
				direction={direction}
				onSelect={this.handleSelect}
			>
				{ userComent ? userComent.map( coment => 
					<Carousel.Item key={coment.id}>
						<MediaJs userComent={coment} typeMedia={true} />
					</Carousel.Item>
				)	
				:'' }
			</Carousel>
			</div>
		)
	}
}

export default Message
