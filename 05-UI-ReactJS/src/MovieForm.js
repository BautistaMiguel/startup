import React, { Component } from 'react';

export default class MovieForm extends Component{
  render(){
    return (

      <form onSubmit={this.props.AddMovie}>
  			<input type="text" placeholder="Movie" name="name" required/>
  			<input type="number" placeholder="Year" name="year" required/>
  			<input type="time" placeholder="Duration" name="duration" required/>
  			<input type="submit" value="Add" />
      </form>

    );
  }
}
