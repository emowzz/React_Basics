import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }


    handleChange = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    handleDicrease = () => {
        this.setState ({
            count : this.state.count - 1
        })
    }
    
    
    render() {

        const {count} = this.state;
        
        return (
            <div>
                <h4>Count : {count}</h4>
                <button  onClick={this.handleChange}>+</button>
                <button  onClick={this.handleDicrease} disabled={count === 0 ? true : false}>-</button>
            </div>
        )
    }
}
