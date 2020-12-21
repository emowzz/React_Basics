import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }


    //need to bind this function if we use this kind of functions
    handleClick()
    {
        this.setState({
            count : this.state.count+1
        })
    }


    // //by using JS ES6 function it will not throw any errors
    // handleClick = () => {
    //     this.setState ({
    //         count : this.state.count+1
    //     })
    // }
    
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
