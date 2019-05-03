import React, { Component } from 'react' 
import backgroundImage from '../../Assets/Images/Gym/source.gif'
import { withRouter } from 'react-router-dom' 

class Dietplan extends Component { 
    state = { 
		men: false, 
		women: false 
	} 

	menHandler = () => { 
		this.setState({ 
			men: true 
		}) 
		setTimeout(() => { 
			this.props.history.push({ 
				pathname: '/age', 
				state: this.state 
			}) 
		}, 20) 
	} 

	womenHandler = () => { 
		this.setState({ 
			women: true 
		}) 
		setTimeout(() => { 
			this.props.history.push({ 
				pathname: '/age', 
				state: this.state 
			}) 
		}, 20) 
	} 

    render() { 
        return ( 
            <div 
                style={{
                    height: 'calc(100vh - 65px)', 
                    backgroundImage: `url(${backgroundImage})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: '100%'
                }}> 
                    <div 
					style={{ 
						position: 'absolute', 
						top: '50%', 
						left: '50%', 
						transform: 'translate(-50%, -50%)'
					}}
				> 
                    <div style={{marginTop: '-125px'}}>
                        <h1 className="text-white text-center mb-5">
                            Select Your Gender
                        </h1>
                    </div>
					<div 
						className="d-flex"> 
                        <div 
                            className="bg-info"
							onClick={this.menHandler} 
							style={{ 
								width: '200px',
								height: '200px',
								background: 'white',
								borderRadius: '50%', 
								textAlign: 'center', 
								marginRight: '350px', 
								cursor: 'pointer'
							}} 
						> 
                            <h3 
                                className="display-4 text-white"
								style={{ 
									margin: '0px', 
									padding: '0px', 
									color: 'black', 
									lineHeight: '200px', 
                                    fontSize: '45px'
								}}> 
								Men 
							</h3> 
						</div> 
                        <div 
                            className="bg-info"
							onClick={this.womenHandler}
							style={{ 
								width: '200px',
								height: '200px',
								background: 'white',
								borderRadius: '50%', 
								textAlign: 'center', 
								cursor: 'pointer' 
							}} 
						> 
                            <h3 
                                className="display-4 text-white"
								style={{ 
									margin: '0px', 
									padding: '0px', 
									color: 'black', 
                                    lineHeight: '200px', 
                                    fontSize: '45px'
								}}> 
								Women 
							</h3> 
						</div> 
					</div> 
				</div>
            </div> 
        ) 
    } 
} 

export default withRouter(Dietplan); 

