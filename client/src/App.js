import React from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <Router>
    {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer/>
    </Router>
        </>
  );
}

export default App;
