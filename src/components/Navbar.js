import React, { Component } from "react";
import { Link } from "react-router-dom";
import Panier from "../components/Panier";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Mini Store
        </Link>

        <Panier />
      </nav>
    );
  }
}
