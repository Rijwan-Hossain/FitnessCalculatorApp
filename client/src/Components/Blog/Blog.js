import React, { Component } from 'react' 

import CreatePost from './CreatePost'
import Search from './Search';
import ShowPost from './ShowPost';

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
                <div style={{margin: '0px',padding: '0px'}} className="col-7">
                    <ShowPost /> 
                </div> 

                <div style={{height: '50px'}}></div>
            </div> 
        ) 
    } 
} 

export default Blog 



