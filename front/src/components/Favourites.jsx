import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavs, removeFav} from '../redux/actions/favourites';
import {useParams} from 'react-router-dom';

const Favourites = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const favourites = useSelector((state) => state.favourites.favourites);

  useEffect(() => {
    //bring all the favorite movies of this user
    dispatch(fetchFavs(id))
  })

  return (
    <div>
      {favourites.length > 0 ? favourites.map((m) => 
      
      <div key={m.id}>
        <h3>{m.title}</h3>
        <img src={m.poster}/>
        <button onClick={() => dispatch(removeFav(m.id))}>Remove</button>
      </div>) 
      : null}

    </div>
  )
}

export default Favourites