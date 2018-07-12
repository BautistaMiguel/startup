import React, { Component } from 'react';

class Movie extends Component {
	render () {
		return (

			<li>
				<span className="movieElement">{this.props.name}</span>
				<span className="movieElement">{this.props.year}</span>
				<span className="movieElement">{this.props.duration}</span>
				<button onClick = {() => this.props.handleUpdate(this.props.id)}>Edit</button>
				<button onClick = {() => this.props.handleDelete(this.props.id)}>delete</button>
			</li>

		);
  	}
}

export default Movie;
