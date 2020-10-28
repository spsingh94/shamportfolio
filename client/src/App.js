import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Photography from "./pages/Photography";
import MCLA from "./pages/MCLA";
import BizDashboard from "./pages/BizDashboard";
import Backpack from "./pages/Backpack";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* <Route exact path="/photography" component={Photography} /> */}
        <Route path="/mcla" component={MCLA} />
        <Route path="/biz" component={BizDashboard} />
        <Route path="/backpack" component={Backpack} />
        <Route exact path="/" component={Home} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
