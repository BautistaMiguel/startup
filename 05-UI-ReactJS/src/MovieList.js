import React, { Component } from 'react'
import Movie from './Movie'

class MovieList extends Component {
	render () {
		return (

			<ul>
			<div>
				<span className="movieElement">Movie</span>
				<span className="movieElement">Year</span>
				<span className="movieElement">Duration</span>
			</div>
				{this.props.movies.map(i => {
					return (
						<li>
							<div>
								<Movie key={i.id} id={i.id} name={i.name} year={i.year} duration={i.duration} handleUpdate={this.props.updateMovie.bind(this)} handleDelete={this.props.deleteMovie.bind(this)} />
							</div>
						</li>
					);
				})}

			</ul>
		);
	}
}

export default MovieList;
