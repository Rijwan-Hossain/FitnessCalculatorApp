import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem, View } from "mdbreact";

import i1 from '../../../Images/slider/s1.png';
import i2 from '../../../Images/slider/s2.jpg';
import i3 from '../../../Images/slider/s3.jpg';
import i4 from '../../../Images/slider/s4.jpg';


class Silder extends Component { 
    render() { 
        const quotta = { 
            marginTop: '50px', 
            marginBottom: '65px'
        } 
        return ( 
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

                <div> 
                    <h1 style={{fontSize: '36px'}} className="display-4 text-muted text-justify mt-5 mb-5"> 
                        “We are what we repeatedly do. Excellence then is not an act but a habit.” <br/>
                        <strong>—Aristotle</strong>
                    </h1> 
                </div> 
            </div> 
        );
    }
}

export default Silder;