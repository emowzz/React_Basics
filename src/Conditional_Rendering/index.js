import React, { Component } from 'react'
import Home from "./Home";
import Login from './Login';

export default class Conditional_Rendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
            }
    }

    handleChange = () =>
    {
        this.setState ({
            isLoggedIn : !this.state.isLoggedIn
        })
        
    }
    
    render() {

        const {isLoggedIn} = this.state;
        let element = isLoggedIn ? <Home /> : <Login />
        {
            return (
                    <div>
                        {element}
                        <button onClick={this.handleChange}>{isLoggedIn ? "Login " : "Home "}</button>
                    </div>
                )
        }
    }
}
