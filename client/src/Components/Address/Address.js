import React, { Component } from 'react';

class Address extends Component {
    render() {
        return (
            <div className="d-flex" style={{ background: '#1C2331' }}> 
                <div className="col-sm-6 col-md-6 col-lg-4 text-justify mb-4"> 
                    <h3 className="text-white text-center mt-5"> 
                        QUICK CONTACT 
                        </h3> 
                    <address className="text-white text-left ml-5 mr-5 mt-4"> 
                        Main Clinic: Mirpur-2, H-Block, Rod-10, House-2, Dhaka-1216, Bangladesh
                            <br />
                        Phone: 8012345
                            <br />
                        Cell: 01758-712370, 01996-813160, 01944-700465
                            <br />
                        Email:
                            <a
                            href="rijyan.cse.152@gmail.com"> rijyan.cse.152@gmail.com
                            </a>
                    </address>
                </div> 
                <div className="col-sm-6 col-md-6 col-lg-4 text-center"
                    style={{ background: '#CC0000' }}>
                    <h3 className="text-white mt-5">
                        QUICK LINKS
                        </h3>
                    <div className="text-left ml-5 mt-4 text-white">
                        <a style={{ color: 'white' }} href="http://localhost:3000">Consultant Profile</a> <br />
                        <a style={{ color: 'white' }} href="http://localhost:3000/">Map</a> <br />
                        <a style={{ color: 'white' }} href="http://localhost:3000/">Our Gallery</a> <br />
                        <a style={{ color: 'white' }} href="http://localhost:3000/">Feed Page</a>
                        <br />
                        <a style={{ color: 'white' }} href="http://localhost:3000/">Signup</a>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 text-center" style={{ background: '#1C2331' }}>
                    <h3 className="text-white mt-5">
                        CONNECT WITH US
                        </h3>
                    <div className="text-left my-4 ml-5" >
                        <a style={{
                            color: 'white'
                        }} href="https://facebook.com/rijwan07">
                            <i className="fa fa-facebook-official fa-3x"></i>
                        </a>
                        <a style={{ color: '#CC0000' }} href="https://www.youtube.com/channel/UClhEOxQJqzyqTX5It0-654w?view_as=subscriber">
                            <i className="fab fa-youtube fa-3x ml-5"></i>
                        </a>
                        <a style={{ color: '#1976d2' }}
                            href="https://mail.google.com/mail/u/0/?tab=om#inbox">
                            <i class="fab fa-google fa-3x ml-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Address;


