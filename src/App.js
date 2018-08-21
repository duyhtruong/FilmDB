import React from "react";
import Cards from "./Cards";

class App extends React.Component {
	constructor(){
		super();
		this.state ={
			value: '',
			omdbdata: []
		
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		}

			handleChange(e){
			this.setState({value: e.target.value});
			}

			handleSubmit(e){
				e.preventDefault();
				let endpoint = 'http://www.omdbapi.com/?apikey=f90715be&s=' +this.state.value + '&r=json';
				fetch(endpoint)
				.then(response=>{
					return response.json();
					
				}
				)
				.then(data=>{
					let title = data["Search"].map((res, index)=>{
						return(
							<div key={index} className='cards'>
								<img src={res["Poster"]}/>
								{res["Title"]}
							</div>
							)
						})
					console.log(title);
					
					this.setState({
						omdbdata: title
					});
				
				})
			}


			
	

	render(){
		return(
			<div>
			<div className='header'>
			<h1>title </h1>
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.value} onChange={this.handleChange}/>
				<button type='submit'>submit</button>

			</form>
			</div>
			<Cards titledata={this.state.omdbdata}/>
			</div>


		);
	}
}


export default App;