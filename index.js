import React from "react";
import ReactDOM from 'react-dom';
import Child1 from './src/Child1.jsx';
import Child2 from './src/Child2.jsx';



class Parent extends React.Component {
    constructor(props){
        super(props);
    }


    
    render () {
        return(
            <div>
                <Child1/>
                <Child2/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("scotttt"));