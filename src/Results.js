import React from 'react';
import ReactDOM from 'react-dom';

import App from './index';

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


let h3 = {
	marginBottom: "0px",
	textAlign: "center"
}

let h1 = Object.assign({}, h3, {marginTop:"0px"});

let red = Object.assign({}, h1, {color:"red"});
let green = Object.assign({}, h1, {color:"green"});
let purple = Object.assign({}, h1, {color:"purple"});

let resultsStyle = {
border:"2px solid purple",
padding: "15px",
textAlign:"center",
borderRadius:"5px",
marginTop:"20px"
}


class Results extends React.Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

	seeCorrectAnswers(){

		this.props.showReview();
	}

	playAgain(){
			ReactDOM.render(
	<App />, 
	document.getElementById('app'));
	}

	render(){

		let num_of_f = this.props.num_of_a - this.props.num_of_ca;
		let score_f =  num_of_f * 5;
		let score_ca = this.props.num_of_ca*10;
		let score = score_ca - score_f; 

		return (
			<div>
				<div style={resultsStyle}>                    
					<h3 style={h3}>Total number of questions: </h3>
					<h2 style={h1}>{this.props.num_of_q}</h2>
					<h3 style={h3}>Number of correct anwsers:</h3>
					<h2 style={green}>{this.props.num_of_ca} &rarr; <i>+{score_ca}</i></h2>
					<h3 style={h3}>Number of false anwsers:</h3>
					<h2 style={red}>{num_of_f} &rarr; <i>-{score_f}</i></h2>
					<h3 style={h3}>Total Score:</h3>
					<h1 style={purple}>{score}</h1>
				</div>
				<button style={buttonStyle} onClick={this.seeCorrectAnswers.bind(this)}>See Corect Answers</button>
				<button style={buttonStyle} onClick={this.playAgain} >Play Again</button>
			</div>
		)
	}


}

export default Results;