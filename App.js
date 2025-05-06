    // <div id= "parent">
    //        <div id= "child1">
    //         <h1> Im an h1 tag</h1>
    //         <h2> Im an h2 tag</h2>
    //        </div>
    //      <div id="child2">
    //         <h1> Im an h1 tag</h1>
    //         <h2> Im an h2 tag</h2>
    //     </div>
    // </div>
    
        
        const parent = React.createElement("div", {id:"parent"},[
            React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"Im an h1 tag"),
            React.createElement("h2",{},"Im an h2 tag"),
            ]),
            React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"Im an h1 tag"),
            React.createElement("h2",{},"Im an h2 tag"),
            ]),
        
            ]);
    
        const parent1 = React.createElement("h1",{},"Ghulam Mustafa");
        const container = React.createElement("div",{},[parent, parent1]);
 
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render([container]);