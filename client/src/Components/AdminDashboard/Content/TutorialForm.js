import React, { Component } from 'react'
import { Modal, ModalBody } from 'react-bootstrap' 
import axios from 'axios' 

class TutorialForm extends Component { 
    state = { 
        question: '', 
        solution: '', 
        success: '' 
    } 

    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    submitHandler = (e) => { 
        e.preventDefault() 
        let newTutorial = { 
            question: this.state.question, 
            solution: this.state.solution
        } 
        
        axios.post('http://localhost:5000/api/tutorials', newTutorial) 
            .then(result => { 
                this.setState({ 
                    success: result.data.message, 
                    question: '', 
                    solution: '' 
                }) 

                setTimeout(() => { 
                    this.setState({ success: '', }) 
                },1500) 
            }) 
            .catch(err => { 
                this.setState({ 
                    error: 'Your article is not submitted due to server error' 
                }) 
            }) 
    } 

    render() {
        return (
            <div className="offset-2">
                <form onSubmit={this.submitHandler}> 
                    <input 
                        type="text" 
                        name="question" 
                        value={this.state.question} 
                        className="form-control col-10 mb-2" 
                        placeholder="Enter the question"
                        onChange={this.changeHandler} 
                        required 
                    /> 
                    
                    <textarea 
                        type="text" 
                        name="solution" 
                        value={this.state.solution} 
                        className="form-control col-10 mb-2" 
                        placeholder='Enter the solution' 
                        onChange={this.changeHandler} 
                        required 
                        style={{ height: '300px',resize: 'none' }} 
                    /> 

                    <button className="btn btn-dark"> 
                        Submit 
                    </button> 
                    
                    { 
                        this.state.success && 
                        <Modal 
                            centered 
                            show={true}> 
                            <ModalBody> 
                                { this.state.success } 
                            </ModalBody> 
                        </Modal> 
                    } 
                </form>               
            </div>
        )
    }
}

export default TutorialForm