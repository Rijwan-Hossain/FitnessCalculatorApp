import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {Modal, ModalBody, Button, ModalFooter } from 'react-bootstrap'

const initState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {}, 
    duplicateMessage: '', 
    successMessage: '', 
    serverError: false 
}

class Form extends Component { 
    state = initState;

    userExist = (e) => { 
        e.preventDefault(); 
        this.setState({ 
            duplicateMessage: '' 
        }) 
    } 

    serverError = (e) => { 
        e.preventDefault(); 
        this.setState({ 
            serverError: false 
        }) 
    } 

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

        axios.post('http://localhost:5000/api/users/register', user) 
            .then(result => { 
                if(result.data.result) { 
                    this.setState({
                        errors: result.data.result
                    })
                } 
                else { 
                    if(result.data.message === 'You cannot signup by this email.') { 
                        this.setState({ 
                            duplicateMessage: result.data.message
                        }) 
                    } 
                    else { 
                        this.setState({ 
                            successMessage: result.data.message 
                        }) 

                        setTimeout(() => { 
                            this.props.history.push('/login') 
                        }, 3000) 
                    } 
                } 
            }) 
            .catch(err => { 
                this.setState({ 
                    serverError: true 
                }) 
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
                        { 
                            this.state.errors && this.state.errors.name && 
                            <p 
                                style={{
                                    fontSize: '12px', 
                                    color: 'red'
                                }}>
                                { this.state.errors.name }
                            </p>
                        } 
                        <input
                            type="email"
                            name="email"
                            className="form-control col-md-12 my-3"
                            placeholder="Enter Your Email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                            required
                        /> 
                        { 
                            this.state.errors && this.state.errors.email && 
                            <p 
                                style={{
                                    fontSize: '12px', 
                                    color: 'red'
                                }}>
                                { this.state.errors.email }
                            </p>
                        } 
                        <input
                            type="password"
                            name="password"
                            className="form-control col-md-12 my-3"
                            placeholder="Enter Your Password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                            required
                        /> 
                        { 
                            this.state.errors && this.state.errors.password && 
                            <p 
                                style={{
                                    fontSize: '12px', 
                                    color: 'red'
                                }}>
                                { this.state.errors.password }
                            </p>
                        } 
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control col-md-12 my-3"
                            placeholder="Confirm Password"
                            value={this.state.confirmPassword}
                            onChange={this.changeHandler}
                            required
                        /> 
                        { 
                            this.state.errors && this.state.errors.confirmPassword && 
                            <p 
                                style={{
                                    fontSize: '12px', 
                                    color: 'red'
                                }}>
                                { this.state.errors.confirmPassword }
                            </p>
                        } 
                    </div> 
                    <button 
                        type="Submit" 
                        className="btn btn-primary mb-3"> 
                        Submit 
                    </button> 
                </form> 
                
                {
                    this.state.duplicateMessage && 
                    <Modal show={true}>
                        <ModalBody>
                            { this.state.duplicateMessage }
                        </ModalBody> 

                        <ModalFooter>
                            <Button onClick={this.userExist}>
                                close
                            </Button> 
                        </ModalFooter>
                    </Modal> 
                } 

                {
                    this.state.successMessage && 
                    <Modal show={true}>
                        <ModalBody>
                            { this.state.successMessage }
                        </ModalBody> 
                    </Modal> 
                } 

                {
                    this.state.serverError && 
                    <Modal show={true}>
                        <ModalBody>
                            Server Error 
                        </ModalBody> 

                        <ModalFooter>
                            <Button onClick={this.serverError}>
                                close
                            </Button> 
                        </ModalFooter>
                    </Modal> 
                } 
            </div> 
        ) 
    } 
} 

export default withRouter(Form);