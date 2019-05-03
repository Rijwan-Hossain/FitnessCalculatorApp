import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, View } from "mdbreact";

import i1 from '../../Assets/slider/s1.png';
import i2 from '../../Assets/slider/s2.jpg';
import i3 from '../../Assets/slider/s3.jpg';
import i4 from '../../Assets/slider/s4.jpg';

import m1 from '../../Assets/message/m1.jpg'
import m2 from '../../Assets/message/m2.jpg'
import m3 from '../../Assets/message/m3.jpg'

class Home extends Component { 
    render() { 
        return ( 
            <div className="container"> 
                <div> 
                    <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                        <CarouselInner>
                            <CarouselItem itemId="1">
                                <View>
                                    <img height="430px" className="d-block w-100" src={i1} alt="First slide" />
                                </View> 
                            </CarouselItem> 
                            <CarouselItem itemId="2">
                                <View>
                                    <img height="430px" className="d-block w-100" src={i2} alt="Second slide" /> 
                                </View> 
                            </CarouselItem> 
                            <CarouselItem itemId="3"> 
                                <View> 
                                    <img height="430px" className="d-block w-100" src={i3} alt="Third slide" />
                                </View> 
                            </CarouselItem>
                            <CarouselItem itemId="4">
                                <View> 
                                    <img height="430px" className="d-block w-100" src={i4} alt="Fourth slide"/> 
                                </View> 
                            </CarouselItem> 
                        </CarouselInner> 
                    </Carousel> 
                {/* </div>  */}
                <div> 
                    <h1 style={{fontSize: '36px'}} className="display-4 text-muted text-justify mt-5 mb-5"> 
                        “We are what we repeatedly do. Excellence then is not an act but a habit.” <br/>
                        <strong>—Aristotle</strong>
                    </h1> 
                </div> 
            </div> 

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
            <div className="bg-dark" style={{height: '50px'}}>
                <p style={{lineHeight: '35px'}} className="text-center text-white">
                    Copyright || Automated Diet Planner
                </p>
            </div>
            </div> 
        ); 
    } 
} 

export default Home; 







