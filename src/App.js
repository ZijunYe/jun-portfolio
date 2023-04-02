import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect,useRef} from 'react';
import Background from './components/Background'; 
import Readme from './components/Readme';
import Error from "./components/Error"; 
import Project from "./components/Project"; 
import Nav from './components/Nav'; 
import Menu from './components/Menu'; 
import Footer from './components/Footer';


function App() {
  const [file, setFile] = useState(0);
  let [isOpen, setIsOpen] = useState(true); 
  let menuRef = useRef(); 
  const id = (data)=>{
    setFile(data)
  }

  const value = (v)=>{
    setIsOpen(v)
  }

  useEffect(() =>{
    document.addEventListener("mousedown",(event)=>{

      if(!menuRef.current.contains(event.target)){setIsOpen(false); }
  })
})


  return (
    <div className="Container">
      <Nav />
      <div ref={menuRef}> 
        <Background/>
        {file ===1 && isOpen? <Readme />:null }
        {file ===2 && isOpen? <Project />:null}
        {file ===3 && isOpen? <Error />: null}
        {file ===4 && isOpen? <Error />:null}
      </div>
      <Menu display={id}/>
      <Footer />
    </div>
  );
}

export default App;


// <Background />
// <Readme /> 
// <Project /> 
// <Blog /> 
// <Error /> 

// state = true ==> display the passing value from children (coming from menu)
// else ==> display <Background /> 
// value come from children 1. state true/false 2. component name 
