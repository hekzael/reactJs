import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import './index.css'

const Footer = (  { data }  ) => {
	/* console.log(data)
	console.log( Object.keys(data).length > 0 ? data.socialMedia.email : 'no') */

	return(
		<Container fluid className='shadow-top fborder-bottom-img'>
			<Row className='fborder-top-color fborder-bottom-color'>
				<Col md={2} className='m-3'>
					<Row className='no-gutters d-flex justify-content-start'>
						<img src='./img/facebook.png' width='30' height='30' alt='logo' className=''/>
						{ Object.keys(data).length > 0 ? <div className='ml-5p'><a href={data.socialMedia.fb} >Facebook</a></div> 
						: <div className='ml-5p'>Facebook</div> }
					</Row>
				</Col>
				<Col md={2} className='m-3'>
					<Row className='no-gutters d-flex justify-content-start'>
						<img src='./img/instagran.png' width='30' height='30' alt='logo' className=''/>
						{ Object.keys(data).length > 0 ? <div className='ml-5p'><a href={data.socialMedia.ig} >Instagran</a></div> 
						: <div className='ml-5p'>Instagran</div> }
					</Row>
				</Col>
				<Col md={2} className='m-3'>
					<Row className='no-gutters d-flex justify-content-start'>
						<img src='./img/logo.png' width='30' height='30' alt='logo' className=''/>
						{ Object.keys(data).length > 0 ? <div className='ml-5p'><a href={data.socialMedia.linkedin} >Linkedin</a></div> 
						: <div className='ml-5p'>Linkedin</div> }
					</Row>
				</Col>
					<div className="w-100"></div>
				<Col md={2} className='m-3'>
					<Row className='no-gutters d-flex justify-content-start'>
						<img src='./img/logo.png' width='30' height='30' alt='logo' className=''/>
						{ Object.keys(data).length > 0 ? <div className='ml-5p'><a href={data.socialMedia.email} >Gmail</a></div> 
						: <div className='ml-5p'>Gmail</div> }
					</Row>
				</Col>
				<Col md={2} className='m-3'>
					<Row className='no-gutters d-flex justify-content-start'>
						<img src='./img/logo.png' width='30' height='30' alt='logo' className=''/>
						{ Object.keys(data).length > 0 ? <div className='ml-5p'><a href={data.socialMedia.gitHub} >GitHub</a></div> 
						: <div className='ml-5p'>GitHub</div> }
					</Row>
				</Col>
				<Col md={2} className='m-3'>
					<Row className='no-gutters d-flex justify-content-start'>
						<img src='./img/logo.png' width='30' height='30' alt='logo' className=''/>
						{ Object.keys(data).length > 0 ? <div className='ml-5p'><a href={data.socialMedia.phone} >Telefono</a></div> 
						: <div className='ml-5p'>Telefono</div> }
					</Row>
				</Col>
			</Row>
			<Row className='text-center d-flex m-3 justify-content-center'>
				Developmen React
			</Row>
		</Container>
	)
}

const mapStateToProps = state => ({
	data : state.user.userLoged 
})

const mapDispatchToProps = dispatch => ({
	
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer)