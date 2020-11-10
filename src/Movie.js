import React from 'react';
import PropTypes from 'prop-types';

function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
        <div class="movie-data">
          <h3 class="movie-title" style={{backgroundColor: "red"}}>{title}</h3>
          <h5 class="movie-year">{year}</h5>
          <p class="movie-summary">{summary}</p>
        </div>
    </div>
  ); 
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
