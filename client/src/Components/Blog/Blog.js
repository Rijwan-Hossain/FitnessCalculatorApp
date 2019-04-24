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
                }, () => { 
                    console.log('First time');
                    console.log(this.state.reload);
                }) 
            } else { 
                this.setState({  
                    reload: false  
                }, () => { 
                    console.log('second time');
                    console.log(this.state.reload);
                })  
            }  
            if(cnt === 2) clearInterval(id) 
        }, 50)  
    } 

    
    render() { 
        return ( 
            <div className="container"> 
                <div className="d-flex"> 
                    <div 
                        style={{margin: '0px',padding: '0px'}} 
                        className="col-7">
                        <CreatePost refreshFun={this.postRefresher} />  
                    </div> 
                    <div 
                        style={{margin: '0px',padding: '0px'}} 
                        className="col-5">
                        <Search /> 
                    </div> 
                </div> 
                <div style={{margin: '0px',padding: '0px'}} className="col-7">
                    {
                        this.state.reload 
                        ? 
                        <ShowPost reload={this.state.reload} /> 
                        : 
                        <ShowPost /> 
                    }
                    
                </div> 

                <div style={{height: '50px'}}></div>
            </div> 
        ) 
    } 
} 

export default Blog 



