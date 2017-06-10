import React from 'react';

import Answer from './Answer';

let questionStyleBlock = {
	border:"2px solid purple",
	padding: "15px",
	textAlign:"center",
	borderRadius:"5px",
	marginTop:"20px",
	display:"block"
}

let questionStyleHidden = Object.assign({}, questionStyleBlock, {display:"none"}); 

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

class Question extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			selected: -1,
			answers:[]
		}
	}

	 componentDidMount() {
	 	let answers = this.props.question.incorrect_answers.slice();
		answers.push(this.props.question.correct_answer);
      	this.setState({answers: shuffle(answers)});
    }

	setSelected(id){

			this.setState({selected: id}, ()=>{				
				this.props.setAnswer(this.props.id, this.state.answers[this.state.selected]);
			});
		}

	leftClick(){
		this.props.setCurrent(this.props.id - 1);
	}

	rightClick(){
		this.props.setCurrent(this.props.id + 1);
	}

	render(){
			let count = -1;	

			let text = (this.props.id + 1).toString() + ". " + decodeHtml(this.props.question.question);

		return (
			<div style={(this.props.current !== this.props.id) ? questionStyleHidden  : questionStyleBlock}>			
				<button type="submit" style={(this.props.id === 0) ? disButtonStyle : buttonStyle}  onClick={this.leftClick.bind(this)} disabled={(this.props.id === 0)}>&larr;</button>
				<button type="submit" style={(this.props.id === this.props.num_of_q-1) ? disButtonStyle : buttonStyle}  onClick={this.rightClick.bind(this)} disabled={(this.props.id === this.props.num_of_q-1)}>&rarr;</button>
				<hr/>
				<h4>{text}</h4>		
				<hr/>

					{this.state.answers.map((answer)=> {
					return <Answer key={++count} id={count} question_id={this.props.id}  answer={answer} setSelected={this.setSelected.bind(this)} selected={this.state.selected}/>
					})}	

			</div>
		)
	}


}

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

export default Question;