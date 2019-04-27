import React, { Component } from 'react'
import OneList from './OneList';
import axios from 'axios' 

class ShowTutorials extends Component { 
    state = { 
        articles: [], 
        error: ''
    } 

    componentDidMount() { 
        axios.get('http://localhost:5000/api/tutorials') 
            .then(result => { 
                this.setState({ 
                    articles: result.data.result.reverse() 
                }) 
            }) 
            .catch(err => { 
                this.setState({ 
                    error: 'Server error or connection lost' 
                }) 
            }) 
    } 
    
    render() { 
        return ( 
            <div 
                className="mt-3"> 
                { 
                    this.state.articles.map((article, i) => { 
                        return ( 
                            <OneList 
                                article={article} 
                                key={i} 
                            /> 
                        ) 
                    }) 
                } 
            </div> 
        )
    }
}

export default ShowTutorials  