import React, { Component } from 'react'
import axios from 'axios' 

const initState = { 
    terms: '', 
    noFoundMsg: '', 
    data: []
} 

class Search extends Component { 
    state = initState 
    
    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    submitHandler = (e) => { 
        let search = { 
            terms: this.state.terms 
        } 
        e.preventDefault() 
        axios.post('http://localhost:5000/api/posts/search', search) 
            .then((result) => { 
                if(Object.keys(result.data).length === 1) { 
                    this.setState({ 
                        message: result.data.message, 
                    }) 
                } else { 
                    this.setState({ 
                        data: result.data.result 
                    }) 
                } 
            }) 
    } 

    

    render() { 
        let { data, message } = this.state 
        return ( 
            <div style={{marginLeft: '10px'}}> 
                <form 
                    onSubmit={this.submitHandler} 
                    className="d-flex mt-3"> 
                    <input 
                        type="text"
                        name="terms"
                        value={this.state.terms}
                        className="form-control mr-1" 
                        placeholder="Related Problem"
                        onChange={this.changeHandler} 
                    /> 

                    <button className="btn btn-primary"> 
                        Search 
                    </button> 
                </form> 

                <div style={{marginTop: '20px'}}>
                    {
                        data.length ?
                        data.map(d => {
                            return (
                                <li style={{
                                    listStyle: 'none', 
                                    background: 'rgb(240 240 240)', 
                                    borderRadius: '5px', 
                                    padding: '10px', 
                                    marginTop: '20px'
                                }}>
                                    <div className="media-body ml-2">
                                        <p 
                                            className="text-dark" 
                                            style={{fontSize: '22px', margin: '0px', padding: '0px'}}> 
                                            {d.author} 
                                        </p> 
                                        <p 
                                            className="text-danger" 
                                            style={{ 
                                                fontSize: '18px', 
                                                marginBottom: '5px', 
                                                paddingBottom: '5px'}}> 
                                            Problem: {d.title} 
                                        </p> 
                                        <p style={{textAlign: 'justify'}}> 
                                            {d.body} 
                                        </p>  
                                    </div> 
                                    <hr/> 
                                    <button className="btn btn-info mt-1"> 
                                        Show Comments 
                                    </button> 
                                </li>
                            )
                        })
                        :
                        <h3>
                            { message }
                        </h3>
                    }
                </div>
            </div> 
        ) 
    } 
} 

export default Search







