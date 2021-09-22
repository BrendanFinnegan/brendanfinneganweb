
import './App.css';
import Home from './Components/Home'
import Bottomnav from './Components/Bottomnav';
import { Route, Switch } from "react-router"
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Grid from '@material-ui/core/Grid'


function App() {
  return (
    <>
    <NavBar />
    <div className="App">


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





 
      <Bottomnav />

    </div>
    </>
  );
}

export default App;
