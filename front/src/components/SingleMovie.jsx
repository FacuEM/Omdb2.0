import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovie} from '../redux/actions/movies';
import {addFav} from '../redux/actions/favourites';
import {useParams} from 'react-router-dom';

const SingleMovie = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const movie = useSelector((state) => state.movies.movie);
  const user = useSelector((state) => state.auth.logged)
  

  useEffect(() => {
    //fetch a single movie according to the id
    dispatch(fetchMovie(id))
  }, []);
  
  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster}/>
      <button onClick={() => addFav({title: movie.Title, poster: movie.Poster, user: user.id})}>Agregar a favoritos</button>
    </div>
  )
}

export default SingleMovie