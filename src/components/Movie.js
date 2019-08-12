import React, {Component} from 'react';

class Movie extends Component {

  render() {

    return(
      <div className="movie">
        <li>
          <h4>{this.props.children}</h4>
          <p>{this.props.url}</p>
        </li>
      </div>
    )

  }
}

export default Movie;
