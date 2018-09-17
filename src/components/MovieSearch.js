import React from "react";
import '../index.css';
import { Link } from "react-router-dom";


class MovieSearch extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			searchData: []
		}

	}

	componentDidMount(){
		let searchEndpoint = 'https://api.themoviedb.org/3/search/movie?api_key=23df4f4dded45215846668f78df6e8e8&language=en-US&query=';
		let searchQuery = this.props.inputProp;
		let searchEndpoint2 = '&page=1&include_adult=false';
		let completeEndpoint = searchEndpoint + searchQuery + searchEndpoint2;

		fetch(completeEndpoint)
			.then(response=>{
				return response.json();
			})

			.then(data=>{
				let posterEndpoint = 'https://image.tmdb.org/t/p/';
				let posterSize = 'w342';
				let pictures = data["results"].map((pic,index)=>{
				return(
					<div key={pic["id"]}>
						<Link to={'/home/'+pic["id"].toString()}>
							<img src= {posterEndpoint + posterSize + pic["poster_path"]} className="postersearchcss"/>
						</Link>
					</div>
				);
				})
				this.setState({
					searchData: pictures
				});
			})
	}

	render(){
		return(
			<div className="searchbody">
				<div className="postersearchparent">
					{this.state.searchData}
				</div>
			</div>
		);
	}
}

export default MovieSearch;