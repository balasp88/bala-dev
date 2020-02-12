import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode, faMobileAlt, faLightbulb, faCloud } from '@fortawesome/free-solid-svg-icons'
import './expert.css'
import * as THREE from "three";
import ProfilePic from "../../../ProfilePic.jpg";

export default class Expert extends Component{

  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 100 );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize( 500, 500 );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 2, 2, 2 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }

  render(){
    return (
      <div className="component first-component" style={{backgroundColor: 'rgba(10, 10, 10, 0.79)'}}>
        <div className="container">
          <div class="row align-items-center" style={{ paddingTop : '50px' }}>
            <div class="col-lg-3 align-items-center">
              <div className="hexagon">
                <FontAwesomeIcon icon={faLaptopCode} size="3x" style={{ color: 'orange' }} />
              </div>
              <div className="spec-hint">
                Experience in building web applications by applying the patterns like MVVM, MVC and MVP.
              </div>
            </div>
            <div class="col-lg-3">
              <div className="hexagon">
                <FontAwesomeIcon icon={faMobileAlt} size="3x" style={{ color: 'orange' }} />
              </div>
              <div className="spec-hint">
                Hands on experience in developing mobile applications using Cordova, Cordova Ionic and Android.
              </div>
            </div>
            <div class="col-lg-3">
              <div className="hexagon">
                <FontAwesomeIcon icon={faLightbulb} size="3x" style={{ color: 'orange' }} />
              </div>
              <div className="spec-hint">
                Providing innovative ideas and prototypes of next generation solutions
              </div>
            </div>
            <div class="col-lg-3">
              <div className="hexagon">
                <FontAwesomeIcon icon={faCloud} size="3x" style={{ color: 'orange' }} />
              </div>
              <div className="spec-hint">
                Having exposure in Cloud Environments like Azure and Google Firebase.
              </div>
            </div>
          </div>
          <div class="row align-items-center" style={{ marginTop: '40px' }}>
            <div class="col-lg-6" style={{textAlign:'center'}}>
              <img src={ProfilePic} className="profile-pic"></img>
              <div style={{color:'white'}}>
              I'm a Full Stack Developer for DHL in Chennai, IN.
I have serious passion for creating enterprice web application with  creating intuitive, dynamic user experiences.
              </div>
            </div>
            <div class="col-lg-6">
              <div ref={ref => (this.mount = ref)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
