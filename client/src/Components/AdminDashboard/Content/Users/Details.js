import React, { Component } from 'react'

class Details extends Component {
    render() {
        let { 
            name, email, gender, 
            weight, mobile, address, 
            ft, inch, avatar
        } = this.props.user 
        return ( 
            <div className="d-flex" 
                style={{ 
                    width: '100%', 
                    height: '42vh'
                }}> 
                <div>
                    <div 
                        style={{ 
                            borderRadius: '5px', 
                            width: '150px',
                            background: 'rgb(219, 219, 219)', 
                            marginRight: '40px' 
                        }}
                        className="align-items-start"> 
                        { 
                            avatar 
                            ? 
                            <img 
                                style={{borderRadius: '5px'}} 
                                width="150px"
                                style={{ 
                                    maxHeight: '350px', 
                                    borderRadius: '5px'
                                }}
                                src={ avatar } 
                                alt="myImage"/> 
                            :
                            <h4 
                                style={{ 
                                    marginTop: '80px', 
                                    fontSize: '25px' 
                                }} 
                                className="text-center display-4"> 
                                Image Not Available 
                            </h4> 
                        } 
                    </div>
                    <h3 style={{fontSize: '24px'}} className="display-4"> 
                        { name } 
                    </h3> 
                </div> 
                <div>
                    <p> 
                        { `Email: ${email}` }
                    </p> 
                    <p>
                        { `Mobile: ${mobile}` } 
                    </p> 
                    <p>
                        { `Gender: ${gender}` } 
                    </p> 
                    <p>
                        { `Weight: ${weight}` } 
                    </p> 
                    <p>
                        { `Height: ${ft} foot ${inch} inchi` } 
                    </p> 
                    <p>
                        { `Address: ${address}` } 
                    </p> 
                </div> 
            </div> 
        ) 
    } 
} 

export default Details 