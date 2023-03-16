import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Background from './components/Background'; 
import Readme from './components/Readme';
import Error from "./components/Error"; 
import Nav from './components/Nav'; 
import Menu from './components/Menu'; 
import Footer from './components/Footer';


function App() {
  const [file, setFile] = useState(0);
  const id = (data)=>{
    setFile(data)
  }
  
  return (
    <div className="Container">
      <Nav />
      <Background/>
      {file ===1 && <Readme/>}
      {file ===2 && <Error />}
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
