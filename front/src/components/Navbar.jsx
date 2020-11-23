import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {logout} from '../redux/actions/auth';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.logged)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
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
      
    </div>
  )
}

export default Navbar