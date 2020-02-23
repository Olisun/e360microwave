import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Transition } from 'react-transition-group';
import { WOW } from 'wowjs/dist/wow';

import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/home/Home";
import AboutPage from "./pages/about/About";
// import ProductsPage from "./pages/Products";
import CompanyPage from "./pages/company/Company";
import ContactPage from "./pages/contact/Contact";
import NewsroomPage from "./pages/Newsroom";
import SPDT from "./pages/products/SPDT";
import TRANSFER from "./pages/products/TRANSFER";
import SP3T_SP6T from "./pages/products/SP3T-SP6T";
import SP7T_SP8T from "./pages/products/SP7T-SP8T";
import SP9T_SP10T from "./pages/products/SP9T-SP10T";
import SP11T_SP12T from "./pages/products/SP11T-SP12T";
import Lo_PIM from "./pages/products/Lo-PIM";
import RuggedizedSwitches from "./pages/products/RuggedizedSwitches";
import SwitchMatrix from "./pages/products/SwitchMatrix";
import PHSwitchParameters from "./pages/products/PHSwitchParameters";
import ModelNumbers from "./pages/products/ModelNumbers";
import ScrollToTop from "./components/ScrollToTop";


class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "RF/MICROWAVE PRODUCTS",
      headerLinks: [
        { title: "Home", path: "/" },
        // { title: "Products", path: "/products" },
        { title: "About", path: "/about" },
        { title: "Company", path: "/company" },
        { title: "Contact", path: "/contact" },
        { title: "Newsroom", path: "/newsroom" }
      ],
      home: {
        title: "RF/MICROWAVE PRODUCTS",
        subTitle: "Technology ​for everything wireless and the testing there of...",
        text: "Let's get started!"
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
      },
      isOpen: false
    }
  }

  componentDidMount() {
    new WOW().init()
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { title, subTitle, text, home, about } = this.state;
    const { location } = this.props;
    const { isOpen } = this.state;
    return (
      <Router>
        <ScrollToTop />
        <Container className="container" fluid={true}>
          <Navbar className="border-bottom" sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>e360microwave</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                {/* <Transition> */}
                <NavDropdown
                  title="Products"
                  id="basic-nav-dropdown"
                  onMouseEnter={this.handleOpen}
                  onMouseLeave={this.handleClose}
                  open={isOpen}
                  noCaret id="language-switcher-container">
                  <NavDropdown.Item href="/SPDT">SPDT</NavDropdown.Item>
                  <NavDropdown.Item href="/TRANSFER">TRANSFER</NavDropdown.Item>
                  <NavDropdown.Item href="/SP3T-SP6T">SP3T-SP6T</NavDropdown.Item>
                  <NavDropdown.Item href="/SP7T-SP8T">SP7T-SP8T</NavDropdown.Item>
                  <NavDropdown.Item href="/SP9T-SP10T">SP9T-SP10T</NavDropdown.Item>
                  <NavDropdown.Item href="/SP11T-SP12T">SP11T-SP12T</NavDropdown.Item>
                  <NavDropdown.Item href="/Lo-PIM">Lo-PIM</NavDropdown.Item>
                  <NavDropdown.Item href="/Ruggedized-Switches">Ruggedized Switches</NavDropdown.Item>
                  <NavDropdown.Item href="/Switch-Matrix">Switch Matrix</NavDropdown.Item>
                  <NavDropdown.Item href="/Power-Handling-Chart-&-Typical-Switch-Parameters">Power Handling Chart & Typical Switch Parameters</NavDropdown.Item>
                  <NavDropdown.Item href="/Model-Numbers">Model Numbers</NavDropdown.Item>
                </NavDropdown>
                {/* </Transition> */}
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/company">Company</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/newsroom">Newsroom</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage
            title={home.title}
            subTitle={home.subTitle}
            text={home.text}
          />} />
          {/* <Route path="/products" render={() => <ProductsPage />} /> */}
          <Route path="/SPDT" render={() => <SPDT />} />
          <Route path="/TRANSFER" render={() => <TRANSFER />} />
          <Route path="/SP3T-SP6T" render={() => <SP3T_SP6T />} />
          <Route path="/SP7T-SP8T" render={() => <SP7T_SP8T />} />
          <Route path="/SP9T-SP10T" render={() => <SP9T_SP10T />} />
          <Route path="/SP11T-SP12T" render={() => <SP11T_SP12T />} />
          <Route path="/Lo-PIM" render={() => <Lo_PIM />} />
          <Route path="/Ruggedized-Switches" render={() => <RuggedizedSwitches />} />
          <Route path="/Switch-Matrix" render={() => <SwitchMatrix />} />
          <Route path="/Power-Handling-Chart-&-Typical-Switch-Parameters" render={() => <PHSwitchParameters />} />
          <Route path="/Model-Numbers" render={() => <ModelNumbers />} />
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

export default App2;