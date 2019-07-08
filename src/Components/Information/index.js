import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, ProgressBar, ListGroupItem, ListGroup } from 'react-bootstrap'
import './index.css'
import CvInfo from '../CvInfo'
import { cvInfoUser } from '../../Actions/infoActions';

class Information extends Component {
  componentDidMount(){
    this.props.infoActions();
  }
  render(){
    const { cvInfoUser } = this.props
    console.log(cvInfoUser.perfil)
    return(
      <Container >
        <Row>
          <Col md={5} className='col-1-bg'>
            <Row className='cv-logo'>
              <img src='./img/logo.png' wigth={100} height={100} alt='generit' className='rounded-circle'/>
              <h4>EULIS BLANCO</h4>
              <h2>Desarrollador Web</h2>
              
              
            </Row>
            <Row>
              <CvInfo title='Perfil' img='./img/logo.png' />
              <div className='d-flex flex-column width1'>
                <p className="text-left">{cvInfoUser.perfil ? cvInfoUser.perfil.p1 : ''} </p>
                <p className="text-left">{cvInfoUser.perfil ? cvInfoUser.perfil.p2 : ''} </p>
              </div> 
            </Row>
            <Row>
              <CvInfo title='Contacto' img='./img/logo.png' />
              <div className='d-flex flex-column'>
                <p className="text-left">Telefono :{cvInfoUser.contact ? cvInfoUser.contact.phone : ''} </p> 
                <p className="text-left">Correo :{cvInfoUser.contact ? cvInfoUser.contact.email : ''} </p> 
                <p className="text-left">GitHub :{cvInfoUser.contact ? cvInfoUser.contact.gitHub : ''} </p>
                <p className="text-left">Direccion :{cvInfoUser.contact ? cvInfoUser.contact.address : ''} </p> 
              </div>
              
            </Row>
            <Row>
            <CvInfo title='Competencias' img='./img/logo.png' />
                <ListGroup>
                  {cvInfoUser.competens ? cvInfoUser.competens.map((element) => (
                    <ListGroupItem className='d-flex flex-row list-color-br'>
                      <div className='text-left' style={{width: 100}}>{element.name}</div>
                      <ProgressBar now={element.level} label={`${element.level}%`} key={element.id} />
                    </ListGroupItem>
                  )) : ''}
                </ListGroup>             
            </Row>
          </Col>
          <Col md={7} className='col-2-bg'>
            <Row>
            <CvInfo title='Experiencia Profecional' img='./img/logo.png' />
              <p>Soy un desarrollador web jr </p>
              <p>Soy un desarrollador web jr </p>
              <p>Soy un desarrollador web jr </p>
            </Row>
            <Row>
            <CvInfo title='Estudios Profecionales' img='./img/logo.png' />
              <p>Soy un desarrollador web jr </p>
              <p>Soy un desarrollador web jr </p>
              <p>Soy un desarrollador web jr </p>
            </Row>
            <Row>
            <CvInfo title='Desarrollo' img='./img/logo.png' />
              <p>Soy un desarrollador web jr </p>
              <p>Soy un desarrollador web jr </p>
              <p>Soy un desarrollador web jr </p></Row>      
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cvInfoUser : state.user.cvUserLoged
})

const mapDispatchToProps = dispatch => ({
  infoActions : ()=> dispatch(cvInfoUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Information)