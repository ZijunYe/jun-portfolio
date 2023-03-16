import './main.css'; 
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 
class Readme extends Component {
  render() {
    return (
      <container className="readme">
        
        <Row>
        <img className='topbar' src="../images/frame/readme-titlebar.png"/>
        </Row>
        <Row className="middle-item">
          <div className="readme-content">Here is content</div>
          {/* <img className='middlebar' src="../images/frame/rightbar.png"/> */}
        </Row>
        <Row>
        <img className='bottombar' src="../images/frame/bottombar.png"/>
        </Row>
       
        </container>

    );
  }
}
 
export default Readme; 