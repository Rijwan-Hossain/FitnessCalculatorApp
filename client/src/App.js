
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom' 
import Navigation from './Components/Navigation/Navigation';

import Home from './Components/Home/Home' 

import Gymman from './Components/Gymman/Gymman' 
import Gymwoman from './Components/Gymwoman/Gymwoman' 

import Dietman from './Components/Dietman/Dietman' 
import Dietwoman from './Components/Dietwoman/Dietwoman' 

import Blog from './Components/Blog/Blog' 
import Groceries from './Components/Groceries/Groceries' 
import Tutorials from './Components/Tutorials/Tutorial' 
import Profile from './Components/Profile/Profile' 

import Signin from './Components/Signin/Signin' 
import Signup from './Components/Signup/Signup' 
import Update from './Components/Profile/Update'


class App extends Component { 
  render() { 
    return ( 
      <BrowserRouter> 
        <div> 
          <Navigation /> 
          <Switch> 
              <Route path="/" component={Home} exact /> 
              
              <Route path="/mangym" component={Gymman} /> 
              <Route path="/womangym" component={Gymwoman} /> 

              <Route path="/mandiet" component={Dietman} /> 
              <Route path="/womandiet" component={Dietwoman} /> 
              
              <Route path="/blog" component={Blog} /> 
              <Route path="/groceries" component={Groceries} /> 
              <Route path="/tutorials" component={Tutorials} /> 

              <Route path="/profile" render={() => { 
                let token = localStorage.getItem('token');
                if(token) { 
                  return <Profile /> 
                } 
                else {
                  return (
                    <div className="container"> 
                      <h1 
                        className="display-4 text-danger text-center"
                        style={{ 
                          position: 'absolute', 
                          top: '50%', 
                          left: '50%', 
                          transform: 'translate(-50%, -50%)'
                        }}> 
                        Please login to see your profile
                      </h1> 
                    </div> 
                  ) 
                } 
              }} /> 

              <Route path="/login" component={Signin} /> 
              <Route path="/registration" component={Signup} /> 
              <Route path="/editprofile" component={Update} /> 

              <Route component={Error} exact /> 
          </Switch> 
        </div> 
      </BrowserRouter> 
    );
  } 
} 

export default App;
