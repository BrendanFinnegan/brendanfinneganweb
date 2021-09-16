
import './App.css';
import Home from './Components/Home'
import Bottomnav from './Components/Bottomnav';
import { Route, Switch } from "react-router"
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import About from './Components/About';
import Portfolio from './Components/Portfolio';



function App() {
  return (
    <div className="App">
       <NavBar />
      {/* <header className="App-header">
        <img src='https://i5.walmartimages.com/asr/47b7bd68-bce5-4cb2-b57f-381531f82d9d_1.06ab7077c44dc2bc31e15e916d5e2865.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff' className="App-logo" alt="logo" /> */}
        
        
        <Switch>
          
        <Route exact path="/">
          <Home />
        </Route>


        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
        </Switch>



      {/* </header> */}

      <Bottomnav />
    </div>
  );
}

export default App;
