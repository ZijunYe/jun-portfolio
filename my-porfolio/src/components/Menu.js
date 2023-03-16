import './main.css'; 
import React, { useState } from 'react'; 

 
function Menu (props){

  function setFile(){
      setFile(true); 
  }

    return (
      <div className="menu">
          <button className="item menu-item1" onClick={() => {props.display(1);}}>
            <img src='images/icons/readme-icon.png' alt="readme file icon"/>
            <p>README.md</p>
        </button>
        <button className="item menu-item2" onClick={() => {props.display(2);}}>
            <img src='images/folder_icon.png' alt="folder icon"/>
            <p>PROJECTS</p>
        </button>

        <button className="item menu-item3" onClick={() => {props.display(3);}}>
            <img src='images/folder_icon.png' alt="folder icon"/>
            <p>BLOGS</p>
        </button>

        <button className="item menu-item4" onClick={() => {props.display(4);}}>
            <img src='images/trash_icon.png' alt="trash icon"/>
            <p>TRASH</p>
        </button>
      </div>
      



    );
  }
 
export default Menu;