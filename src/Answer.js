import React from 'react';

let whiteButton = {
	width: "250px",
	height: "37px",
	backgroundColor: "white",
	border: "#ccc 1px solid",
	borderRadius: "4px",
	fontFamily: "RwWidgets",
	fontSize: "15px",
	margin:"auto",
	marginTop: "20px"
}

let purpleButton = Object.assign({}, whiteButton, {backgroundColor: "purple", color: "white"});


class Answer extends React.Component{

	constructor(props){
		super(props);

	}

	handleClick(event){
			this.props.setSelected(this.props.id);
		}

	render(){
			let count = -1;

		return (
			<button style={ (this.props.selected === this.props.id) ? purpleButton : whiteButton} onClick={this.handleClick.bind(this)}>
				{decodeHtml(this.props.answer)}
			</button>
		)
	}


}

export default Answer;

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
