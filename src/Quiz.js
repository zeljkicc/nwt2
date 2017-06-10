import React from 'react';
import ReactDOM from 'react-dom';

import ReactCountdownClock from 'react-countdown-clock';

import Question from './Question';

import Results from './Results';

import ReviewList from './ReviewList';

let buttonStyle = {
	width: "300px",
	marginTop: "10px",
	height: "37px",
	backgroundColor: "white",
	border: "#ccc 1px solid",
	borderRadius: "4px",
	fontFamily: "RwWidgets",
	fontSize: "15px",
	backgroundColor:"purple",
	color:"white"
}

let clockContainerStyle = {
	width: "100px",
	float:"left"
}

class Quiz extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			current: 0,
			questions: []
		}
	}

	setAnswer(question_id, answer){
		var arrayvar = this.state.questions.slice()
		arrayvar[question_id].answer = answer;
		this.setState({ questions: arrayvar })
	}

	setCurrent(id){
		this.setState({current: id});
	}

	showReview(){
		ReactDOM.render(
			<ReviewList  questions={this.state.questions}/>,
			document.getElementById('app')
			)
	}

	submitAnswers(){

		this.removeClock();
		
		let correct = 0;
		let answered = 0;
		this.state.questions.map((question)=> {
			if(question.answer){
				if(question.answer === question.correct_answer){
					correct++;
				}
				answered++;
			}

			
		});

		ReactDOM.render(
			<Results num_of_q={this.props.questions.length} num_of_a={answered} num_of_ca={correct} showReview={this.showReview.bind(this)} />,
			document.getElementById('app')
			)

	}

	timeRanOut(){
		
		if(document.getElementById('timer').childNodes[0] !== undefined){
			this.submitAnswers();
		}
		
	}

	removeClock(){
		title.style.width= "300px";
		title.style.float= "none";

		if(document.getElementById('timer').childNodes[0] !== undefined){
			var timer = document.getElementById('timer');
			timer.removeChild(timer.childNodes[0]);
		}
	}

	componentDidMount(){

		this.setState({questions: this.props.questions});

		var title = document.getElementById('title');
		title.style.width= "200px";
		title.style.float= "left";

		ReactDOM.render(
			<div style={clockContainerStyle}>
				<ReactCountdownClock seconds={this.props.questions.length * 10}
	                     color="purple"
	                     alpha={0.9}
	                     size={90}
	                     onComplete={this.timeRanOut.bind(this)}/>
            </div>         , 
                     document.getElementById('timer')
                     );
	}


	render(){

		let count = -1;
		return (
			<div>                    

				{this.props.questions.map((question)=> {
					return <Question question={question} key={++count} id={count} setAnswer={this.setAnswer.bind(this)} current={this.state.current} setCurrent={this.setCurrent.bind(this)} num_of_q={this.props.questions.length}/>
				})}

				<button type="submit" style={buttonStyle} onClick={this.submitAnswers.bind(this)} >Finish</button>
			</div>
		)
	}

}

export default Quiz;