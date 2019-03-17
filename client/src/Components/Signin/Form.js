import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

const initState = {
    email: '',
    password: ''
} 

class Form extends Component { 
    state = initState; 

    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value
        }) 
    } 

    submitHandler = (e) => {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password 
        } 
        
        console.log(user); 
        
        this.setState({
            ...initState
        })
    }

    render() {
        return (
            <div
                style={{
                    padding: '30px',
                    border: '1px solid rgb(238, 238, 238)',
                    boxShadow: '0px 2px 4px 0px rgb(226, 226, 226)'
                }}
            >
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control my-3"
                            placeholder="Enter Your Email"
                            value={this.state.email} 
                            onChange={this.changeHandler}
                        />
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control my-3"
                            placeholder="Enter Your password"
                            value={this.state.password} 
                            onChange={this.changeHandler}
                        />
                    </div> 
                    <button className="btn btn-primary"> 
                        Submit 
                    </button> 
                </form> 

                <p 
                    style={{
                        paddingTop: '20px'
                    }}
                >
                    No Account, {' '}
                    <NavLink to="/registration"> 
                        Create One 
                    </NavLink>
                </p>
            </div> 
        ) 
    } 
} 

export default Form;