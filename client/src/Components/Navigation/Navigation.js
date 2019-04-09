import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' 
import './navbar.css'
import logo from '../../Assets/Images/logo.png'

class Navigation extends Component { 
    render() { 
        return ( 
            <nav class="nav" style={{height: '65px'}}> 
                <div className="container"> 
                    <ul> 
                        <li className="logo"> 
                            <NavLink to="/"> 
                                <img src={logo} width="35px" alt="App Logo"/>
                            </NavLink> 
                        </li> 
                        <li><NavLink className="color" to="/">Home</NavLink></li> 
                        
                        <li> 
                            <NavLink className="color" to="/diet"> 
                                Diet Plan 
                            </NavLink> 
                        </li> 
                        <li> 
                            <NavLink className="color" to="/blog"> 
                                Blog 
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





