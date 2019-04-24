import React, { Component } from 'react'

const initState = { 
    terms: ''
} 

class Search extends Component { 
    state = initState 
    
    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    submitHandler = (e) => { 
        e.preventDefault() 
    } 

    render() { 
        return ( 
            <div style={{marginLeft: '10px'}}> 
                <form 
                    onSubmit={this.submitHandler} 
                    className="d-flex mt-3"> 
                    <input 
                        className="form-control mr-1" 
                        placeholder="Related Problem"
                        onChange={this.changeHandler} 
                        type="text"/> 
                    <button className="btn btn-primary"> 
                        Search 
                    </button> 
                </form> 
            </div> 
        ) 
    } 
} 

export default Search







