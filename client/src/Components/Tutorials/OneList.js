import React, { Component } from 'react' 
import jwtDecode from 'jwt-decode'
import A from '../../Assets/Images/A.png'
import { Modal, ModalBody } from 'react-bootstrap'
import axios from 'axios'

class OneList extends Component { 
    state = { 
        doShow: false, 
        editable: false, 
        edit: false, 
        deletemsg: '',
        question: this.props.article.question, 
        solution: this.props.article.solution 
    } 
    key = ''; 

    solutionHandler = () => { 
        this.setState({ 
            doShow: !this.state.doShow 
        }) 
    } 

    editHandler = () => { 
        this.setState({ 
            edit: true 
        }) 
    } 

    componentDidMount() {
        try {
            let token = localStorage.getItem('token').split(' ')[1] 
            let user = jwtDecode(token) 
            if(user.email === 'rijyan.cse.152@gmail.com') {
                this.setState({
                    editable: true 
                }) 
            } 
        } catch (error) {} 
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
        let id = this.key._id; 
        axios.patch(`http://localhost:5000/api/tutorials/${id}`, newTutorial) 
        .then(() => { 
            this.setState({ 
                edit: false 
            }) 
        }) 
        .catch(() => {}) 
    } 



    deleteHandler = (e) => { 
        e.preventDefault() 
        let id = this.key._id; 
        axios.delete(`http://localhost:5000/api/tutorials/${id}`) 
            .then(() => {
                this.setState({
                    deletemsg: true
                }) 

                setTimeout(() => { 
                    this.setState({ 
                        deletemsg: '' 
                    }) 
                }, 2500) 
            }) 
    } 




    render() { 
        let { question, solution } = this.props.article 
        this.key = this.props.article 


        return ( 
            <li 
                style={{ 
                    listStyle: 'none', 
                    background: 'rgb(240, 240, 242)', 
                    marginBottom: '15px', 
                    padding: '15px', 
                    borderRadius: '6px' 
                }}> 
                <div className="d-flex"> 
                    <h5 style={{width: '90px'}} className="text-danger"> 
                        Problem: 
                    </h5> 
                    <h5 className="text-dark"> { question } </h5> 
                    { 
                        <img 
                            src={A} 
                            alt="solution" 
                            height="30px"
                            width="30px"
                            className="ml-auto" 
                            style={{ 
                                cursor: 'pointer', 
                                paddingTop: '-18px'
                            }} 
                            onClick={this.solutionHandler} 
                        />
                    } 
                    { 
                        this.state.editable && 
                        <i class="fa fa-edit ml-4 fa-2x text-primary" 
                            onClick={this.editHandler} 
                            style={{ paddingTop: '3px', cursor: 'pointer' }} 
                        /> 
                    } 
                    { 
                        this.state.editable && 
                        <i class="fa fa-close ml-4 fa-2x text-danger" 
                            onClick={this.deleteHandler} 
                            style={{ paddingTop: '-5px', cursor: 'pointer' }} 
                        /> 
                    } 
                </div> 
                <div> 
                    { 
                        this.state.doShow && 
                        <div className="mt-3 text-justify">
                            { solution } 
                        </div> 
                    } 
                </div> 
                
                {
                    this.state.deletemsg && 
                    <Modal show={true}>
                        <ModalBody>
                            <h4>Deleted Successfully</h4> 
                            <p>
                                Reload the page
                            </p>
                        </ModalBody>
                    </Modal>
                }
                
                {
                    this.state.edit && 
                    <Modal show={true}> 
                        <ModalBody>
                            <form onSubmit={this.submitHandler}> 
                                <input 
                                    type="text" 
                                    name="question" 
                                    value={this.state.question} 
                                    className="form-control col-10 mb-2" 
                                    placeholder="Enter the question"
                                    style={{border: '1px solid steelblue'}}
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
                                    style={{ 
                                        height: '300px', 
                                        resize: 'none', 
                                        border: '1px solid steelblue' 
                                    }} 
                                /> 
                                <button className="btn btn-dark"> 
                                    Submit 
                                </button> 
                            </form>  
                        </ModalBody> 
                    </Modal> 
                }
            </li> 
        ) 
    } 
} 

export default OneList 