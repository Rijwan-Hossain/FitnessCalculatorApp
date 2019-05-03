
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom' 

import one from './AgePic/teen.png'
import two from './AgePic/20.png'
import three from './AgePic/30.png'

class Age extends Component { 
    state = { 
        men: false, 
        women: false, 
        age_onesix_oneseven: false, 
        age_oneeight_threezero: false, 
        age_threeone: false 
    } 

    componentDidMount() { 
        this.setState({ 
            men: this.props.location.state.men,
            women: this.props.location.state.women
        }) 
    } 

    selectAge = (imgno) => { 
        this.setState({ 
            age_onesix_oneseven: imgno === "1" ? true : false,
            age_oneeight_threezero: imgno === "2" ? true : false,
            age_threeone: imgno === "3" ? true : false
        }) 

        setTimeout(() => {
            this.props.history.push({ 
				pathname: '/height-weight', 
				state: this.state 
			}) 
        }, 50) 
    } 

    render() { 
        return ( 
            <div 
                style={{ 
					height: 'calc(100vh - 65px)', 
					background: 'rgb(227, 232, 238)' 
				}}> 
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)'
                    }}> 
                    <h3 style={{fontSize: '45px'}} 
                        className="text-center my-4 display-4">
                        What is your age range?
                    </h3>
					<div className="d-flex">
                        <div style={{ 
                            width: '153px', 
                            background: 'black', 
                            marginRight: '20px', 
                            cursor: 'pointer' 
                        }}> 
                            <img 
                                src={one} 
                                onClick={() => this.selectAge("1")} 
                                height="200px"
                                alt="16-17"/> 
                            <h3 style={{fontSize: '40px'}} 
                                className="display-4 text-white text-center">
                                16-17
                            </h3> 
                        </div>
                        <div style={{ 
                            width: '140px', 
                            background: 'black', 
                            marginRight: '20px',
                            cursor: 'pointer' 
                        }}> 
                            <img 
                                src={two} 
                                onClick={() => this.selectAge("2")} 
                                height="200px"
                                alt="18-25"/> 
                            <h3 style={{fontSize: '40px'}} className="display-4 text-white text-center">
                                18-30
                            </h3> 
                        </div>
                        <div style={{ 
                            width: '180px', 
                            background: 'black', 
                            cursor: 'pointer' 
                        }}> 
                            <img 
                                src={three} 
                                onClick={() => this.selectAge("3")} 
                                height="200px"
                                alt="25+"/> 
                            <h3 style={{fontSize: '40px'}} className="display-4 text-white text-center">
                                31+
                            </h3> 
                        </div>
                    </div>
				</div>
			</div> 
        ) 
    } 
} 

export default withRouter(Age)  



