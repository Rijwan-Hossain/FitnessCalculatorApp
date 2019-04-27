import React, { Component } from 'react' 

import CreatePost from './CreatePost'
import Search from './Search';
import ShowPost from './ShowPost';

class Blog extends Component { 
    state = {
        reload: false 
    } 

    postRefresher = () => { 
        let cnt = 0; 
        let id = setInterval(() => { 
            cnt++; 
            if(cnt === 1) { 
                this.setState({ 
                    reload: true 
                }) 
            } else { 
                this.setState({  
                    reload: false  
                })  
            }  
            if(cnt === 2) clearInterval(id) 
        }, 50)  
    } 

    
    render() { 
        return ( 
            <div className="container"> 
                <div className="d-flex"> 
                    <div style={{width: '60%'}}>
                        <div style={{margin: '0px',padding: '0px'}}>
                            <CreatePost refreshFun={this.postRefresher} />  
                        </div> 
                        <div style={{ 
                            margin: '0px', 
                            padding: '0px', 
                            overflow: 'hidden'
                        }}>
                            {
                                this.state.reload 
                                ? 
                                <ShowPost reload={this.state.reload} /> 
                                : 
                                <ShowPost /> 
                            }
                        </div> 
                    </div>
                    <div 
                        style={{margin: '0px',padding: '0px', width: '40%'}} 
                        className="col-5">
                        <Search /> 
                    </div>  
                </div> 
                
                <div style={{height: '50px'}}></div>
            </div> 
        ) 
    } 
} 

export default Blog 

                    

