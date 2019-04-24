import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode' 
import axios from 'axios' 
import './profileStyle.css'
import { ToastContainer, toast } from 'react-toastify'

class Profile extends Component { 
    state = { 
        user: {} 
    } 

    componentDidMount() { 
        toast.success(`Welcome to your profile.`, { 
            position: toast.POSITION.BOTTOM_RIGHT
        }) 

        let token = localStorage.getItem('token').split(' ')[1] 
        let user = jwtDecode(token) 
        
        axios.get(`http://localhost:5000/api/users/register/${user.id}`) 
            .then(result => { 
                let { user } = result.data; 
                this.setState({ 
                    user 
                }) 
            }) 
            .catch(err => { 
                console.log('Server Error');
            }) 
    } 

    clickHandler = (e) => { 
        e.preventDefault(); 
        localStorage.removeItem('token'); 
        this.props.history.push('/login'); 
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
            mobile, 
            address, 
            ft, 
            inch,  
            avatar
        } = this.state.user 
            
        
        

        let profileName = ''; 
        if(name) { 
            profileName = name.split(' ')[0]; 
        } 

        return ( 
            <div className="container"> 
                <ToastContainer /> 
                <div className="d-flex my-3"> 
                    <h2 className="align-items-start col-8 text-center"
                        style={{zIndex: '-1'}}
                    > 
                        { profileName }'s  Profile 
                    </h2> 
                    <button 
                        type="submit"
                        style={{fontSize: '20px'}}
                        className="btn btn-secondary col-2 mx-3"
                        onClick={this.editHandler}
                    > 
                        Update Profile
                    </button>  
                    <button 
                        className="btn btn-danger align-items-end col-2" 
                        style={{fontSize: '20px', float: 'left'}}
                        onClick={this.clickHandler}> 
                        Logout 
                    </button> 
                </div> 

                {/* Profile */} 
                <div className="d-flex" style={{width: '100%'}}>
                    <div 
                        id="img" 
                        style={{borderRadius: '5px'}}
                        className="align-items-start"> 
                        { 
                            avatar 
                            ? 
                            <img 
                                style={{borderRadius: '5px'}} 
                                src={ avatar } 
                                alt="myImage"/> 
                            :
                            <h4 
                                style={{ 
                                    marginTop: '80px', 
                                    fontSize: '35px' 
                                }} 
                                className="text-center display-4"> 
                                Image Not Available 
                            </h4> 
                        } 
                    </div> 
                    <div style={{zIndex: '-1', width: '76%'}}> 
                        <h3 
                            style={{fontSize: '40px'}} 
                            className="display-4" 
                        > 
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
                                Gender: 
                            </p> 
                            <p>{ gender || 'Update Profile' }</p> 
                        </div> 

                        <div className="d-flex"> 
                            <p style={{width: '100px'}}> 
                                Height: 
                            </p> 
                            {
                                ft
                                ? 
                                <div> 
                                    <p> 
                                        {ft} feet {inch ? inch : '0'} inch
                                    </p> 
                                </div> 
                                : 
                                <p>Update Profile</p> 
                            } 
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