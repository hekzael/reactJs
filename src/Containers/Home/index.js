import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Carousel from  '../../Components/Carousel';
import Cards from '../Cards';
import MediaJs from '../../Components/Media';
import './index.css';
import Coment from '../Coment';
import Message from '../../Components/Message';
import { logUp } from '../../Actions/login.js';
import { selectShow } from '../../Actions/selectShow.js';
import { onClickBack } from '../../Actions/onClickBack.js';
import ShowIten from '../../Components/ShowIten';
import Agends from '../../Components/Agends';
import Notes from '../../Components/Notes';
import Information from '../../Components/Information';


class Home extends Component{
	componentDidMount(){
		this.props.loginActions()
	}
	render(){
		const { userLoged } = this.props;
		const { selectShow } = this.props;
		const { showSelectIten } = this.props;
		const { onClickBack } = this.props;
		let show = ''
		/* const agends = Object.keys(userLoged).length > 0 ? Object.entries(userLoged.agendas).map(([name, value]) => {
			return <ShowIten agend={ name } length={ value.length } key={name} onClickAgend={() => selectedAgend(name)} />
		}) : null */
		if (showSelectIten.show) {
			switch (showSelectIten.name) {
			case 0:
			show =<Agends userAgend = {userLoged.agend} onClickBack = {()=>onClickBack('agend')} />
				break;
			case 1:
			show =<Notes userNotes = {userLoged.notes} onClickBack = {()=>onClickBack('notes')} />
				break;
			case 2:
			show =<Cards titleCard='Todo Funciona Calendario' bodyText='Finalmente e podido hacerlo' 
			error={false} onRequestPage={null} typeCard={false} />
				break;
		
			default:
			show =""
				break;
			}
		}else {
			show = <div><Row className='rowere'>
			<ShowIten title="Agenda" userInfo={userLoged.agend} onClickShow={() => selectShow(0)} />
			<ShowIten title="Notas" userInfo={userLoged.notes} onClickShow={() => selectShow(1)}/>
			<ShowIten title="Calendario" onClickShow={() => selectShow(2)}/>
		</Row>
		<Row className='hborder-bottom-color'>
			<Col md={5}>
				<MediaJs typeMedia={false} />
				<MediaJs typeMedia={false} />
			</Col>
			<Col md={5}>
				<MediaJs typeMedia={false} />
				<MediaJs typeMedia={false} />
			</Col>
		</Row> </div>
		}
		

		return(
			<Container>
				<Row>
					<Carousel />
				</Row>
				<Information/>
				{/* show */}
				<Row className='mt-3 mb-3'>
					<Col>
					<Cards titleCard='Todo Funciona' bodyText='Finalmente e podido hacerlo' 
									error={false} onRequestPage={null} typeCard={false} />
					</Col>
					<Col>
					<Cards titleCard='Todo Funciona' bodyText='Finalmente e podido hacerlo' 
									error={false} onRequestPage={null} typeCard={false} />
					</Col>
					<Col>
						<Coment />
						<Message userComent={userLoged.coments} />
					</Col>
				</Row>
			</Container>
		)
	}
}

	const mapStateToProps = state => ({
		userLoged : state.user.userLoged,
		showSelectIten : state.selectShow
	})

	const mapDispachtToProps = dispatch => ({
		loginActions: () => dispatch(logUp()),
		selectShow: (name) => dispatch(selectShow(name)),
		onClickBack: (id) => dispatch(onClickBack(id))
	})

export default connect(mapStateToProps, mapDispachtToProps)(Home);