import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Oliver Sun",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Projects", path: "/projects" }
      ],
      home: {
        title: "You're never too old!",
        subTitle: "Featured Projects",
        text: "Checkout my projects"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "You can reach me any time!"
      },
      projects: {
        title: "My Projects"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>e360microwave</NavBar.Brand>
            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About Me</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />



          <Footer />

        </Container>

      </Router>
    )
  }
}





export default App;