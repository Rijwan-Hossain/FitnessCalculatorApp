
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import backg from '../../Assets/Images/Gym/backg.jpg'

class HeightWeight extends Component { 
    state = { 
        men: false, 
        women: false, 
        age_onesix_oneseven: false, 
        age_oneeight_threezero: false, 
        age_threeone: false, 
        weight: '', 
        ft: '', 
        inch: ''
    } 

    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    submitHandler = (e) => { 
        e.preventDefault();
        this.props.history.push({ 
            pathname: '/bmi', 
            state: this.state 
        }) 
    } 

    componentDidMount() {
        this.setState({
            ...this.props.location.state
        }) 
    } 



    render() { 
        let { weight, ft, inch } = this.state 
        return (
            <div style={{ 
                    height: 'calc(100vh - 65px)', 
                    backgroundImage: `url(${backg})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: '100%'
                }} 
            > 
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        background: 'white', 
                        padding: '20px', 
                        borderRadius: '5px'
                    }}> 
                    <form onSubmit={this.submitHandler} style={{ width: '100%' }}>
                    
                    <div style={{ float: 'left', width: '320px' }}> 
                        <div className="form-group"> 
                            <label> 
                                Weight in KG 
                            </label> 
                            <input 
                                type="text" 
                                name="weight" 
                                className="form-control" 
                                placeholder="Enter Your Weight e.g. 75" 
                                value={weight} 
                                onChange={this.changeHandler} 
                                required
                            /> 
                        </div> 


                        {/* Height */}
                        <label className="mt-3"> 
                            Height
                        </label> <br/> 
                        <div className='d-flex'>
                            <p style={{ 
                                fontSize: '18px', 
                                width: '40px', 
                                marginTop: '5px'
                            }}>
                                Foot 
                            </p>
                            <input 
                                style={{width: '55px'}}
                                type="text" 
                                name="ft" 
                                className="form-control text-center" 
                                value={ ft } 
                                onChange={this.changeHandler} 
                                required
                            /> 
                            <p style={{ 
                                fontSize: '18px', 
                                width: '40px', 
                                marginTop: '5px',
                                marginLeft: '50px'
                            }}> 
                                inch
                            </p> 
                            <input 
                                style={{width: '55px'}}
                                type="text" 
                                name="inch" 
                                className="form-control text-center" 
                                value={ inch } 
                                onChange={this.changeHandler} 
                                required 
                            /> 
                        </div> 

                        <button className="mt-3 btn btn-info">
                            submit 
                        </button> 
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default withRouter(HeightWeight) 




