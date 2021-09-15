import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://i5.walmartimages.com/asr/47b7bd68-bce5-4cb2-b57f-381531f82d9d_1.06ab7077c44dc2bc31e15e916d5e2865.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff' className="App-logo" alt="logo" />
        <Home />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
