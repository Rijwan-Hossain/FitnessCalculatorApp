
import React, { Component } from 'react' 
import { withRouter } from 'react-router-dom'

class BMI extends Component { 
    state = { 
        men: false, 
        women: false, 
        age_onesix_oneseven: false, 
        age_oneeight_threezero: false, 
        age_threeone: false, 
        weight: '', 
        ft: '', 
        inch: '', 
        bmi: '', 
        status: '', 
        idealWeight: '', 
        need: '', 
        gain: false, 
        loose: false
    } 

    componentDidMount() { 
        this.setState({ 
            ...this.props.location.state
        }) 

        setTimeout(() => {
            let height = parseInt(this.state.ft) * 12 + parseInt(this.state.inch) 
            let h = height 
            height = height * 0.0254 
            let { weight, men } = this.state 
            
            let status = '' 
            let bmi = (weight / (height*height)).toFixed(2) 
            if(bmi < 18.5) 
            { 
                status = 'Underweight' 
            } 
            else if (bmi >= 18.5 && bmi <= 24.9) 
            { 
                status = 'Healthy Weight' 
            } 
            else if (bmi < 30) 
            { 
                status = 'Overweight' 
            } 
            else 
            { 
                status = 'Obesity' 
            } 

            // Ideal weight 
            let w; 
            if(men) { 
                if(this.state.ft >= 5) 
                    w = 50 + (2.3 * (h - 60)) 
                else 
                    w = 50 - (60 - h) 
            } 
            else { 
                if(this.state.ft >= 5) 
                    w = 45.5 + (2.3 * (h - 60)) 
                else 
                    w = 45.5 - (60 - h) 
            } 

            let need; 
            if(weight < w) { 
                need = (w - weight).toFixed(2) 
                this.setState({
                    gain: true
                }) 
            } else { 
                need = (weight - w).toFixed(2) 
                this.setState({
                    loose: true
                }) 
            } 

            this.setState({ 
                bmi, 
                status, 
                idealWeight: w, 
                need 
            }) 
        }, 20) 
    } 

    planHandler = (e) => { 
        e.preventDefault() 
        let { bmi } = this.state 

        if(bmi < 18.5 || bmi > 28) { 
            this.props.history.push('/nosolution') 
        } 
        else { 
            this.props.history.push({ 
                pathname: '/solution', 
                state: this.state 
            }) 
        } 
    } 


    render() { 
        let { weight, idealWeight } = this.state 
        return ( 
            <div 
                style={{ 
                    height: 'calc(100vh - 65px)', 
                    background: '#282c34' 
                }}> 
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        background: 'white', 
                        padding: '20px', 
                        borderRadius: '5px', 
                        width: '50%'
                    }}> 
                    {/*  My code  */} 
                    <div className="d-flex"> 
                        <div> 
                            <h4> 
                                BMI 
                            </h4> 
                            { 
                                this.state.bmi && 
                                <h3 className="text-info">
                                    {this.state.bmi}
                                </h3> 
                            } 
                        </div> 
                        <div style={{marginLeft: 'auto'}}>
                            <h4> 
                                Your BMI result suggests you are
                            </h4> 
                            { 
                                this.state.status !== 'Obesity' 
                                ? 
                                <h3 className="text-info text-right"> 
                                    {this.state.status} 
                                </h3> 
                                : 
                                <h3 className="text-danger text-right"> 
                                    {this.state.status} (Excessive)
                                </h3> 
                            } 
                        </div> 
                    </div> 
                    <hr/> 
                    { 
                        <h3 className="text-center"> 
                            Ideal weight for your body is { idealWeight }
                        </h3> 
                    } 
                    { 
                        weight < idealWeight 
                        ? 
                        <h4 className="text-center"> 
                            You are {(idealWeight - weight).toFixed(2)} KG less than your ideal weight 
                        </h4> 
                        : 
                        <h4 className="text-center"> 
                            You are {(weight - idealWeight).toFixed(2)} KG more than your ideal weight 
                        </h4> 
                    } 

                    <button 
                        style={{fontSize: '22px'}} 
                        onClick={ this.planHandler } 
                        className="btn btn-block btn-warning mt-4 col-6 offset-3">
                        Give me a diet plan
                    </button> 
                </div> 
            </div> 
        ) 
    } 
} 

export default withRouter(BMI) 



