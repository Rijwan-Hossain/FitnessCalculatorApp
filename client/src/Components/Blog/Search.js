import React, { Component } from 'react'
import axios from 'axios' 
import MakeComments from './MakeComments';

class Search extends Component { 
    state = { 
        terms: '', 
        noFoundMsg: '', 
        data: [], 
        showCmnt: false, 
        buttonValue: 'Show Comments'
    } 
    
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
                        message: result.data.message 
                    }) 
                } else { 
                    this.setState({ 
                        data: result.data.result, 
                        terms: '' 
                    }) 
                } 
            }) 
    } 

    commentHandler = () => { 
        this.setState({ 
            showCmnt: !this.state.showCmnt, 
            buttonValue: this.state.showCmnt ?  'Show Comments' : 'Hide Comments'  
        }) 
    } 
    

    render() { 
        let { data, message, buttonValue } = this.state 
        
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
                        data.map((d, i) => {
                            return (
                                <li 
                                    key={i}
                                    style={{
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
                                    <button 
                                        onClick={this.commentHandler}
                                        className="btn btn-info mt-1"> 
                                        { buttonValue } 
                                    </button> 
                                    { 
                                        this.state.showCmnt && 
                                        <MakeComments  
                                            postId={d._id} 
                                            comments={d.comments} 
                                        /> 
                                    } 
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


