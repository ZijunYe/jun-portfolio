import './main.css'; 
import React, { Component } from 'react';
 
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="item menu-item1">
            <img src='images/icons/readme-icon.png' alt="readme file icon"/>
            <p>README.md</p>
        </div>
        
        <div className="item menu-item2">
            <img src='images/icons/project-icon.png' alt="folder icon"/>
            <p>PROJECTS</p>
        </div>

        <div className="item menu-item3">
            <img src='images/icons/blog-icon.png' alt="folder icon"/>
            <p>BLOGS</p>
        </div>

        <div className="item menu-item4">
            <img src='images/icons/trash-icon.png' alt="trash icon"/>
            <p>TRASH</p>
        </div>
        
      </div>
    );
  }
}
 
export default Menu