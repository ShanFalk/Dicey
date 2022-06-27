import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavigationComponents/Navbar';
import Search from './components/NavigationComponents/Search';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import MainPageDisplay from './components/BrewsColComponents/MainPageDisplay';
import SearchResultDisplay from './components/BrewsColComponents/SearchResultDisplay';
import AboutPage from './components/AboutComponents/AboutPage';
import ProfilePage from './components/ProfileComponents/ProfilePage';
import ShoppingCartPage from './components/ShoppingCartComponents/ShoppingCartPage';
import BrewPage from './components/BrewSingleComponents/BrewPage';

import { authenticate } from './store/session';


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

        <ProtectedRoute path='/profile/:userId' exact={true} >
          <ProfilePage />
        </ProtectedRoute>

        <Route path='/brew/:id' exact={true} >
          <BrewPage/>
        </Route>

        <Route path='/search?q=:userInput' exact={true} >
          <Search />
          <SearchResultDisplay />
        </Route>

        <Route path='/' exact={true} >
          <MainPageDisplay />
        </Route>

        <Route path='/shopping-cart' exact={true} >
          <ShoppingCartPage />
        </Route>

        <Route path='/about' exact={true} >
          <AboutPage/>
        </Route>



      </Switch>
    </BrowserRouter>
  );
}

export default App;
