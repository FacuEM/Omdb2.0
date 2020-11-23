import React from 'react';
import {useInput} from '../hooks/input';
import {useDispatch} from 'react-redux';
import {register} from '../redux/actions/auth';
import {useHistory, Link} from 'react-router-dom'


 const Register = () => {
  const { value: email, bind: bindEmail, reset: resetEmail} = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword} = useInput('');

  const dispatch = useDispatch();
  const history = useHistory()
  // send the register data to the back
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(register({email, password}));
    resetEmail();
    resetPassword();
    history.push('/login');
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
        <button type='submit'>Register</button>
        <Link to='/login'>Ya tengo una cuenta.</Link>
      </form>

  )
}

export default Register
