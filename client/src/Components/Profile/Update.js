import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { withRouter } from 'react-router-dom' 
import './UpdtPrfl.css'

let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/rijwan/upload' 
let CLOUDINARY_UPLOAD_PRESET = 'dwow7fpd'

class Update extends Component {

    state = { 
        name: '',
        avatar: '',
        gender: '',
        weight: '',
        address: '',
        mobile: '',
        ft: '', 
        inch: '', 
        saveMsg: false
    }

    componentDidMount() {
        let token = localStorage.getItem('token').split(' ')[1]
        let user = jwtDecode(token)

        axios.get(`http://localhost:5000/api/users/register/${user.id}`)
            .then(result => { 
                let { user } = result.data;
                this.setState({ 
                    name: user.name,
                    avatar: user.avatar,
                    mobile: user.mobile,
                    gender: user.gender,
                    ft: user.ft,
                    inch: user.inch,
                    weight: user.weight,
                    address: user.address
                })
            })
            .catch(err => {
                console.log('Server Error in component did mount');
            })
    }

    changeHandler = (e) => { 
        
        if(e.target.name) { 
            this.setState({ 
                [e.target.name]: e.target.value
            }) 
        }  
        else { 
            let file = e.target.files[0] 

            let formData = new FormData() 
            formData.append('file', file) 
            formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

            axios({ 
                url: CLOUDINARY_URL, 
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded'
                }, 
                data: formData 
            }) 
                .then(res => { 
                    console.log(res); 
                    let url = res.data.secure_url 
                    
                    this.setState({ 
                        ...this.state, 
                        avatar: url, 
                        saveMsg: true 
                    }) 
                }) 
                .catch(err => { 
                    console.log('err');
                    console.log(err);
                    this.setState({
                        ...this.state, 
                        saveMsg: 'Error'
                    }) 
                }) 
        } 
    } 

    submitHandler = (e) => {
        e.preventDefault();

        let updatedValue = this.state

        let token = localStorage.getItem('token').split(' ')[1]
        let user = jwtDecode(token)

        axios.patch(`http://localhost:5000/api/users/register/${user.id}`, updatedValue)
            .then(result => { 
                let { token } = result.data
                if (token) { 
                    axios.defaults.headers.common['Authorization'] = token
                } 
                else { 
                    axios.defaults.headers.common['Authorization'] = ''
                } 

                setTimeout(() => { 
                    this.props.history.push('/profile'); 
                }, 1000) 
            }) 
            .catch(err => { 
                console.log('Server Error while updating user') 
            })  
    } 

    render() { 
        let { 
            name, avatar, mobile, 
            ft, inch, weight, address 
        } = this.state;

        return ( 
            <div className="container mt-4">
                <form onSubmit={this.submitHandler} style={{ width: '100%' }}>
                    <div style={{ float: 'left', marginRight: '40px' }}>
                        <div style={{
                            width: '150px',
                            background: 'rgb(200, 200, 200)', 
                            borderRadius: '5px'
                        }}> 
                            {
                                avatar 
                                ? 
                                <img 
                                    width='150px'
                                    src={avatar} 
                                    alt="myImage" 
                                    style={{borderRadius: '5px'}} 
                                /> 
                                : 
                                <div>  
                                    <p  
                                        style={{  
                                            paddingTop: '35px',  
                                            paddingBottom: '35px',  
                                            textAlign: 'center',  
                                            fontSize: '30px'
                                        }} 
                                        className="display-4" 
                                    > 
                                        Not Available 
                                    </p> 
                                </div> 
                            } 
                            
                        </div> 
                        <label id="lbl"> 
                            Upload Image 
                            <input 
                                onChange={this.changeHandler} 
                                style={{display: 'none'}} 
                                id="File" 
                                size="60" 
                                type="file"/> 
                        </label> 
                        { 
                            this.state.saveMsg === true && 
                            <p style={{ 
                                width: '150px',
                                color: 'rgb(211, 104, 104)'
                            }}>
                                Click the save button to save your image
                            </p>
                        } 

                        { 
                            this.state.saveMsg === 'Error' && 
                            <p>Error Occured</p>
                        } 
                    </div> 
                    
                    <div style={{ float: 'left', width: '320px' }}>
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



                            {/* Mobile Number */}
                            <label className="mt-4">Mobile Number</label>
                            <input
                                type="text"
                                name="mobile"
                                className="form-control"
                                placeholder="Enter Your Mobile number"
                                value={mobile}
                                onChange={this.changeHandler}
                            />


                            {/* Height */}
                            <label className="mt-4">Height</label> <br/> 
                            <div className='d-flex'>
                                <p style={{ 
                                    fontSize: '18px', 
                                    width: '40px', 
                                    marginTop: '5px'
                                }}>
                                    feet
                                </p>
                                <input 
                                    style={{width: '55px'}}
                                    type="text" 
                                    name="ft" 
                                    className="form-control text-center" 
                                    value={ ft } 
                                    onChange={this.changeHandler} 
                                /> 


                                <p style={{ 
                                    fontSize: '18px', 
                                    width: '40px', 
                                    marginTop: '5px',
                                    marginLeft: '30px'
                                }}>
                                    inch
                                </p> 
                                <input 
                                    style={{width: '55px'}}
                                    type="text" 
                                    name="inch" 
                                    className="form-control text-center" 
                                    value={ inch } 
                                    onChange={this.changeHandler} 
                                /> 
                            </div>



                            {/* Weight */}
                            <label className="mt-4">Weight</label>
                            <input
                                type="text"
                                name="weight"
                                className="form-control"
                                placeholder="Enter Your weight"
                                value={weight}
                                onChange={this.changeHandler}
                            /> 


                            {/* Gender */}
                            <label className="mt-4">Gender</label>
                            <br /> 
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                className="my-1 mx-2"
                                onChange={this.changeHandler}
                            /> 
                            Male 
                            <input 
                                type="radio"
                                name="gender"
                                value="Female"
                                className="my-1 mx-2"
                                onChange={this.changeHandler}
                            /> 
                            Female 
                            <br /> 
                            {/* Gender End */}


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
            </div>
        )
    }
}

export default withRouter(Update) 


