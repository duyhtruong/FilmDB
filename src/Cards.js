import React from 'react';
import "./index.css";

class Cards extends React.Component {
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div className='card'>
				{this.props.titledata}
			</div>

		);
	}
}

export default Cards;