import React, { Component } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import './index.css'

class MyCarousel extends Component{
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
		return(
			<div className='myCarousel'>
			<Carousel  
				activeIndex={index}
				direction={direction}
				onSelect={this.handleSelect}
			>
				<Carousel.Item>
					<Image 
						className='d-block w-100'
						src='./img/elect.jpg'
						alt='First slide'
						height={379}
						/>
					<Carousel.Caption>
						<h3 className='h3Carousel'>First slide label</h3>
						<p className='pCarousel'>Nulla vitae elit libero, a pharetra mollis interdum</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image 
						className='d-block w-100'
						src='./img/desarrollo.png'
						alt='Third slide'
						height={379}
						
						/>
					<Carousel.Caption>
						<h3 className='h3Carousel'>First slide label</h3>
						<p className='pCarousel'>Nulla vitae elit libero, a pharetra mollis interdum</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image 
						className='d-block w-100'
						src='./img/prog.jpg'
						alt='Third slide'
						height={379}
						/>
					<Carousel.Caption>
						<h3 className='h3Carousel'>First slide label</h3>
						<p className='pCarousel'>Nulla vitae elit libero, a pharetra mollis interdum</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			</div>
		)
	}
}

export default MyCarousel