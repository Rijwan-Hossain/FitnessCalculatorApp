import React, { Component } from 'react' 
import consult from '../../Assets/Images/Gym/consult.jpg'

class NoSolution extends Component { 
    render() { 
        return ( 
            <div 
                style={{ 
                    height: 'calc(100vh - 65px)', 
                    background: `url(${consult})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: '100%'
                }}> 
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        padding: '20px', 
                        borderRadius: '5px', 
                        width: '50%'
                    }}> 
                        <h4 className="text-center text-danger">
                            Your condition is too serious
                        </h4> 
                        <h2 className="text-center">
                            Please consult with a doctor
                        </h2> 
                </div> 
            </div> 
        ) 
    } 
} 

export default NoSolution

