import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
        <Navbar title="PlaywithText" about ="About" />
        <div className="container my-3"><Textform heading="Enter your text below in the box ..."/></div>
    </> );
}

export default App;
