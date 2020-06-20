import React, { Component } from 'react';
import  ChatBot from 'react-simple-chatbot';

import basicSteps from '../constants/basicSteps';


const steps = basicSteps;

class Chatbot extends Component{
	render(){
		return(
			<div>
				<ChatBot steps={steps} />
			</div>
			);
	}
}



export default Chatbot;