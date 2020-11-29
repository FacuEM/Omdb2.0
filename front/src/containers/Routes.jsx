import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { fetchUser } from "../redux/actions/auth";
import { useDispatch } from 'react-redux';

//Private route only for admins
import ProtectedRoute from './ProtectedRoute';

import Main from "./Main";
import Register from '../components/Register';
import Login from '../components/Login';
import SingleMovie from '../components/SingleMovie';
import Users from '../components/Users';
import Favourites from '../components/Favourites'
import Movies from "../components/Movies";



const Routes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is logged
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <BrowserRouter>
          <div>
            <Switch>
       
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />

              <Route path='/movie/:id' component={SingleMovie} />
              <Route path='/movies' component={Movies} />

              <Route path='/favs/:id' component={Favourites} />

              <ProtectedRoute exact path='/users' component={Users} />

              <Route exact path="/" component={Main} />

              <Redirect from='/' to='/' />
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default Routes
