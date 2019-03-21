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
                    <h2 className="align-items-start col-8 text-center"> 
                        User Dashboard 
                    </h2> 
                    <button 
                        type="submit"
                        style={{fontSize: '22px'}}
                        className="btn btn-primary col-2 mx-3"
                        onClick={this.editHandler}
                        // style={{float: 'right'}}
                    > 
                        Update Profile
                    </button>  
                    <button
                        className="btn btn-danger align-items-end col-2" 
                        style={{fontSize: '22px', float: 'left'}}
                        onClick={this.clickHandler}> 
                        Logout 
                    </button> 
                </div> 

                {/* Profile */} 
                <div className="d-flex" style={{width: '100%'}}>
                    <div id="img" className="align-items-start">
                        <img 
                            src={ avatar || '#' } 
                            alt="Image" 
                        /> 
                    </div> 
                    <div className="" style={{zIndex: '-1', width: '76%'}}> 
                        <b>
                            <h3 
                                style={{fontSize: '40px'}}
                                className="display-4"
                            >
                                { name } 
                            </h3> 
                        </b>
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
                        <div style={{height: '30px'}}></div>
                    </div> 
                </div> 
            </div> 
            ) 
        } 
    } 

export default withRouter(Profile); 