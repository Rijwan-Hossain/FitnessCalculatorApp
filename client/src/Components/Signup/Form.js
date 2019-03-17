import React, { Component } from 'react'

const initState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: {}
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }
        // user;
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
                            type="name"
                            name="name"
                            className="form-control col-md-12 my-3"
                            placeholder="Enter Your Name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-control col-md-12 my-3"
                            placeholder="Enter Your Email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            className="form-control col-md-12 my-3"
                            placeholder="Enter Your Password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control col-md-12 my-3"
                            placeholder="Confirm Password"
                            value={this.state.confirmPassword}
                            onChange={this.changeHandler}
                            required
                        />
                    </div> 
                    <button className="btn btn-primary"> 
                        Submit 
                    </button> 
                </form> 
            </div> 
        ) 
    } 
} 

export default Form;