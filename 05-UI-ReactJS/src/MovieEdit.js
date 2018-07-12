import React, { Component } from 'react';

class MovieEdit extends Component {

  onItemClick (event) {//
    document.querySelector(".editForm").style.display="none"; 
  }

  render() {
    return (

      <form className="editForm">
        <input type="text" value={this.props.movieEdit.name} onChange={this.props.handleChanges.bind(this)} placeholder="Pelicula" name="name" />
        <input type="text" value={this.props.movieEdit.year} onChange={this.props.handleChanges.bind(this)} placeholder="Año" name="year" />
        <input type="time" value={this.props.movieEdit.duration} onChange={this.props.handleChanges.bind(this)} placeholder="Duracion" name="duration" />
        <button type="button" onClick ={this.onItemClick}>Finish</button>
      </form>

    );
  }
}

export default MovieEdit;
