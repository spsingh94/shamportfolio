import React from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About';
import Work from './pages/Work';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Photography from "./pages/Photography";

function App() {
  return (
    <>
    <Router>
    {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/photography" component={Photography} />
        <Footer/>
    </Router>
        </>
  );
}

export default App;
