import React from "react";
import Trending from "./components/Trending"
import MovieSearch from "./components/MovieSearch"
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import {withRouter} from 'react-router-dom';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			value: '',
			testsubmit:'',
			headcss: 'headernavrow'
		}
		
		this.input = React.createRef();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		}

			handleChange(e){
				this.setState({
					value: e.target.value
				})
			}

			handleSubmit(e){
				e.preventDefault()
				this.setState(
				{
					testsubmit: this.state.value
				},() => 
					{this.props.history.push(`/resultPage/${this.state.testsubmit}`)}
				);
			}

	render(){
		return(
			<div>
				<div className='header'>
					<div className={this.state.headcss}>
						<Link to='/home'>
							<img src={require('./filmdblogo2.png')} className='logo'/>
						</Link>

						<form type='submit' onSubmit={this.handleSubmit}>
							<input type='text' value={this.state.value} onChange={this.handleChange} placeholder=' Search Movies'/>
						</form>
					</div>
				</div>
					
				<div className='container'>
					<Switch>
						<Route exact path='/home' component={Trending}/>
						<Route path='/home/:movieId' component={MovieDetails}/>
						<Route exact path={`/resultPage/${this.state.testsubmit}`} render={(props)=>
							<MovieSearch inputProp={this.state.value} {...props} />
						}/>
					</Switch>
				</div>
			</div>
		);
	}
}


export default withRouter(App);