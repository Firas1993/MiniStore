import React, { Component } from "react";
import { Link } from "react-router-dom";
import Panier from "../components/Panier";
export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand">
          Mini Store
        </Link>

        <Panier />
      </nav>
    );
  }
}
