import React, { Component } from 'react' 
import ShowTutorials from './ShowTutorials';

class Tutorial extends Component { 
    render() { 
        return ( 
            <div className="container"> 
                <div 
                    style={{
                        padding: '0px',
                        margin: '0px'
                    }} 
                    className="col-md-8">
                    <ShowTutorials /> 
                </div>
            </div> 
        ) 
    } 
} 

export default Tutorial; 