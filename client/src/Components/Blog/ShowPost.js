import React, { Component } from 'react'
import axios from 'axios' 
import OnePost from './OnePost';

class ShowPost extends Component { 
    state = { 
        posts: [] 
    } 

    componentDidMount() {
        axios.get('http://localhost:5000/api/posts') 
            .then(result => {
                this.setState({ 
                    posts: result.data.data.reverse() 
                }) 
            }) 
            .catch(err => { 
                console.log(err); 
            }) 
    } 

    clickHandler = () => {
        return ({
            border: 'blue', 
            background: 'white'
        }) 
    }

    render() { 
        return ( 
            <div onClick={this.clickHandler} className="mt-3"> 
                { 
                    this.state.posts.map((post, i) => { 
                        return ( 
                            <OnePost post={post} key={i}/> 
                        ) 
                    }) 
                } 
            </div> 
        ) 
    } 
} 

export default ShowPost