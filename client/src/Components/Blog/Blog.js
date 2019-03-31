import React, { Component } from 'react' 

import CreatePost from './CreatePost'
import Search from './Search';

class Blog extends Component { 
    render() { 
        return ( 
            <div className="container"> 
                <div className="d-flex">
                    <div 
                        style={{margin: '0px',padding: '0px'}} 
                        className="col-7">
                        <CreatePost />  
                    </div>
                    <div
                        style={{margin: '0px',padding: '0px'}} 
                        className="col-5">
                        <Search /> 
                    </div> 
                </div> 
            </div> 
        ) 
    } 
} 

export default Blog 



