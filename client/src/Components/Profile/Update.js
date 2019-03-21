import React, { Component } from 'react'
import jwtDecode  from 'jwt-decode' 
import axios from 'axios' 

class Update extends Component { 
    
    state = { 
        name: '', 
        avatar: '',  
        gender: '', 
        weight: '', 
        address: '', 
        birthDate: null,
        mobile: '',
        height: ''
    } 

    componentDidMount() { 
        console.log(this.state);
        
        let token = localStorage.getItem('token').split(' ')[1] 
        let user = jwtDecode(token) 
        
        axios.get(`http://localhost:5000/api/users/singleuser/${user.id}`) 
            .then(result => { 
                let { user } = result.data; 
                
                this.setState({ 
                    name: user.name, 
                    avatar: user.avatar, 
                    mobile: user.mobile, 
                    gender: user.gender, 
                    height: user.height, 
                    weight: user.weight, 
                    address: user.address, 
                    birthDate: user.birthDate 
                }) 
            }) 
            .catch(err => { 
                console.log('Server Error');
            }) 
    }

    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    render() { 
        

        let {
            name, avatar, mobile, gender, 
            height, weight,  address, birthDate 
        } = this.state; 

        return ( 
            <div className="container mt-4"> 
                <form onSubmit={this.submitHandler} style={{width: '100%'}}>
                    <div style={{float: 'left', marginRight: '40px'}}>
                        <div style={{ 
                                height: '150px', 
                                width: '150px', 
                                background: 'rgb(200, 200, 200)' 
                            }}>
                            <img 
                                src={ avatar } 
                                alt="Image" 
                            />
                        </div> 
                        <button 
                            className="btn btn-success mt-1"
                            style={{width: '150px'}}
                        > Update Image
                        </button> 
                    </div>

                    <div style={{float: 'left', width: '320px'}}>
                        <div className="form-group"> 
                            <label>Name</label>
                            <input 
                                type="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter Your Name" 
                                value={name} 
                                onChange={this.changeHandler}
                            /> 
                            
                            
                            <label className="mt-4">Mobile Number</label>
                            <input 
                                type="text" 
                                name="mobile" 
                                className="form-control"
                                placeholder="Enter Your Mobile number" 
                                value={mobile} 
                                onChange={this.changeHandler}
                            /> 
                            
                            <label className="mt-4">Height</label>
                            <input 
                                type="text" 
                                name="height" 
                                className="form-control"
                                placeholder="Enter Your height" 
                                value={height} 
                                onChange={this.changeHandler}
                            /> 
                            
                            <label className="mt-4">Weight</label>
                            <input 
                                type="text" 
                                name="weight" 
                                className="form-control"
                                placeholder="Enter Your weight" 
                                value={weight} 
                                onChange={this.changeHandler}
                            /> 
                            
                            <label className="mt-4">Gender</label>
                            <input 
                                type="text" 
                                name="gender" 
                                className="form-control"
                                placeholder="Enter Your gender" 
                                value={gender} 
                                onChange={this.changeHandler}
                            /> 
                            
                            <label className="mt-4">Birth Date</label>
                            <input 
                                type="text" 
                                name="birthDate" 
                                className="form-control"
                                placeholder="Enter Your birth date" 
                                value={birthDate} 
                                onChange={this.changeHandler}
                            /> 
                            
                            <label className="mt-4">Address</label>
                            <input 
                                type="text" 
                                name="address" 
                                className="form-control"
                                placeholder="Enter Your address" 
                                value={address} 
                                onChange={this.changeHandler}
                            /> 
                        </div> 
    
                        <button className="btn btn-primary"> 
                            Save 
                        </button> 
                    </div>
                </form> 
                <div style={{width: '30px'}}></div>
            </div> 
        ) 
    } 
} 

export default Update