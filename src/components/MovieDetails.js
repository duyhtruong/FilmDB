import React from "react";
import '../index.css'
import StarRatings from '/Users/dhtruong/movie-app/node_modules/react-star-ratings';


class MovieDetails extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movietitle: '',
			movieoverview:'',
			posterpic:'',
			genres:[],
			movierating:0
		}
	}

	componentDidMount() {
		let detailEndpoint = 'https://api.themoviedb.org/3/movie/';
		let detailID = window.location.pathname.substring(6) + '?api_key=23df4f4dded45215846668f78df6e8e8&language=en-US';
		let detailEndpointFinal = detailEndpoint + detailID;
		
		
		fetch(detailEndpointFinal)
			.then(response=>{
				return response.json();
			})
			.then(data=>{
				let posterEndpoint = 'https://image.tmdb.org/t/p/';
				let posterSize = 'w185';

				let movieTitleData = data["original_title"] + '\n';
				let movieOverviewData = data["overview"];
				let moviePoster = <img className='posterdetail' src = {posterEndpoint + posterSize + data["poster_path"]}/>
				let movieRatingData = data["vote_average"] / 2;
				let movieGenres = data["genres"].map((genre,index)=>{
					return(
						<div className='genreButton'>
							{genre["name"]}
						</div>
					);
				})
			
				this.setState({
					posterpic: moviePoster,
					movietitle: movieTitleData,
					movieoverview: movieOverviewData,
					genres: movieGenres,
					movierating: movieRatingData
				})
			});
	}

	render(){
		return(
			<div className='display-linebreak detailCards'>
				<div className='detailchild'>
					{this.state.posterpic}
				</div>
				<div className='detailchild'>
					<div>
						<div>
							<p className='movieTitle'>
								{this.state.movietitle}
							</p>
						</div>
 						<div className='starRatings'>
 							<StarRatings
 							rating={this.state.movierating}
 							starDimension="1.5em"
 							starSpacing="0"
 							starRatedColor="red"
 							starEmptyColor="grey"
 							/>
 						</div>
						<div>
							<p className='movieoverview'>
								{this.state.movieoverview}
							</p>
						</div>
						<div className='genreClass'>
							{this.state.genres}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieDetails;