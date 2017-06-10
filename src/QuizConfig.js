import React from 'react';

import NumberPicker from 'react-widgets/lib/NumberPicker';
import Combobox from 'react-widgets/lib/Combobox';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';

var numberLocalizer = require('react-widgets/lib/localizers/simple-number');
numberLocalizer();

var $ = require('jquery/src/core');
require('jquery/src/ajax');
require('jquery/src/ajax/xhr');

let categories = [
	{value:'any', name:'Any Category'},
	{value:'9', name:'GeneralKnowledge'},
	{value:'10', name:'Entertainment: Books'},
	{value:'11', name:'Entertainment: Film'},
	{value:'12', name:'Entertainment: Music'},
	{value:'13', name:'Entertainment: Musicals & Theatres'},
	{value:'14', name:'Entertainment: Television'},
	{value:'15', name:'Entertainment: Video Games'},
	{value:'16', name:'Entertainment: Board Games'},
	{value:'17', name:'Science & Nature'},
	{value:'18', name:'Science: Computers'},
	{value:'19', name:'Science: Mathematics'},
	{value:'20', name:'Mythology'},
	{value:'21', name:'Sports'},
	{value:'22', name:'Geography'},
	{value:'23', name:'History'},
	{value:'24', name:'Politics'},
	{value:'25', name:'Art'},
	{value:'26', name:'Celebrities'},
	{value:'27', name:'Animals'},
	{value:'28', name:'Vehicles'},
	{value:'29', name:'Entertainment: Comics'},
	{value:'30', name:'Science: Gadgets'},
	{value:'31', name:'Entertainment: Japanese Anime & Manga'},
	{value:'32', name:'Entertainment: Cartoon & Animations'}
];

let difficulties = [
	{value: 'any', name:'Any Difficulty'},
	{value: 'easy', name:'Easy'},
	{value: 'medium', name:'Medium'},
	{value: 'hard', name:'Hard'}
]

let types = [
	{value: 'any', name:'Any Type'},
	{value: 'multiple', name:'Multiple Choice'},
	{value: 'boolean', name:'True / False'}
]

let inputStyle = {
	marginTop: "20px"
}

let buttonStyle = {
	width: "300px",
	marginTop: "20px",
	height: "37px",
	backgroundColor: "white",
	border: "#ccc 1px solid",
	borderRadius: "4px",
	fontFamily: "RwWidgets",
	fontSize: "15px",
	backgroundColor:"purple",
	color:"white"
}

class QuizConfig extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			num_of_q: 10,
			category: categories[0],
			difficulty: difficulties[0],
			type: types[0]
		}
	}

	submitConfig(event){
		event.preventDefault();
		let url = "http://cors-proxy.htmldriven.com/?url=https://www.opentdb.com/api.php?amount=" + this.state.num_of_q;

		 if(this.state.category !== categories[0]){
		 	url = url + "&category=" + this.state.category.value;
		 }

		 if(this.state.difficulty !== difficulties[0]){
		 	url = url + "&difficulty=" + this.state.difficulty.value;
		 }
		      
		  if(this.state.type !== types[0]){
		 	url = url + "&type=" + this.state.type.value;
		 }              

			$.get(url, function(data, status){

				let result = JSON.parse(data.body);
				if(result.response_code === 0){
		       		this.props.setQuestions(result.results);
		   		}
		   		else{
		   			this.props.setQuestions([]);//proveriti
		   			alert("Ponovite zahtev");
		   		}
    		}.bind(this));
    		
	}

	render(){
		return (
			<form onSubmit={this.submitConfig.bind(this)}>
				<NumberPicker value={this.state.num_of_q} min={1} max={50} style={inputStyle} ref="num_of_q" onChange={value => this.setState({ num_of_q: value })}/>
				<Combobox value={this.state.category} textField="name" data={categories} style={inputStyle} ref="category" onChange={value => this.setState({ category: value })}/>
				<DropdownList value={this.state.difficulty} textField="name" data={difficulties} style={inputStyle} ref="difficulty" onChange={value => this.setState({ difficulty: value })}/>
				<DropdownList value={this.state.type} textField="name" data={types} style={inputStyle} ref="type" onChange={value => this.setState({ type: value })}/>
				<button type="submit" style={buttonStyle}>Submit</button>
			</form>
		)
	}
}

export default QuizConfig;