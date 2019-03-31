import React, { Component } from 'react'

class OnePost extends Component { 
    render() { 
        let post = this.props.post 
        let { author, authorAvatar, title, body, like, comments } = post
        
        return ( 
            <li 
                style={{ 
                    listStyle: 'none', 
                    background: 'rgb(240, 240, 242)', 
                    marginBottom: '15px', 
                    padding: '15px', 
                    borderRadius: '6px' 
                }}> 
                <div className="media">
                    {
                        authorAvatar 
                        ? 
                        <img 
                            src={authorAvatar} 
                            height="68px" 
                            width="68px" 
                            className="mr-2 rounded-circle" 
                            alt="Avatar"/> 
                        : 
                        <div style={{height: '68px', width: '68px', background: 'grey'}}></div>
                    } 
                    
                    <div className="media-body">
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
                            `${like} likes`
                            : 
                            `${like} like`
                        } 
                    </p> 
                    <p style={{
                            margin: '0px', padding: '0px'
                        }}> 
                        { 
                            comments.length > 1 
                            ? 
                            `${comments.length} comments`
                            : 
                            `${comments.length} comment`
                        } 
                    </p> 
                </div>
                <div className="d-flex justify-content-around"> 
                    <button 
                        style={{
                            margin: '5px', padding: '5px'
                        }}
                        className="btn btn-block btn-info">
                        Like
                    </button> 
                    <button 
                        style={{
                            margin: '5px', padding: '5px'
                        }}
                        className="ml-2 btn btn-block btn-info">
                        Comment
                    </button> 
                </div> 
            </li> 
        ) 
    } 
} 

export default OnePost 
