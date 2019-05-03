
import React, { Component } from 'react' 
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import Navigation from './Components/Navigation/Navigation' 
import jwtDecode from 'jwt-decode' 

import Home from './Components/HomeComponent/Home' 

import Dietplan from './Components/DietPlan/Dietplan'
import Age from './Components/DietPlan/Age'
import HeightWeight from './Components/DietPlan/HeightWeight'
import BMI from './Components/DietPlan/BMI'
import NoSolution from './Components/DietPlan/NoSolution'
import Solution from './Components/DietPlan/solution'


import Blog from './Components/Blog/Blog' 
import Tutorials from './Components/Tutorials/Tutorial' 

import Profile from './Components/Profile/Profile' 
import Dashboard from './Components/AdminDashboard/Dashboard' 

import Signin from './Components/Signin/Signin' 
import adminLogin from './Components/Signin/adminLogin'
import Signup from './Components/Signup/Signup' 
import Update from './Components/Profile/Update' 

import Content from './Components/AdminDashboard/Content/Profile'


class App extends Component { 
  render() { 
    return ( 
      <BrowserRouter> 
        <div> 
          <Navigation /> 
          <Switch> 
              <Route path="/" component={Home} exact /> 
              
              <Route path="/diet" component={Dietplan} /> 
              <Route path="/age" component={Age} /> 
              <Route path="/height-weight" component={HeightWeight} /> 
              <Route path="/bmi" component={BMI} /> 
              <Route path="/nosolution" component={NoSolution} /> 
              <Route path="/solution" component={Solution} /> 
              

              <Route path="/blog" component={Blog} /> 
              <Route path="/tutorials" component={Tutorials} /> 
              
              <Route path="/admin" component={adminLogin} /> 
              <Route path="/profile" render={() => { 
                try { 
                  let token = localStorage.getItem('token').split(' ')[1] 
                  let user = jwtDecode(token) 
                  if(user.email === 'rijyan.cse.152@gmail.com') { 
                    return <Dashboard /> 
                  } 
                  else if(user) { 
                    return <Profile /> 
                  } 
                } 
                catch (error) {
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
              }}/> 

              <Route path="/content" component={Content} /> 
              <Route path="/login" component={Signin} /> 
              <Route path="/registration" component={Signup} /> 
              <Route path="/editprofile" render={() => { 
                let token = localStorage.getItem('token');
                if(token) { 
                  return <Update /> 
                } 
              }} /> 
              <Route component={Error} exact /> 
          </Switch> 
        </div> 
      </BrowserRouter> 
    ); 
  } 
} 

export default App;
