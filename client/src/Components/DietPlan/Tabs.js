import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Tabs extends Component { 
    constructor(props) { 
        super(props); 
        this.toggle = this.toggle.bind(this); 
        this.state = { 
            activeTab: '1' 
        }; 
    } 
    
    toggle(tab) {  
        if (this.state.activeTab !== tab) { 
            this.setState({ 
                activeTab: tab 
            }); 
        } 
    } 

    toggle2(tab) {  
        if (this.state.activeTab !== tab) { 
            this.setState({ 
                activeTab: tab 
            }); 
        } 
    } 


    display1 = (r1) => { 
        let output = [] 
  
        let keys = Object.keys(r1) 
        for (let i=0; i<keys.length; i++) { 
            let o = r1[keys[i]] 
            output.push(Object.keys(r1)[i].split('_').join(' ')) 
            let keys2 = Object.keys(o) 
            for (let j=0; j<keys2.length; j++) { 
                let value = r1[keys[i]][keys2[j]]
                output.push(value) 
            } 
        } 
        return output 
    } 



    display2 = (r2) => { 
        let output = [] 
        let keys = Object.keys(r2) 
        for (let i=0; i<keys.length; i++) { 
            let o = r2[keys[i]] 
            output.push(Object.keys(r2)[i]) 
            
            let keys2 = Object.keys(o) 
            for (let j=0; j<keys2.length; j++) { 
                let value = r2[keys[i]][keys2[j]] 
                output.push(value) 
            } 
        } 
        return output 
    } 



    mealplan1 = (mp1) => { 
        let arr = Object.keys(mp1)
        return arr 
        // arr.map((v,i) => {
        //     console.log(v + ': ' + obj[v]);
        // })
    } 



    render() {
        let { r1, r2, mp1, mp2 } = this.props 
        
        return (
            <div>
                <div>
                    <Nav tabs>
                        <NavItem className="text-center col-6 bg-info">
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            > 
                                Routine 
                            </NavLink> 
                        </NavItem> 
                        <NavItem className="text-center col-6 bg-info">
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Meal Plan 
                            </NavLink>
                        </NavItem>
                    </Nav> 

                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12" className="mt-3">
                                    <h3
                                        style={{
                                            height: '100px', 
                                            lineHeight: '100px', 
                                            color: 'steelblue'
                                        }}>
                                        1st Month
                                    </h3>
                                    <div>
                                        <li 
                                            style={{
                                                listStyle: 'none',
                                                float: 'left',
                                                fontWeight: 'bold'
                                        }} className="col-3">
                                            Name
                                        </li>
                                        <li 
                                            style={{
                                                listStyle: 'none',
                                                float: 'left',
                                                fontWeight: 'bold'
                                        }} className="col-3">
                                            Set
                                        </li>
                                        <li 
                                            style={{
                                                listStyle: 'none',
                                                float: 'left',
                                                fontWeight: 'bold'
                                        }} className="col-3">
                                            Count
                                        </li>
                                        <li 
                                            style={{
                                                listStyle: 'none',
                                                float: 'left',
                                                fontWeight: 'bold'
                                        }} className="col-3">
                                            Weight
                                        </li>
                                    </div>
                                    
                                    {/* Algorithm */} 
                                    <div className="mt-3 pt-3"> 
                                        { this.display1(r1).map((a, i) => {
                                            return (
                                                <li
                                                className="col-3"
                                                    style={{
                                                        listStyle: 'none', 
                                                        float: 'left'
                                                    }}
                                                >
                                                    <div className="d-flex">
                                                        <p 
                                                            style={{
                                                                color: 'white', 
                                                                visibility: 'hidden'
                                                            }}> 
                                                            {i}
                                                        </p>
                                                        {a ? a : '-'}
                                                    </div>
                                                </li>
                                            )
                                        }) }  
                                    </div> 
                                </Col> 
                            </Row> 
                        </TabPane> 
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                        <div style={{height: '50px'}}></div>
                                    { 
                                        this.mealplan1(mp1).map(v => {
                                            return (
                                                <li
                                                    style={{
                                                        listStyle: 'none'
                                                    }}
                                                >
                                                    <div className="d-flex">
                                                        <h5 
                                                            style={{
                                                                width: '100px'
                                                            }}> 
                                                            {v}: 
                                                        </h5> 
                                                        {mp1[v]}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>  
                <hr/> 

                <div style={{height: '100px'}}></div>



                {/* 2nd month */}
                <div>
                    <Nav tabs>
                        <NavItem className="text-center col-6 bg-info">
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle2('1'); }}
                            > 
                                Routine 
                            </NavLink> 
                        </NavItem> 
                        <NavItem className="text-center col-6 bg-info">
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle2('2'); }}
                            >
                                Meal Plan 
                            </NavLink>
                        </NavItem>
                    </Nav> 

                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12" className="mt-3">
                                    <h3 
                                        style={{
                                            height: '100px', 
                                            lineHeight: '100px', 
                                            color: 'steelblue'
                                        }}>
                                        2nd Month & more to follow</h3>
                                    <div>
                                        <li 
                                            style={{
                                                listStyle: 'none',
                                                float: 'left',
                                                fontWeight: 'bold'
                                        }} className="col-3">
                                            Name
                                        </li>
                                        <li 
                                            style={{
                                                listStyle: 'none',
                                                float: 'left',
                                                fontWeight: 'bold'
                                        }} className="col-3">
                                            Set
                                        </li>
                                        <li 
                                            style={{
                                                listStyle: 'none',
                                                float: 'left',
                                                fontWeight: 'bold'
                                        }} className="col-3">
                                            Count
                                        </li>
                                        <li 
                                            style={{
                                                listStyle: 'none',
                                                float: 'left',
                                                fontWeight: 'bold'
                                        }} className="col-3">
                                            Weight
                                        </li>
                                    </div>
                                    
                                    {/* Algorithm */} 
                                    <div className="mt-3 pt-3"> 
                                        { this.display1(r2).map((a, i) => {
                                            return (
                                                <li
                                                className="col-3"
                                                    style={{
                                                        listStyle: 'none', 
                                                        float: 'left'
                                                    }}
                                                >
                                                    <div className="d-flex">
                                                        <p 
                                                            style={{
                                                                color: 'white', 
                                                                visibility: 'hidden'
                                                            }}> 
                                                            {i}
                                                        </p>
                                                        {a ? a : '-'}
                                                    </div>
                                                </li>
                                            )
                                        }) }  
                                    </div> 
                                </Col> 
                            </Row> 
                        </TabPane> 
                        <TabPane tabId="2">
                            <Row>
                            <Col sm="12">
                                        <div style={{height: '50px'}}></div>
                                    { 
                                        this.mealplan1(mp2).map(v => {
                                            return (
                                                <li
                                                    style={{
                                                        listStyle: 'none'
                                                    }}
                                                >
                                                    <div className="d-flex">
                                                        <h5 
                                                            style={{
                                                                width: '100px'
                                                            }}> 
                                                            {v}: 
                                                        </h5> 
                                                        {mp2[v]}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>  
                <hr/> 
                <div style={{height: '100px'}}></div>
            </div>  
        )  
    }  
}  

export default Tabs  