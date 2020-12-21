import React from "react";
import Card from "./components/Card";
import CardClassbased from "./components/CardClassbased";
import State from "./components/State";
import Data from "./data.json";
import Conditional_Rendering from "./Conditional_Rendering/index";
import EventHandler from "./components/EventHandler";
import EventBinding from "./components/EventBinding";
import Hooks from "./components/Hooks";

function App()
{

    //class based component mapping
    let items = [];
    items = Data.map((item, index) => < CardClassbased key={index} titleText={item.title} descText={item.desc} /> );

    //function based component mapping
    let items2 = [];
    items2 = Data.map((item, index2) => <Card key={index2} titleText={item.title} descText={item.desc} /> )

    console.log(Data[0].title);
    return (
        
        <div>
            <h2 className="headingStyle largeText">Todo Application</h2>
            <br />
            <h3>Class Based</h3>
            <br />
            {items}
            <hr />
            <br />
            <h3>Function Based</h3>
            <br />
            {items2}
            <br />
            <hr />
            <br />
            <h3>About State in Class Based Component</h3>
            <State />
            <br />
            <hr />
            <br />
            <h3>Conditional Rendering Login page-Home page!</h3>
            <Conditional_Rendering />
            <br />
            <hr />
            <br />
            <h3>Event Handler by HandleChange in input</h3>
            <EventHandler />
            <br />
            <hr />
            <br />
            <h3>EventBinding</h3>
            <p>(for JS ES6 Arrow function, bind is not needed!)</p>
            <EventBinding />
            <br />
            <hr />
            <h3>Hooks/Use State in Functional Component</h3>
            <br />
            <Hooks />
        </div>
    );
}

export default App;