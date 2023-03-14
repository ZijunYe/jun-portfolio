import './App.css';
import Background from './components/Background'; 
import Nav from './components/Nav'; 
import Menu from './components/Menu'; 
import Footer from './components/Footer';


function App() {
  return (
    <div className="Container">
      <Nav />
      <Background />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
