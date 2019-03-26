import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import axios from 'axios'
import './Form.css'
import jwtDecode from 'jwt-decode'
import {Modal, ModalBody, Button, ModalFooter } from 'react-bootstrap'


const initState = {
    email: '',
    password: '',
    user: {},
    isAuthenticated: false,
    serverError: false,
    errorMessage: '',
    successMessage: ''
} 

class Form extends Component {
    state = initState;

    errorHandler = (e) => { 
        e.preventDefault(); 
        this.setState({ 
            errorMessage: '' 
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
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:5000/api/users/login', user)
            .then(result => {
                if (Object.keys(result.data).length === 1) {
                    this.setState({
                        errorMessage: result.data.message
                    }) 
                } 
                else if (Object.keys(result.data).length === 2) {
                    localStorage.setItem('token', result.data.token)
                    let user = jwtDecode(result.data.token)
                    this.setState({ 
                        successMessage: result.data.message,
                        user: user 
                    }) 
                    
                    let { token } = result.data
                    if (token) {
                        axios.defaults.headers.common['Authorization'] = token
                    }
                    else {
                        axios.defaults.headers.common['Authorization'] = ''
                    }
                    
                    setTimeout(() => {
                        this.props.history.push('/profile');
                    }, 3000) 
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

                {
                    this.state.serverError && 
                    <Modal show={true}>
                        <ModalBody>
                            Server Error Occured 
                        </ModalBody> 

                        <ModalFooter>
                            <Button onClick={this.serverError}>
                                close
                            </Button> 
                        </ModalFooter>
                    </Modal> 
                } 

                { 
                    this.state.errorMessage && 
                    <Modal show={true}>
                        <ModalBody>
                            {this.state.errorMessage}
                        </ModalBody> 
                        <ModalFooter>
                            <Button onClick={this.errorHandler}>
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

                <p style={{
                    paddingTop: '20px'
                }}>
                    No Account, {' '}
                    <NavLink
                        id="reg"
                        to="/registration">
                        Create One
                    </NavLink>
                </p>
            </div>
        )
    }
}

export default withRouter(Form);