import React, { Component } from 'react'

class QuickContact extends Component {
    render() { 
        let { email, address, mobile } = this.props 
        // console.log('Quick Contact'); 
        // console.log(this.props);
        
        
        return (
            <div style={{display: 'flex'}}> 
                {/* Email */}
                <div className="card" 
                    style={{width: '300px', marginRight: '70px'}}>
                    <div style={{
                        width: '60%', 
                        height: '100px', 
                        border: '1px solid steelblue', 
                        borderRadius: '50%', 
                        marginLeft: '33px',
                        marginTop: '10px',
                    }}> 
                        <i 
                            style={{
                                marginLeft: '33px',
                                marginTop: '35px',
                            }}
                            class="fa fa-envelope fa-2x" 
                            aria-hidden="true"> 
                        </i> 
                    </div> 
                    <h6 className="text-center mt-3"> 
                        Email 
                    </h6> 
                    <p style={{margin: '10px 25px', textAlign: 'justify'}}>  
                        { email || 'Update Profile' }
                    </p> 
                </div> 
                


                
                {/* Address */} 
                <div className="card" 
                    style={{width: '300px', marginRight: '70px'}}>
                    <div style={{
                        width: '60%', 
                        height: '100px', 
                        border: '1px solid steelblue', 
                        borderRadius: '50%', 
                        marginLeft: '33px',
                        marginTop: '10px',
                    }}> 
                        <i 
                            style={{
                                marginLeft: '30px',
                                marginTop: '35px',
                            }}
                            class="fa fa-address-card-o fa-2x" 
                            aria-hidden="true"> 
                        </i> 
                    </div> 
                    <h6 className="text-center mt-3"> 
                        Address 
                    </h6> 
                    <p style={{margin: '10px 25px', textAlign: 'justify'}}>  
                    { address || 'Update Profile' }
                    </p> 
                </div> 






                {/* Mobile */}
                <div className="card" 
                    style={{width: '300px', marginRight: '70px'}}>
                    <div style={{
                        width: '60%', 
                        height: '100px', 
                        border: '1px solid steelblue', 
                        borderRadius: '50%', 
                        marginLeft: '33px',
                        marginTop: '10px',
                    }}> 
                        <i 
                            style={{
                                marginLeft: '39px',
                                marginTop: '27px',
                            }}
                            class="fa fa-mobile fa-3x" 
                            aria-hidden="true"> 
                        </i> 
                    </div> 

                    <h6 className="text-center mt-3"> 
                        Mobile 
                    </h6> 
                    <p style={{margin: '10px 25px', textAlign: 'center'}}>  
                        { mobile || 'Update Profile' }
                    </p> 
                </div> 
            </div> 
        ) 
    } 
} 

export default QuickContact 