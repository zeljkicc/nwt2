import React from 'react';
import ReactDOM from 'react-dom';

import QuizConfig from './QuizConfig';
import Quiz from './Quiz';


class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			questions: []
		};

		this.setQuestions = this.setQuestions.bind(this);
	}


	setQuestions(questions){
		this.setState({questions: questions}, () => {
			ReactDOM.render(
				<Quiz questions={this.state.questions} />, 
				document.getElementById('app'));
		});		
	}

	render(){
		return (
			<QuizConfig setQuestions={this.setQuestions}/>				
		)  
	}
}

export default App;

ReactDOM.render(
	<App />, 
	document.getElementById('app'));