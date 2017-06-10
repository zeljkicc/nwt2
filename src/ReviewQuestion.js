import React from 'react';

let questionStyle={

}

let buttonStyle = {
				width: "130px",
				marginTop: "20px",
				height: "37px",
				backgroundColor: "white",
				border: "#ccc 1px solid",
				borderRadius: "4px",
				fontFamily: "RwWidgets",
				fontSize: "15px",
				backgroundColor:"purple",
				color:"white",
				fontSize: "20px",
				marginTop: "0px"
			}

let disButtonStyle = Object.assign({}, buttonStyle, {backgroundColor:"gray"}); 


let li = {
	textAlign: "left"
}

let green = Object.assign({}, li, {color: "green"});
let red = Object.assign({}, li, {color: "red"});


let italicGreen = Object.assign({}, green, {fontStyle: "italic"});
let italicRed = Object.assign({}, red, {fontStyle: "italic"});


class ReviewQuestion extends React.Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
			let count = -1;	

			let text = (this.props.id + 1).toString() + ". " + decodeHtml(this.props.question.question);


		return (
			<div style={questionStyle}>

			<hr/>

			<h4>{text}</h4>

					<ul>
						<li style={(this.props.question.answer === this.props.question.correct_answer) ? green : italicGreen}>{  decodeHtml(this.props.question.correct_answer) } {(this.props.question.answer === this.props.question.correct_answer) ? decodeHtml('&plus;10') : false}</li>

						{ this.props.question.incorrect_answers.map((answer)=> {
							return <li key={++count} id={count} style={(this.props.question.answer === answer) ? red : li }> {decodeHtml(answer)} {(this.props.question.answer === answer) ? -5 : false}</li>
						})}
					</ul>
				
			
			
			</div>
		)
	}


}

export default ReviewQuestion;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

