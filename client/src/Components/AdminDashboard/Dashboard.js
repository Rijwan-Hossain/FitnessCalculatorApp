import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Profile from './Content/Profile'
import Users from './Content/Users/Users'
import UpdateProfile from './Content/UpdateProfile'
import Tutorials from './Content/Tutorials'


class Dashboard extends Component { 
    state = { 
        page: '1'
    } 

    toPage = (p) => {
        this.setState({
            page: p
        })
    } 

    adminLogout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/login');
    } 


    render() {
        let { page } = this.state
        return (
            <div>
                <div style={{ height: '55px', background: '#1B455C' }}>
                    <div className="d-flex container">
                        <h3
                            className="my-2 text-white">
                            Dashboard
                        </h3>
                        <button
                            onClick={this.adminLogout}
                            style={{ border: '1px solid yellow' }}
                            className="ml-auto btn text-white my-2">
                            Logout
                        </button>
                    </div>
                </div>
                <div style={{ height: 'calc(100vh + 100px)' }}
                    className="container d-flex">
                    <div
                        className="text-white"
                        style={{
                            width: '15%',
                            marginRight: '10px', paddingLeft: '10px', 
                            background: '#215D90'
                        }}>
                        <p
                            onClick={() => this.toPage('1')}
                            style={{
                                // color: 'black', 
                                fontSize: '22px',
                                cursor: 'pointer'
                            }}>
                            Profile
                        </p>

                        <p
                            onClick={() => this.toPage('2')}
                            style={{
                                // color: 'black', 
                                fontSize: '22px',
                                cursor: 'pointer'
                            }}>
                            Users
                        </p>

                        

                        <p
                            onClick={() => this.toPage('3')}
                            style={{
                                // color: 'black', 
                                fontSize: '22px',
                                cursor: 'pointer'
                            }}>
                            Tutorials
                        </p>

                        <p
                            onClick={() => this.toPage('4')}
                            style={{
                                // color: 'black', 
                                fontSize: '22px',
                                cursor: 'pointer'
                            }}>
                            Update Profile
                        </p>
                    </div>

                    <div style={{ width: '85%' }}>
                        {
                            page === '1' &&
                            <Profile /> 
                        }
                        {
                            page === '2' &&
                            <Users /> 
                        }
                        {
                            page === '3' &&
                            <Tutorials /> 
                        }
                        {
                            page === '4' &&
                            <UpdateProfile /> 
                        }
                    </div>
                </div> 
                
            </div>
        )
    } 
} 

export default withRouter(Dashboard)


