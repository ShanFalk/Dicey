import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Search from './components/Search';
import { authenticate } from './store/session';
import CreateBrew from './components/CreateBrew';
import HomePage from './components/HomePage';
import BrewCard from './components/BrewCard';
import BrewPage from './components/BrewPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Search />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
          <HomePage/>
        </ProtectedRoute>
        <ProtectedRoute path='/brew' exact={true} >
          <CreateBrew/>
        </ProtectedRoute>
        <ProtectedRoute path="/brew/:brewId" exact={true}>
          <BrewPage/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
