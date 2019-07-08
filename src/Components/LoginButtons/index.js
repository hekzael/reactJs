import React from 'react';
import Buttons from '../Buttons'

const LoginButtons = ({ isLogin }) => {
	return(
		<div>
			{ isLogin ? 
				<div className='d-flex justify-content-around'>
					<Buttons variant="outline-primary" title='Log outs' onClick={null}/>
				</div>
				:
				<div className='d-flex justify-content-around'>
					<Buttons variant="outline-primary" title='Log in'onClick={null}/>
					<Buttons variant='outline-primary' title='Join' onClick={null}/>
				</div>
				
			}
			
		</div>
	)
}

export default LoginButtons