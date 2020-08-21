import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./pages/Work";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Photography from "./pages/Photography";
import MCLA from "./pages/MCLA";
import WorkBooks from "./pages/WorkBooks";
import SocFit from "./pages/SocFit";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <Router>
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/mcla" component={MCLA} />
        <Route exact path="/workbooks" component={WorkBooks} />
        <Route exact path="/socfit" component={SocFit} />
        <Footer />
      </Router>
    );
  }
}

export default App;
