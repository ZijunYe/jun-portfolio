import './main.css'; 
import React, { Component } from 'react';
import DateTime from './DateTime';

 
class Nav extends Component {
  render() {
  
    return (
      <div className="navBar">
        <div className='navitem'>
             <a className="nava" href="https://www.linkedin.com/in/zijunye/">LINKEDIN</a>
             <a className="nava" href="https://github.com/ZijunYe">GITHUB</a>
             <a className="nava" href="zijunye@gmail.ca">GMAIL</a>
            <a className="nava" href="https://drive.google.com/drive/search?q=RESUME">RESUME</a>
        </div>
        <DateTime></DateTime>

      
      </div>
    );
  }
}
 
export default Nav