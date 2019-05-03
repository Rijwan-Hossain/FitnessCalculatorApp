import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import MakeComments from './MakeComments'

class OnePost extends Component { 
    state = { 
        showMsg: false,
        showCmnt: false, 
        buttonValue: 'Comments' 
    } 
    
    
    likeHandler = () => { 
        try { 
            let token = localStorage.getItem('token').split(' ')[1] 
            let user = jwtDecode(token) 
            
            if(user.email) { 
                let postId  = this.props.post._id 
                axios.get(`http://localhost:5000/api/posts/${postId}/like`) 
            } 
        } 
        catch (error) { 
            this.notAuthenticted() 
        } 
    } 

    notAuthenticted = () => {
        this.setState({ 
            showMsg: true 
        }) 

        setTimeout(() => {
            this.setState({ 
                showMsg: false 
            }) 
        }, 2500)
    }


    commentHandler = () => { 
        this.setState({ 
            showCmnt: !this.state.showCmnt, 
            buttonValue: this.state.showCmnt ?  'Comments' : 'Hide Comments'  
        }) 
    } 

    render() { 
        let { author, avatar, title, body, like, comments, _id } = this.props.post
        
        return ( 
            <li 
                style={{ 
                    listStyle: 'none', 
                    background: 'rgb(240 240 240)', 
                    marginBottom: '15px', 
                    padding: '15px', 
                    borderRadius: '6px' 
                }}> 
                <div className="media"> 
                    {
                        avatar 
                        ? 
                        <img 
                            src={avatar} 
                            width="68px" 
                            style={{maxHeight: '80px'}}
                            className="mr-2 rounded-circle" 
                            alt="Avatar"/> 
                        : 
                        <div style={{height: '68px', width: '68px', background: 'grey'}}></div>
                    } 
                    
                    <div className="media-body ml-2">
                        <p 
                            className="text-dark" 
                            style={{fontSize: '22px', margin: '0px', padding: '0px'}}> 
                            {author} 
                        </p> 
                        <p 
                            className="text-danger"
                            style={{
                                fontSize: '18px', 
                                marginBottom: '5px', 
                                paddingBottom: '5px'}}> 
                            Problem: {title} 
                        </p>  
                        <p style={{textAlign: 'justify'}}> 
                            {body} 
                        </p>  
                    </div> 
                </div> 
                <hr/> 
                <div className="d-flex justify-content-around">
                    <p style={{margin: '0px', padding: '0px'}}> 
                        { 
                            like > 1 
                            ? 
                            `${like} Likes`
                            : 
                            `${like} Like`
                        } 
                    </p> 
                    <p style={{
                            margin: '0px', padding: '0px'
                        }}> 
                        { 
                            comments.length > 1 
                            ? 
                            `${comments.length} Comments`
                            : 
                            `${comments.length} Comment`
                        } 
                    </p> 
                </div>
                <div className="d-flex justify-content-around"> 
                    <button 
                        onClick={() => { 
                            this.likeHandler(); 
                            this.props.refreshFun() 
                        }} 
                        style={{margin: '5px', padding: '5px'}}
                        className="btn btn-block btn-info">
                        Like 
                    </button> 
                    <button 
                        style={{margin: '5px', padding: '5px'}} 
                        onClick={this.commentHandler}
                        className="ml-2 btn btn-block btn-info">
                        { this.state.buttonValue }
                    </button> 
                </div> 
                <div> 
                    { 
                        this.state.showMsg && 
                        <p 
                            style={{fontSize: '14px', paddingBottom: '0px', marginBottom: '0px'}} 
                            className="text-center text-danger"> 
                            Signin to like or comment
                        </p> 
                    } 
                </div> 
                <div>
                    {
                        this.state.showCmnt && 
                        <MakeComments postId={_id} comments={comments} />  
                    }
                </div> 
            
            </li> 
        ) 
    } 
} 

export default OnePost 








 
        






