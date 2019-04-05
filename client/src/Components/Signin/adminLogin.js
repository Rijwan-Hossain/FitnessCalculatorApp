import React, { Component } from 'react' 
import AdminForm from './AdminForm';

class AdminLogin extends Component { 
    render() { 
        return ( 
            <div style={{
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    width: '350px'
                }}>
                <h1 className="text-dark display-4 mb-3" 
                    style={{ 
                        textAlign: 'center', 
                        // color: 'steelblue', 
                        fontSize: '40px'
                    }}>
                    Consultant Login 
                </h1> 

                <AdminForm /> 

                
            </div> 
        ) 
    } 
} 

export default AdminLogin; 