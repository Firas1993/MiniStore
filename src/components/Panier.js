import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default class Panier extends Component {
  render() {
    return (
      <div>
        <Link to="/panier">
          <FaShoppingCart />
        </Link>
      </div>
    );
  }
}
