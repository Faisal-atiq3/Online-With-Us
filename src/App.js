
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Menubar from './Components/Menubar/Menubar';
import Course from './Components/Course/Course';
import Courses from './Components/Courses/Courses';


function App() {
  return (
    <div >
     
      <Router>
        <Menubar></Menubar>
        <Switch>
          
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
         
          
          </Route>
          <Route path ="/details">
            <Details></Details>
          </Route>
          <Route path ="/about">
            <About></About>
          </Route>
          <Route path ="/course">
            <Course></Course>
          </Route>

          
          <Route path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
