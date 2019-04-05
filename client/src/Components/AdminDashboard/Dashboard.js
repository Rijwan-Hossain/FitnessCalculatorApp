import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' 

class Dashboard extends Component { 

    adminLogout = () => {
        localStorage.removeItem('token'); 
        this.props.history.push('/login'); 
    } 

    render() {
        return (
            <div> 
                <div className="bg-info"> 
                    <div className="d-flex container">
                        <h3 
                            className="my-2 text-white"> 
                            Admin Dashboard 
                        </h3> 
                        <button 
                            onClick={this.adminLogout} 
                            style={{border: '2px solid yellow'}}
                            className="ml-auto btn text-white my-2"> 
                            Logout 
                        </button> 
                    </div> 
                </div> 
                <div className="container d-flex">
                    <div style={{width: '15%'}}>
                        Hello
                    </div>
                    <div style={{width: '85%'}}>
                        World
                    </div>
                </div>
            </div> 
        ) 
    } 
} 

export default withRouter(Dashboard) 


