import React from 'react';
import {useInput} from '../hooks/input';
import {useDispatch} from 'react-redux';
import {register} from '../redux/actions/auth';
import {useHistory, Link} from 'react-router-dom';

//Bootstrap
import {Form, Button, Container} from "react-bootstrap";




 const Register = () => {
  const { value: email, bind: bindEmail, reset: resetEmail} = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword} = useInput('');

  const dispatch = useDispatch();
  const history = useHistory();

  // send the register data to the back
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(register({email, password}));
    resetEmail();
    resetPassword();
    history.push('/login');
  }

  return (
    <div>
    <hr />
    <Container>
      <Form style={{ color: "white" }} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
        <h2> Sign Up </h2>
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...bindEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
       
        <Link to='/login' style={{display: 'flex', alignItems:'flex-end', marginTop: '10px', color: 'grey'}}>I already have an account.</Link>
      </Form>
    </Container>

    <hr />
  </div>
     
  )
}

export default Register

{/* <form onSubmit={handleSubmit}>
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
</form> */}
