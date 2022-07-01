import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './components/LoginForms/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/Navbar';
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
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { authenticate } from './store/session';
import { getAllBrews } from './store/brew';
import { getAllTags } from './store/tag';
import { getAllUsers} from './store/user';
import { getPurchases } from './store/purchases';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const brews = useSelector(state => state.brews)
  const id = useSelector(state => state.session.id)
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {


    dispatch(getAllBrews());
    dispatch(getAllTags());
    dispatch(getAllUsers());


  }, [dispatch]);




  if (!loaded || !brews) {
    return null;
  }



  return (
    <BrowserRouter>
      <NavBar />
      <div id="main-content">
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

        <ProtectedRoute path="/brew" exact={true}>
          <BrewCreateForm/>
        </ProtectedRoute>

        <Route path="*">
          <NotFound/>
        </Route>


      </Switch>

      <div className="custom-shape-divider-bottom-1656629992">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="custom-shape-divider-bottom-1656635902">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
      </div>


      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
