import React from "react";
import {useInput} from '../hooks/input'
import {useDispatch} from 'react-redux'
import { fetchMovies } from "../redux/actions/movies";
import Movies from './Movies'

const Search = () => {

  const { value, bind, reset} = useInput('');
  const dispatch = useDispatch()
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // fetch all the movies according to the value of the state
    dispatch(fetchMovies(value));
    reset();    
  }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' {...bind} />
          <button type='submit'>Submit</button>
        </form>
        <Movies />
      </div>
    );
  }


export default Search
