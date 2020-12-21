import React, { Component } from "react";



class CardClassbased extends Component {

    render() {
        
        return (
            
            <div className="card">
                <h5 className="cardTitle">{this.props.titleText}</h5>
                <p className="cardDescrip">{this.props.descText}</p>
                {/* <p className="cardFooter">{this.props.dateName + "/" + this.props.monthName + "/" + this.props.yearName}</p> */}
            </div>

        )
    }
}

export default CardClassbased;