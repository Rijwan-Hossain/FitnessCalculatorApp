import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { Modal, ModalBody, Button, ModalFooter } from 'react-bootstrap' 


class CreatePost extends Component { 
    state = { 
        author: '', 
        title: '', 
        body: '', 
        avatar: '', 
        success: '', 
        error: '' 
    } 

    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    submitHandler = (e) => { 
        e.preventDefault() 
        let post = { 
            author: this.state.author,
            title: this.state.title,
            body: this.state.body,
            authorAvatar: this.state.avatar,
        } 
        axios.post('http://localhost:5000/api/posts', post) 
            .then(result => { 
                this.setState({ 
                    success: result.data.message, 
                    title: '', 
                    body: ''
                }) 
            }) 
            .catch(err => { 
                this.setState({ 
                    error: 'Your problem is not submitted due to server error' 
                }) 
            }) 
    } 



    componentDidMount() { 
        try {
            let token = localStorage.getItem('token').split(' ')[1] 
            let user = jwtDecode(token) 
            axios.get(`http://localhost:5000/api/users/register/${user.id}`)
                .then(result => {
                    let { user } = result.data;
                    this.setState({ 
                        author: user.name, 
                        avatar: user.avatar 
                    }) 
                }) 
                .catch(err => { 
                    console.log('Server Error');
                }) 
        } catch (error) {} 
    } 



    closeSuccessModal = (e) => { 
        e.preventDefault(); 
        this.setState({ 
            success: '' 
        }) 
    } 


    render() { 
        return ( 
            <div> 
                { 
                    !this.state.author 
                    ? 
                    <p 
                        style={{ 
                            fontSize: '45px'
                        }}
                        className="display-4 text-danger my-1"> 
                        Signin to post your problem 
                    </p> 
                    : 
                    <div
                        className="mt-3"
                        style={{ 
                            background: 'rgb(240, 240, 242)', 
                            padding: '8px', 
                            borderRadius: '5px' 
                        }}> 
                        <h6>Create Post</h6>
                        <hr /> 
                        <div className="media"> 
                            {
                                this.state.avatar
                                ? 
                                <img 
                                    src={this.state.avatar} 
                                    height="80px" 
                                    width="80px" 
                                    className="rounded-circle" 
                                    style={{ 
                                        border: '3px solid rgb(218, 218, 218)'
                                    }} 
                                    alt="avatar"/> 
                                : 
                                <div style={{height:'70px', width: '70px', background: 'grey'}}></div>
                            } 
                            <div className="media-body ml-2">
                                <form onSubmit={this.submitHandler}> 
                                    <input 
                                        type="text" 
                                        name="title" 
                                        value={this.state.title} 
                                        className="form-control col-7 mb-2" 
                                        placeholder="Give a title e.g. Neck pain"
                                        onChange={this.changeHandler} 
                                        required 
                                    /> 
                                    
                                    <textarea 
                                        type="text" 
                                        name="body" 
                                        value={this.state.body} 
                                        className="form-control mb-2" 
                                        placeholder={`Write your problem, ${this.state.author.split(' ')[0]}?`} 
                                        onChange={this.changeHandler} 
                                        required 
                                        style={{ 
                                            height: '100px',
                                            resize: 'none'
                                        }} 
                                    /> 
        
                                    <button className="btn btn-dark"> 
                                        Submit 
                                    </button> 
                                    { 
                                        this.state.error && 
                                        <p 
                                            style={{ 
                                                color: 'red', 
                                                fontSize: '12px'
                                            }} 
                                        > 
                                            { this.state.error } 
                                        </p> 
                                    } 
                                </form> 
                                { 
                                    this.state.success && 
                                    <Modal show={true}> 
                                        <ModalBody> 
                                            { this.state.success } 
                                        </ModalBody> 

                                        <ModalFooter>
                                            <Button onClick={this.closeSuccessModal}>
                                                close 
                                            </Button> 
                                        </ModalFooter> 
                                    </Modal> 
                                } 
                            </div> 
                        </div> 
                    </div> 
                } 
            </div> 
        ) 
    } 
} 

export default withRouter(CreatePost) 
        
