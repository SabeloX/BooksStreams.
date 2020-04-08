import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';

const App = (props) =>{
  const { isAuthenticated, isVerifying } = props;

  return (
    <Router>
      <div className="App">
        <Navbar id='navbar'/>
        <Switch id='routes'>
          <Route exact path='/home' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <ProtectedRoute
            path='/'
            component={Dashboard}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
        </Switch>
        <Footer id='footer'/>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) =>{
  return{
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
}

export default connect(mapStateToProps)(App);