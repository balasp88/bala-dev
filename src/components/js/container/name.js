import React from "react";
import BackgroundGif from "../../../bala.gif";
import './name.css';

export default () => {
  var sectionStyle = {
    'height': '100%',
    'width': '100%',
    'paddingLeft': '0px',
    'paddingRight':'0px',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    backgroundImage: `url(${BackgroundGif})`
  };

  var deepBlue = {
    color: '#569cd6'
  }

  var blue = {
    color: '#36a3f0'
  }

  var green = {
    color: '#43c9b0'
  }

  

  return (
    <div className="container-fluid" style={sectionStyle}>
      <div className="row" style={{backgroundColor: 'rgba(10, 10, 10, 0.79)',
    height: '100%'}}>
      <div className="col-sm-2"></div>
        <div className="col-sm-8">  
         <div className="component first-component" >
           <div className="console-box">
             <p>> Hello, I'm Balasubramaniam</p>
             <p className="anim-typewriter">> I'm a full stack web developer</p>
           </div>
          </div>
          </div>
        <div className="col-sm-2"></div>
      </div>
   </div>

   
  );
};
