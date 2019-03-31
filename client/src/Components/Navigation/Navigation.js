import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' 
import './navbar.css'
import logo from '../../Assets/Images/logo.png'

class Navigation extends Component { 
    render() { 
        return ( 
            <nav class="nav"> 
                <div className="container"> 
                    <ul> 
                        <li className="logo"> 
                            <NavLink to="/"> 
                                <img src={logo} width="35px" alt="App Logo"/>
                            </NavLink> 
                        </li> 
                        <li><NavLink className="color" to="/">Home</NavLink></li> 
                        <li>Gym 
                            <ul class="subList"> 
                                <li style={{zIndex: '100'}}> 
                                    <NavLink className="subcolor" to="/mangym">
                                        Man
                                    </NavLink></li> 
                                <li style={{zIndex: '100'}}>
                                    <NavLink className="subcolor" to="/womangym">
                                        Woman
                                    </NavLink></li> 
                            </ul> 
                        </li> 
                        <li> 
                            Diet 
                            <ul class="subList"> 
                                <li style={{zIndex: '100'}}>
                                    <NavLink className="subcolor" to="/mandiet">
                                        Man
                                    </NavLink>
                                </li> 
                                <li style={{zIndex: '100'}}> 
                                    <NavLink className="subcolor" to="/womandiet"> 
                                        Woman
                                    </NavLink> 
                                </li> 
                            </ul> 
                        </li> 
                        <li> 
                            <NavLink className="color" to="/blog"> 
                                Blog 
                            </NavLink> 
                        </li> 
                        <li> 
                            <NavLink className="color" to="/groceries"> 
                                Groceries
                            </NavLink> 
                        </li> 
                        <li> 
                            <NavLink className="color" to="/tutorials">
                                Tutorials 
                            </NavLink> 
                        </li> 
                        
                        <li> 
                            <NavLink className="color" to="/profile"> 
                                Profile 
                            </NavLink> 
                        </li> 
                        <li> 
                            <NavLink className="color" to="/login"> 
                                Login 
                            </NavLink> 
                        </li> 
                    </ul> 
                </div> 
            </nav> 
        ) 
    } 
} 

export default Navigation 





