import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { Modal, ModalBody } from 'react-bootstrap' 


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
            avatar: this.state.avatar,
        } 
        console.log(post);
        
        axios.post('http://localhost:5000/api/posts', post) 
            .then(result => { 
                this.setState({ 
                    success: result.data.message, 
                    title: '', 
                    body: '' 
                }) 

                setTimeout(() => {
                    this.setState({ 
                        success: '', 
                    }) 
                },1500)
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

            if(user.email === 'rijyan.cse.152@gmail.com') {
                axios.get('http://localhost:5000/api/admin/getadmin') 
                    .then(result => {
                        this.setState({ 
                            author: result.data.admin.name, 
                            avatar: result.data.admin.avatar 
                        })  
                    }) 
                    .catch(err => { 
                        console.log('Error');
                    }) 
            } 
            else { 
                axios.get(`http://localhost:5000/api/users/register/${user.id}`)
                    .then(result => { 
                        let { user } = result.data 
                        this.setState({ 
                            author: user.name, 
                            avatar: user.avatar 
                        }) 
                    }) 
                    .catch(err => { 
                        console.log('Server Error or connection lost') 
                    }) 
            } 
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
                            fontSize: '40px'
                        }}
                        className="display-4 text-danger my-1"> 
                        Signin to write about your problem 
                    </p> 
                    : 
                    <div
                        className="mt-3"
                        style={{ 
                            background: 'rgb(200, 240, 242)', 
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
                                    // height="80px" 
                                    width="80px" 
                                    className="rounded-circle" 
                                    style={{ 
                                        border: '3px solid rgb(150, 150, 255)'
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
        
                                    <button 
                                        onClick={this.props.refreshFun} 
                                        className="btn btn-dark"> 
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
                                    <Modal 
                                        centered
                                        show={true}> 
                                        <ModalBody> 
                                            { this.state.success } 
                                        </ModalBody> 
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
        
