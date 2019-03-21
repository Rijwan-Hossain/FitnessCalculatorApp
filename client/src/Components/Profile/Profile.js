import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode' 
import axios from 'axios' 
import './profileStyle.css'

class Profile extends Component { 

    state = { 
        user: {} 
    } 

    componentDidMount() { 
        let token = localStorage.getItem('token').split(' ')[1] 
        let user = jwtDecode(token) 
        
        axios.get(`http://localhost:5000/api/users/singleuser/${user.id}`) 
            .then(result => { 
                let { user } = result.data;
                this.setState({
                    user 
                }) 
                console.log(this.state.user);
                
            }) 
            .catch(err => {
                console.log('Server Error');
            }) 
    } 

    clickHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    } 

    editHandler = (e) => {
        e.preventDefault(); 
        this.props.history.push('/editprofile');
    }

    render() { 
        let { 
            name, 
            email, 
            gender, 
            weight, 
            height, 
            mobile, 
            address, 
            avatar, 
            birthDate 
        } = this.state.user; 

        return ( 
            <div className="container"> 
                <div className="d-flex my-3"> 
                    <h2 className="align-items-start col-10 text-center"> 
                        User Dashboard 
                    </h2> 
                    
                    <button
                        className="btn btn-danger align-items-end col-2" 
                        style={{fontSize: '25px', float: 'left'}}
                        onClick={this.clickHandler}> 
                        Logout 
                    </button> 
                </div> 

                {/* Profile */} 
                <div className="d-flex">
                    <div id="img" className="align-items-start col-2">
                        <img 
                            src={ avatar || '#' } 
                            alt="Image" 
                        /> 
                    </div> 
                    <div className="col-10" style={{zIndex: '-1'}}> 
                        <h3>
                            { name } 
                        </h3> 
                        <p style={{color: 'rgb(99, 168, 248)'}}>
                            { email }
                        </p> 
                        <hr/> 

                        <h6 className="mt-4 mb-3"
                            style={{
                                color: 'rgb(156, 156, 156)'
                            }}> 
                            BASIC INFORMATION 
                        </h6> 
                        <div className="d-flex mt-3">
                            <p style={{width: '100px'}}>
                                Name:
                            </p>
                            <p>{ name }</p> 
                        </div> 

                        <div className="d-flex"> 
                            <p style={{width: '100px'}}>
                                Birth Date:
                            </p>
                            <p>{ birthDate || 'Update Profile' }</p> 
                        </div> 

                        <div className="d-flex"> 
                            <p style={{width: '100px'}}>
                                Gender:
                            </p>
                            <p>{ gender || 'Update Profile' }</p> 
                        </div>

                        <div className="d-flex"> 
                            <p style={{width: '100px'}}>
                                Height:
                            </p>
                            <p>{ height || 'Update Profile' }</p> 
                        </div> 

                        <div className="d-flex"> 
                            <p style={{width: '100px'}}>
                                weight:
                            </p>
                            <p>{ weight || 'Update Profile' }</p> 
                        </div>

                        {/*  */}

                        <h6 className="mt-5 mb-3"
                            style={{
                                color: 'rgb(156, 156, 156)'
                            }}> 
                            QUICK CONTACT  
                        </h6> 

                        <div className="d-flex">
                            <p style={{width: '100px'}}>
                                Email:
                            </p>
                            <p>{ email || 'Update Profile' }</p> 
                        </div> 


                        <div className="d-flex">
                            <p style={{width: '100px'}}>
                                Phone:
                            </p>
                            <p>{ mobile || 'Update Profile' }</p> 
                        </div> 


                        <div className="d-flex">
                            <p style={{width: '100px'}}>
                                Address:
                            </p>
                            <p>{ address || 'Update Profile' }</p> 
                        </div> 

                        <button 
                            onClick={this.editHandler}
                            className="btn btn-primary"
                            style={{float: 'right'}}
                        > 
                            Update Profile
                        </button> 

                        <div style={{height: '80px'}}></div>
                    </div> 
                </div> 
            </div> 
            ) 
        } 
    } 

export default withRouter(Profile); 