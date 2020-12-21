import React, { Component } from 'react'

export default class EventHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             textValue : ""
        }
    }
    
    
    handleChange = (e) =>
    {
        this.setState ({
            textValue : e.target.value
        }, ()=> {
            console.log(this.state.textValue) //to do the work instantly by changing setState value
        });

    }
    
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <p>{this.state.textValue}</p>
            </div>
        )
    }
}
