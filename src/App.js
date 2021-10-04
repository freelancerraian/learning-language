import './App.css';
import Home from './conponents/home/home';
import Header from './conponents/header/header';
import About from './conponents/about/about';
import Notfound from './conponents/notfound/notfound';
import Footer from './conponents/footer/footer';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Services from './conponents/services/services';
import Contact from './conponents/contact/contact';
import Stor from './conponents/stor/stor';

function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/stor">
            {/* <Stor></Stor> */}
            <Notfound></Notfound>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
