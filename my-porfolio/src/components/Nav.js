import './main.css'; 
import React, { Component } from 'react';
 
class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <p>Logo</p>
        <div className='nav-item'>
             <a className="nav-a" href="https://www.linkedin.com/in/zijunye/">LINKEDIN</a>
             <a className="nav-a" href="https://github.com/ZijunYe">GITHUB</a>
             <a className="nav-a" href="zijunye@gmail.ca">GMAIL</a>
            <a className="nav-a" href="https://drive.google.com/drive/search?q=RESUME">RESUME</a>
        </div>


      </div>
    );
  }
}
 
export default Nav