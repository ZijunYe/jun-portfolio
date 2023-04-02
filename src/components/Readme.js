import './main.css'; 
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 
function Readme(props){
  
    return (
      <div onClick={()=>{props.show(false)}}>
        
        <Row>
        <img className='topbar' src="../images/frame/readme-titlebar.png" alt='README title bar'/>
        </Row>
        <Row className="middle-item">
          <div className="readme-content">Here is content</div>
          {/* <img className='middlebar' src="../images/frame/rightbar.png"/> */}
        </Row>
        <Row>
        <img className='bottombar' src="../images/frame/readme-bottom-bar.png" alt="README bottom bar"/>
        </Row>
       
        </div>

    );
}
 
export default Readme; 