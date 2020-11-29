import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {logout} from '../redux/actions/auth';
import { fetchMovies } from "../redux/actions/movies";
import {useHistory, Link} from 'react-router-dom';
import {useInput} from '../hooks/input';

// Bootstrap
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
//Ant icons
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";



const NavbarComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLogged = useSelector((state) => state.auth.logged);
  const { value, bind, reset} = useInput('');

  const handleLogout = () => {
    dispatch(logout())
    history.push('/')
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // fetch all the movies according to the value of the state
    dispatch(fetchMovies(value));
    reset(); 
    history.push('/movies');
  }

  return (

    <Navbar className='color-nav'>
      <Link to='/'>
      <Navbar.Brand className="text-warning">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png"
          width="60"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      </Link>

      
    <Form inline onSubmit={handleSubmit} >
      <FormControl type="text" placeholder="Search" {...bind} className="mr-sm-2" style={{height: '30px'}}/>
      <Button variant="outline-warning" type='submit' style={{height: '30px', display:'flex', alignItems:'center'}}>Search</Button>
    </Form>
        
      {isLogged.email ? ( // Dropdown with Registered User 
        <Nav className="text-secondary" >
           <NavDropdown title={<span className="text-warning my-auto">My Account</span>}  id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to={`/favs/${isLogged.id}`}>Favorites</Link>
            </NavDropdown.Item>
            
           {isLogged.admin && <NavDropdown.Item> 
              <Link to='/users'>Users</Link>
            </NavDropdown.Item>}

            <NavDropdown.Divider />

            <NavDropdown.Item onClick={handleLogout}>
             Logout 
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
      ) : (
        // Login y Register
        <Nav >
          <Nav.Link className="text-warning">
            <Link to="/login" className="text-warning">
              Login
              <UserOutlined style={{ fontSize: "20px" }} />
            </Link>
          </Nav.Link>

          <Nav.Link className="text-warning">
            <Link to="/register" className="text-warning ">
              Register
              <UserAddOutlined style={{ fontSize: "20px" }} />
            </Link>
          </Nav.Link>
        </Nav>
      )}
    
      
    </Navbar>
  
   
  )
}

export default NavbarComponent

/* 
<div>
      {isLogged.email ? <div>
        <button onClick={handleLogout}>Logout</button>
        <Link to={`/favs/${isLogged.id}`}><button>Favourites</button></Link>
        </div> :
        <div> 
          <Link to='/register'><button>Register</button></Link>
          <Link to='/login'><button>Login</button></Link>
        </div>  
          }
      {isLogged.admin ?  <Link to='/users'><button>Users</button></Link> : null }
      
    </div> */