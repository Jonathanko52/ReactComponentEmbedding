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
                <h1>Parent</h1>
                <br></br>
                <Child1/>
                <br></br>

                <Child2/>
            </div>
        )
    }
}

ReactDOM.render(<Parent/>, document.getElementById("parent"));