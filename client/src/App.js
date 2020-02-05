import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductsPage from "./pages/Products";
import CompanyPage from "./pages/Company";
import ContactPage from "./pages/Contact";
import NewsroomPage from "./pages/Newsroom";
import SPDT from "./pages/products/SPDT";
import TRANSFER from "./pages/products/TRANSFER";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "RF/MICROWAVE PRODUCTS",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "About", path: "/about" },
        { title: "Company", path: "/company" },
        { title: "Contact", path: "/contact" },
        { title: "Newsroom", path: "/newsroom" }
      ],
      home: {
        title: "RF/MICROWAVE PRODUCTS",
        subTitle: "Technology ​for everything wireless and the testing there of...",
        text: "Checkout my projects"
      },
      products: {
        title: "You're never too old!",
        subTitle: "Featured Projects",
        text: "Checkout my projects"
      },
      about: {
        title: "About the Company"
      },
      company: {
        title: "You can reach me any time!"
      },
      contacts: {
        title: "My Projects"
      },
      newsroom: {
        title: "My Projects"
      }
    }
  }

  render() {
    const { title, subTitle, text, home, about } = this.state;
    return (
      <Router>
        <Container className="container" fluid={true}>
          <NavBar className="border-bottom" sticky="top" bg="dark" variant="dark" expand="lg">
            <NavBar.Brand>e360microwave</NavBar.Brand>
            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/products">Products</Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/SPDT">SPDT</NavDropdown.Item>
                  <NavDropdown.Item href="/TRANSFER">TRANSFER</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/company">Company</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/newsroom">Newsroom</Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
          <Route path="/" exact render={() => <HomePage
            title={home.title}
            subTitle={home.subTitle}
            text={home.text}
          />} />
          <Route path="/products" render={() => <ProductsPage />} />
          <Route path="/SPDT" render={() => <SPDT />} />
          <Route path="/TRANSFER" render={() => <TRANSFER />} />
          <Route path="/about" render={() => <AboutPage
            title={about.title}
          />} />
          <Route path="/company" render={() => <CompanyPage />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/newsroom" render={() => <NewsroomPage />} />
          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;