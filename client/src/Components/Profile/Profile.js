import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Profile extends Component { 
    clickHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    } 

    render() { 
        return ( 
            <div className="container"> 
                <h1>Profile Page</h1> 
                
                <button
                        onClick={this.clickHandler}
                        className="btn btn-danger">
                        Logout
                </button>
            </div>
            ) 
        } 
    } 
        
export default withRouter(Profile); 