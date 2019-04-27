import React, { Component } from 'react'
import TutorialForm from './TutorialForm'

class Tutorials extends Component { 
    render() { 
        return ( 
            <div> 
                <h3 
                    style={{fontSize: '45px', color: 'steelblue'}} 
                    className="text-center display-4">
                    Create New Tutorial 
                </h3> 
                <TutorialForm />  
            </div> 
        ) 
    } 
} 

export default Tutorials; 