import React from "react";
import '../index.css'
import { Link } from "react-router-dom";


class Trending extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			trendingData: [],
			movieId: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

		handleClick(e){
			this.setState({movieId: e}, ()=> console.log(this.state.movieId));
		}

		componentDidMount() {
			let endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=23df4f4dded45215846668f78df6e8e8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
			fetch(endpoint)
			.then(response=>{
				return response.json();
				}
			)
			.then(data=>{
				let posterEndpoint = 'https://image.tmdb.org/t/p/';
				let posterSize = 'w342';
				let pictures = data["results"].map((pic,index)=>{
				return(
					<div key={pic["id"]} >
						<Link to={'/home/'+pic["id"].toString()}>
							<img className='trendingposterscss' src= {posterEndpoint + posterSize + pic["poster_path"]}/>
						</Link>
					</div>
				);
				})
					this.setState({
						trendingData: pictures
					});
			})
		}

	render(){
		return(
			<div>
				<div>
					<h1>Popular Films</h1>
					<div className='trendingposters'>
						{this.state.trendingData}
					</div>
				</div>
			</div>
		);
	}
}

export default Trending;