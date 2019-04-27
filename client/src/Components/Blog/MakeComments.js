import React, { Component } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

class MakeComments extends Component { 
    state = { 
        id: '',
        comments: [], 
        user: {}, 
        authenticated: false, 
        inputComment: '', 
        refresh: false 
    } 

    componentDidMount() { 
        if(this.props.comments) { 
            this.setState({ 
                comments: this.props.comments 
            }) 
        } 

        try {
            let token = localStorage.getItem('token').split(' ')[1] 
            if(token) { 
                let user = jwtDecode(token) 
                let { id } = user 
                
                if(user.email !== 'rijyan.cse.152@gmail.com') {
                    axios.get(`http://localhost:5000/api/users/register/${id}`) 
                        .then(result => { 
                            
                            this.setState({ 
                                id, 
                                authenticated: true, 
                                user: result.data.user 
                            }) 
                        }) 
                } 
                else {
                    axios.get('http://localhost:5000/api/admin/getadmin') 
                        .then(result => { 
                            
                            this.setState({ 
                                id, 
                                authenticated: true, 
                                user: result.data.admin 
                            }) 
                        }) 
                }
            } 
        } catch (error) {} 
    } 

    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    submitHandler = (e) => { 
        e.preventDefault() 
        let postId = this.props.postId 
        
        const obj = { 
            body: this.state.inputComment, 
            userId: this.state.id, 
            avatar: this.state.user.avatar, 
            userName: this.state.user.name 
        } 
        
        axios.post(`http://localhost:5000/api/posts/${postId}/comments`, obj) 
            .then(result => { 
                axios.get(`http://localhost:5000/api/posts/${postId}`)
                    .then(result => {
                        this.setState({
                            comments: result.data.post.comments 
                        })
                    }) 
            }) 
    } 

    render() { 
        let { comments, user } = this.state; 
        let Name; 

        if(Object.keys(user).length) {
            let { name } = this.state.user; 
            Name = name.split(' ')[0]; 
        } 

        return ( 
            <div style={{marginTop: '20px'}}> 
                {/* Input Comment */} 
                {
                    this.state.authenticated ?
                    <div
                        style={{
                            margin: '10px 0px', 
                            padding: '10px',
                            borderRadius: '5px'
                        }} 
                        className="bg-white mb-3"
                    > 
                        <div
                            style={{
                                margin: '10px 0px', 
                                padding: '10px',
                                borderRadius: '5px'
                            }} 
                            className="d-flex"> 
                            <h5 className="mt-1 text-info" style={{width: '100px'}}> 
                                { Name }
                            </h5> 
                            <textarea 
                                type="text" 
                                name="inputComment" 
                                value={this.state.inputComment} 
                                onChange={this.changeHandler}
                                className="form-control" 
                                placeholder="Write Solution" 
                                style={{resize: 'none'}} 
                            /> 
                        </div>
                        <button 
                            className="btn btn-success" 
                            onClick={this.submitHandler}>
                            Submit
                        </button>
                    </div>
                    :
                    <h5 className="text-danger text-center" style={{lineHeight: '60px'}}>
                        Signin to write comment.
                    </h5>
                }
                {/* Show Comment */} 
                <div> 
                    { 
                        comments.map((comment, i) => { 
                            return ( 
                                <li 
                                    key={i}
                                    style={{
                                        padding: '15px', 
                                        marginBottom: '20px', 
                                        borderRadius: '5px'
                                    }} 
                                    className="bg-white"> 
                                    <div className="d-flex"> 
                                        <div style={{width: '60px'}}> 
                                        { 
                                            comment.avatar ? 
                                            <img 
                                                src={comment.avatar} 
                                                style={{
                                                    borderRadius: '50%'
                                                }}
                                                width="60px" 
                                                alt="img" 
                                            /> 
                                            : 
                                            <div 
                                                className="bg-dark text-white"
                                                style={{
                                                    width: '60px', 
                                                    height: '60px',
                                                    borderRadius: '50%'
                                                }}>
                                                    <h5 style={{
                                                        textAlign: 'center',
                                                        lineHeight: '60px'
                                                    }}>
                                                        N.A
                                                    </h5>
                                            </div> 
                                        }
                                            
                                        </div>
                                        <div>
                                            <h5 
                                                style={{
                                                    lineHeight: '50px', 
                                                    marginLeft: '10px'
                                                }}>
                                                {comment.userName}
                                            </h5> 
                                            <p style={{marginLeft: '10px'}}> 
                                                {comment.body}
                                            </p> 
                                        </div> 
                                    </div> 
                                </li> 
                            ) 
                        }) 
                    } 
                </div> 
            </div> 
        ) 
    } 
} 

export default MakeComments