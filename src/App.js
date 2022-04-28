import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Aboutme />
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
