import './main.css'; 
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect,useRef} from 'react';
 
function Project() {
  let r = useRef(); 

    return (
      <div ref={r} className="frame">
        
        <Row>
        <img className='topbar' src="../images/frame/Project_Titlebar.png" alt="project titlebar"/>
        <img className='topbar' src="../images/frame/Project_Infobar.png" alt="project infobar"/>

        </Row>
        <Row className="middle-item">
          <div className="readme-content">Here is content</div>
          {/* <img className='middlebar' src="../images/frame/rightbar.png"/> */}
        </Row>
    
       
        </div>

    );
}
 
export default Project; 