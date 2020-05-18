import React, {Component} from 'react';
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
import Sidebar from './components/Navigation/Sidebar';
import Profile from './components/Profile/Profile';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  render(){
    const {isAuthenticated} = this.props;
    return (
      <Router>
        <div className="App">
          <Navbar id='navbar'/>
          {
              (isAuthenticated) ? (
                <Sidebar/>
              ) : (
                null
              )
          }
          <Switch id='routes'>
            <ProtectedRoute exact path='/' component={Dashboard}/>
            <ProtectedRoute path='/profile' component={Profile}/>
            <Route path='/home' component={Home}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/login' component={Login}/>
          </Switch>
          <Footer id='footer'/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(App);