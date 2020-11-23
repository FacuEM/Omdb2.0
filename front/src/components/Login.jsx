import React from 'react';
import {useInput} from '../hooks/input';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions/auth';
import {useHistory, Link} from 'react-router-dom';



 const Login = () => {
  const { value: email, bind: bindEmail, reset: resetEmail} = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword} = useInput('');

  const dispatch = useDispatch();
  const history = useHistory()
  // send the login data to the back
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({email, password}));
    resetEmail();
    resetPassword();
    history.push('/');
  }

  return (
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type='text' {...bindEmail}/>
        </label>
        <label>
          Password:
          <input type='text' {...bindPassword}/>
        </label>
        <button type='submit'>Login</button>
        <Link to='/register'>No tengo cuenta aun.</Link>
      </form>
  )
}

export default Login