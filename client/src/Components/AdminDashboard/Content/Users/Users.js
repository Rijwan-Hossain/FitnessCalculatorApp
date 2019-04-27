import React, { Component } from 'react'
import axios from 'axios'
import OneUser from './OneUser'

class Users extends Component { 
    state = { 
        users: [], 
        error: '', 
        refresh: false 
    } 

    pageRefreser = () => { 
        setTimeout( () => {
            axios.get('http://localhost:5000/api/users/alluser') 
            .then(result => { 
                this.setState({ 
                    users: result.data.users.reverse() 
                }) 
            }) 
            .catch(err => { 
                this.setState({ 
                    error: 'Connection Lost' 
                }) 
            }) 
        }, 100) 
    } 

    componentDidMount() { 
        axios.get('http://localhost:5000/api/users/alluser') 
            .then(result => { 
                this.setState({ 
                    users: result.data.users.reverse() 
                }) 
            }) 
            .catch(err => { 
                this.setState({ 
                    error: 'Connection Lost' 
                }) 
            }) 
    } 

    render() { 
        let usersLength = this.state.users.length 
        let { users } = this.state 

        return ( 
            <div> 
                <div className="d-flex mb-3"> 
                    <p 
                        style={{ 
                            fontSize: '30px', 
                            textAlign: 'center', 
                            width: '98%', 
                            margin: '0px', 
                            padding: '0px', 
                            color: 'rgb(190, 27, 27)'
                        }}> 
                        All Users {' '}
                        <span className="text-dark">
                            ({usersLength > 9 ? usersLength : `0${usersLength}`})
                        </span>
                    </p> 
                </div> 

                <div style={{
                    background: '#E74C3F', 
                    borderRadius: '5px', 
                    marginBottom: '10px'
                }} className="d-flex">
                    <p style={{
                        width: '20%',
                        lineHeight: '50px', 
                        margin: '0px', 
                        padding: '0px', 
                        color: 'white', 
                        fontSize: '20px', 
                        paddingLeft: '15px'
                    }}>Name</p> 

                    <p style={{
                        width: '30%',
                        lineHeight: '50px', 
                        margin: '0px', 
                        padding: '0px', 
                        color: 'white', 
                        fontSize: '20px', 
                        paddingLeft: '8px'
                    }}>Email</p> 

                    <p style={{
                        width: '15%',
                        lineHeight: '50px', 
                        margin: '0px', 
                        padding: '0px', 
                        color: 'white', 
                        fontSize: '20px', 
                        marginLeft: 'auto'
                    }}>See more</p> 

                    <p style={{
                        width: '15%',
                        lineHeight: '50px', 
                        margin: '0px', 
                        padding: '0px', 
                        color: 'white', 
                        fontSize: '20px'
                    }}>Suspend</p>
                </div> 

                <div>
                    {
                        users.map((user, i) => {
                            return (
                                <OneUser 
                                    user={user} 
                                    i={i} 
                                    refreshPage={this.pageRefreser}
                                /> 
                            )
                        }) 
                    }
                </div>
            </div>  
        ) 
    } 
} 

export default Users; 

