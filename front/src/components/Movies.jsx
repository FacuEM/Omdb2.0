import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


const Movies = () => {
  const movies = useSelector((state) => state.movies.movies)

  return (
    <div>
      {movies.map((m) =>
        <div key={m.imdbID}>
          <h1>{m.Title}</h1>
          <img src={m.Poster} />
          <Link to={`/movie/${m.imdbID}`}>See more</Link>
        </div>)}
    </div>
  )
}

export default Movies
