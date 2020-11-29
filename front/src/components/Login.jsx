import React, {useState} from 'react';
import {useInput} from '../hooks/input';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/auth';
import {useHistory, Link} from 'react-router-dom';

// Bootstrap
import {Form, Button, Container, Alert, Spinner} from "react-bootstrap";


 const Login = () => {
  const { value: email, bind: bindEmail, reset: resetEmail} = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword} = useInput('');
  const [isLoading, setIsLoading] = useState(false);
  const isLogged = useSelector((state) => state.auth.logged)

  const dispatch = useDispatch();
  const history = useHistory();

  // send the login data to the back
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true)
    dispatch(login({email, password})).then(() => {
      if(isLogged) {
        history.push('/');
        setIsLoading(false)
        resetEmail();
        resetPassword();
      }
    })
   
   
    
  }

  return (
    <div>
    <hr />
    <Container>
      <Form style={{ color: "white" }} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
        <h2> Sign In </h2>
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...bindEmail}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...bindPassword}
          />
        </Form.Group>
        
        <Button variant="warning" type="submit">
          Submit
        </Button>

        <br/><br/>
    
    {isLoading ?  <Alert variant='warning' >
   Loading... 
    <Spinner animation="border" variant="warning" className={'spiner'}/>
    <br/>
    </Alert> 
    : null}
       
        <Link to='/register' style={{display: 'flex', alignItems:'flex-end', marginTop: '10px', color: 'grey'}}>I don't have an account yet.</Link>
      </Form>
    </Container>

    <hr />
  </div>

  )
}

export default Login

/* 
    
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
</form>  */