import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  linl
} from "react-router-dom";

import './App.css';
import Home from './companents/Home';
import {Contact} from './companents/Contact';
import { Experiences } from './companents/Experiences';
import TopNav from './companents/TopNav';
import { About } from './companents/About';
import { Projects } from './companents/Projects';

function App() {
  return (
    <Router>
      <div ClassName="App">
        <TopNav></TopNav>
        

        <Switch>

          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Experiences" element={<Experiences />}></Route>
          <Route path="/Contact" element={<Contact />}> </Route>
          <Route path="/About" element={<About />}> </Route>
          <Route path="/Projects" element={<Projects />}> </Route>

        </Switch>
      </div>
    </Router>

  )
}
export default App

