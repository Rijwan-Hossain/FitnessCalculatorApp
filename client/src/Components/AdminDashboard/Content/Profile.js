import React, { Component } from 'react'
import './profile.css'
import axios from 'axios' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickContact from './QuickContact'

class Profile extends Component { 
    state = { 
        admin: {} 
    } 
    
    componentDidMount() { 
        toast.success(`Welcome to dashboard`, { 
            position: toast.POSITION.BOTTOM_RIGHT
        }) 

        axios.get(`http://localhost:5000/api/admin/getadmin`) 
            .then(result => { 
                let { admin } = result.data; 
                this.setState({ 
                    admin 
                }) 
                console.log(admin);
                
            }) 
            .catch(err => { 
                console.log('Server Error'); 
            }) 
    } 

    

    render() { 
        let { 
            name, email, gender, mobile, address, 
            weight, ft, inch, avatar 
        } = this.state.admin 

        return ( 
            <div> 
                <ToastContainer /> 
                <div className="d-flex mt-2" style={{width: '100%'}}> 
                    <div 
                        id="img" 
                        style={{borderRadius: '5px', height: '200px'}}
                        className="align-items-start">
                        { 
                            avatar 
                            ? 
                            <img 
                                style={{borderRadius: '5px'}}
                                width='200px' 
                                src={ avatar } 
                                alt="myImage"/>
                            :
                            <h4 
                                style={{ 
                                    marginTop: '55px', 
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
                        <p className="text-success">
                            { email }
                        </p> 
                        <hr/> 

                        <h6 className="mt-4 mb-3" style={{color: 'steelblue'}}> 
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



                        {/* Quick Contact */} 

                        <h6 className="mt-5 mb-3"style={{color: 'steelblue'}}> 
                            QUICK CONTACT  
                        </h6> 
                        <QuickContact 
                            email={email} 
                            address={address} 
                            mobile={mobile} 
                        /> 

                        <div style={{height: '65px'}}></div> 
                        
                    </div> 
                </div> 
            </div> 
        ) 
    } 
} 

export default Profile; 