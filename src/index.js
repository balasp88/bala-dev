import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Expert from "./components/js/container/expert";
import Name from "./components/js/container/name";
import ReactPageScroller from "./components/js/scroll";

class Home extends Component{
    constructor(){
      super();
    }

    render(){

      return ( <ReactPageScroller>
        <Name />
        <Expert />
        
      </ReactPageScroller>);
    }
}

export default Home;

const wrapper = document.getElementById("home");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;