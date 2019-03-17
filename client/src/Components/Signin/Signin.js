import React, { Component } from 'react' 
import Form from './Form';

class Signin extends Component { 
    render() { 
        return ( 
            <div style={{
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    width: '350px'
                }}>
                <h1 className="display-4 mb-3" 
                    style={{ 
                        // fontSize: '35px', 
                        textAlign: 'center', 
                        color: 'steelblue'
                    }}>
                    Login  
                </h1> 

                <Form /> 

                
            </div> 
        ) 
    } 
} 

export default Signin; 