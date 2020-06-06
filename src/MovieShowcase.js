import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

//moviecard acting as a container

export default class MovieShowcase extends Component {

  generateMovieCards = () => { //sending to moviecard, map everything we need for moviecard
   return movieData.map((a, b) => <MovieCard
        key={b}
        title={a.title}
        IMDBRating={a.IMDBRating}
        genres={a.genres}
        poster={a.poster}
   />)
    // map over movieData array, passing in value from each object as props.
    // and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
