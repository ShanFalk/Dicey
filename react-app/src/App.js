import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './components/LoginForms/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/Navbar';
import Search from './components/Navigation/Search';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import MainPageDisplay from './components/BrewsCollection/MainPageDisplay';
import SearchResultDisplay from './components/BrewsCollection/SearchResultDisplay';
import AboutPage from './components/About/AboutPage';
import ProfilePage from './components/Profile/ProfilePage';
import ShoppingCartPage from './components/ShoppingCart/ShoppingCartPage';
import BrewPage from './components/BrewSingle/BrewPage';
import BrewCreateForm from './components/BrewSingle/BrewCreateForm/index';
import Footer from './components/Footer';
import { authenticate } from './store/session';
import { getAllBrews } from './store/brew';
import { getAllTags } from './store/tag';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const brews = useSelector(state => state.brews)
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {

    dispatch(getAllBrews());
    dispatch(getAllTags());

  }, [dispatch]);


  if (!loaded || !brews) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
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

        <Route path='/brews/:brewId' exact={true} >
          <BrewPage/>
        </Route>

        <Route path='/search' >
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

        <Route path="/brew" exact={true}>
          <BrewCreateForm/>
        </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
