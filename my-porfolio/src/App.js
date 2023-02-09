import './App.css';
import Background from './components/Background'; 
import Nav from './components/Nav'; 
import Menu from './components/Menu'; 
import Footer from './components/Footer'

function App() {
  return (
    <div className="Container">
      <Nav />
      <Background />
      <Menu />
      <p className='main-p'>All rights reserved made by zijun © 2023</p>
    </div>
  );
}

export default App;
