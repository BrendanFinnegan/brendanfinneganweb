import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './Components/NavBar';
import Grid from '@material-ui/core/Grid'
ReactDOM.render(
  <Router>
<Grid container>
        <Grid item xs={12} >
       <NavBar />
     </Grid>
     <Grid item xs={12} >
    <App />
    </Grid>
    </Grid>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
