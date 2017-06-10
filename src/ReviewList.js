import React from 'react';
import ReactDOM from 'react-dom';

import ReviewQuestion from './ReviewQuestion';

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

let listStyle = {
	border:"2px solid purple",
	padding: "15px",
	textAlign:"center",
	borderRadius:"5px"
}


class ReviewList extends React.Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

	playAgain(){
		ReactDOM.render(
	<App />, 
	document.getElementById('app'));
	}


	render(){

		let count = -1;
		return (
			<div>
				<div style={listStyle}>     

				<h2>Answers review</h2>                

					{this.props.questions.map((question)=> {
						return <ReviewQuestion question={question}  key={++count} id={count} />
					})}
					
				</div>
				<button type="submit" style={buttonStyle} onClick={this.playAgain} >Play again</button>
			</div>
		)
	}


}

export default ReviewList;