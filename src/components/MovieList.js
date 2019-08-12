import React, {Component} from 'react';
import Movie from './Movie';

class MovieList extends Component {

  render() {
    const movieNodes = this.props.data.map(movie => {
      return(<Movie key={movie.id} url={movie.url}>{movie.name}</Movie>);
    })

    return(
      <div className="movie-list">
        <h3>movies: (this is movies list)</h3>
        <ul>
          {movieNodes}
        </ul>
      </div>
    )
  }
}

export default MovieList;
