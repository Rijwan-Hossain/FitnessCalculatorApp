import React, { Component } from 'react' 
import jwtDecode from 'jwt-decode'

class OneList extends Component { 
    state = { 
        doShow: false, 
        editable: false, 
        edit: false 
    } 

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
            
        } catch (error) {
            
        }
    }

    render() { 
        let { question, solution } = this.props.article 
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
                    <h5 className="text-danger"> 
                        Problem: 
                    </h5> 
                    <h5 className="text-dark"> 
                        { question } 
                    </h5> 
                    {
                        this.state.doShow ? 
                        <i 
                            class="fa fa-close ml-auto text-danger" 
                            style={{paddingTop: '6px'}}
                            onClick={this.solutionHandler} 
                        /> 
                        : 
                        <i 
                            class="fa fa-expand ml-auto text-success" 
                            style={{ 
                                paddingTop: '6px'
                            }}
                            onClick={this.solutionHandler} 
                        /> 
                    } 
                    { 
                        this.state.editable && 
                        <i 
                            class="fa fa-edit ml-3 text-primary" 
                            onClick={this.editHandler} 
                            style={{ paddingTop: '6px' }} 
                        /> 
                    } 
                </div> 
                <div> 
                    { 
                        this.state.doShow && 
                        solution 
                    } 
                </div> 
                {/* Edit modal work left only & reload page  */}
            </li> 
        ) 
    } 
} 

export default OneList 