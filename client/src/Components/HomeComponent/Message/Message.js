import React from 'react';

import m1 from '../../../Images/message/m1.jpg'; 
import m2 from '../../../Images/message/m2.jpg'; 
import m3 from '../../../Images/message/m3.jpg'; 

class Message extends React.Component {
    render() { 
        
        return (
            <div className="mb-5"> 
                <h1 style={{fontSize: '45px'}} className="text-center mb-4 text-dark display-4"> 
                    Message From Atheletics 
                </h1> 
                <div className="card-deck">
                    <div className="card">
                        <img height="250px" className="card-img-top" src={ m1 } alt="Card cap" />
                        <div className="card-body">
                            <h5 style={{fontSize: '23px'}} className="card-title text-center display-4"> 
                                <strong> WWE Superstar <br/> 
                                    The Rock 
                                </strong> 
                            </h5> 
                            <p className="card-text text-justify">
                                Success isn't always about 'Greatness', it's about consistency. Consistent, hard work gains success. Greatness will come.
                            </p>
                        </div> 
                    </div> 
                    <div className="card">
                        <img height="250px" className="card-img-top" src={ m2 } alt="Card cap" />
                        <div className="card-body">
                            <h5 style={{fontSize: '22px'}} className="card-title text-center display-4"> 
                                <strong>World Champion <br/> 
                                    Arnold Schwarzenegger 
                                </strong> 
                            </h5> 
                            <p className="card-text text-justify">
                                Training gives us an outlet for suppressed energies created by stress and thus tones the spirit just as exercise conditions the body.
                            </p> 
                        </div> 
                    </div> 
                    <div className="card"> 
                        <img height="250px" className="card-img-top" src={ m3 } alt="Card cap" />
                        <div className="card-body">
                            <h5 style={{fontSize: '22px'}} className="card-title text-center display-4"> 
                                <strong> Mr. Bangladesh (2015)<br/> 
                                    Hasib Mohammad  
                                </strong> 
                            </h5>
                            <p className="card-text text-justify">
                                Always do your best to get what you want to be.   
                            </p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        ) 
    } 
} 

export default Message;