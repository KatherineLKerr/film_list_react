import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {

  render() {


    return(
      <div className="movie-list">
        <h3>movies: (this is movies list)</h3>
        <Movie/>
        <Movie/>
      </div>
    )
  }
}

export default MovieList;
