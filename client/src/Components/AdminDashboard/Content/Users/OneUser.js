import React, { Component } from 'react'
import { Modal, ModalBody, Button, ModalFooter } from 'react-bootstrap'
import Details from './Details' 
import axios from 'axios'

class OneUser extends Component { 
    state = { 
        extend: false, 
        delete: false
    } 

    expandHandler = () => { 
        this.setState({ 
            extend: !this.state.extend 
        }) 
    } 
    

    deleteHandler = () => { 
        let id = this.props.user._id 

        axios.delete(`http://localhost:5000/api/users/register/${id}`) 
            .then(() => { 
                this.setState({ 
                    delete: true
                }) 

                setTimeout(() => { 
                    this.setState({ 
                        delete: false
                    }) 
                }, 1500)
            }) 
            .catch(() => {})
    } 

    render() { 
        let { 
            name, email, 
        } = this.props.user 
        
        return ( 
            <li 
                key={this.props.i} 
                style={{ 
                    listStyle: 'none', 
                    display: 'flex',
                    background: 'rgb(220, 220, 242)', 
                    marginBottom: '10px', 
                    padding: '15px', 
                    borderRadius: '6px' 
                }}> 
                <p style={{width: '20%',margin: '0px',fontSize: '18px'}}> 
                    {name} 
                </p> 
                <p style={{width: '30%',margin: '0px',fontSize: '18px'}}> 
                    {email} 
                </p> 
                <i 
                    class="fa fa-expand ml-auto fa-2x text-primary" 
                    onClick={this.expandHandler} 
                    style={{ 
                        width: '15%', 
                        paddingTop: '-8px',
                        paddingLeft: '35px',
                        cursor: 'pointer' 
                    }} 
                /> 
                <i 
                    class="fa fa-close fa-2x text-danger" 
                    onClick={this.deleteHandler} 
                    style={{ 
                        width: '15%', 
                        paddingTop: '-8px', 
                        paddingLeft: '35px',
                        cursor: 'pointer' 
                    }} 
                /> 

                {
                    this.state.extend && 
                    <Modal show={true} centered> 
                        <ModalBody> 
                            <Details user ={this.props.user} /> 
                        </ModalBody> 
                        <ModalFooter> 
                            <Button onClick={this.expandHandler} > 
                                close 
                            </Button> 
                        </ModalFooter> 
                    </Modal> 
                } 

                {
                    this.state.delete && 
                    <Modal show={true}> 
                        <ModalBody> 
                             <h3>Deleted Successfully</h3>
                        </ModalBody> 
                    </Modal> 
                } 
            </li> 
        ) 
    } 
} 

export default OneUser 

