import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import MovieEdit from './MovieEdit';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {id: this.idRand(), name: "Terminator", year: "1996",duration:'02:30'}
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateMovie = this.updateMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  idRand() {
    let id = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++){
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return id;
  }

  handleAddMovie (event) {
    event.preventDefault();
    let movie = {
  		id:this.idRand(),
  		name: event.target.name.value,
  		year: event.target.year.value,
  		duration: event.target.duration.value
    };
    this.setState({
      movies: this.state.movies.concat([movie])
    });
  }
  handleChange(e) {
    let movies = this.state.movies.slice()
    let change = {}
    change[e.target.name] = e.target.value
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === this.dataMovie.id){
        movies[i][e.target.name] = e.target.value
        this.setState({movies: movies})
      }
    }
  }

  updateMovie(id) {
    if (document.querySelector(".editForm")) {
      document.querySelector(".editForm").style.display="block"; 
    }
    this.state.movies.forEach(i =>{
      if(i.id==id){
        this.dataMovie = i;
      }
    })
    this.setState({
      movie: this.dataMovie
    });
  }

  deleteMovie(id) {
    let movies = this.state.movies
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id == id){
        movies.splice(i, 1)
        this.setState({movies: movies})
      }
    }
  }


  render() {
    return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Bienvenido a React</h2>
			</div>
			<div className="container">
				<p><b>Añade Peliculas</b></p>
				<MovieList movies={this.state.movies} updateMovie={this.updateMovie} deleteMovie={this.deleteMovie}/>
				<MovieForm AddMovie={this.handleAddMovie.bind(this)} />

				{this.state.movie && <MovieEdit movieEdit={this.state.movie} handleChanges={this.handleChange} />}
			</div>
		</div>
    );
  }
}

export default App;
