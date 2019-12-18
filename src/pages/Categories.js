import React, { Component } from "react";
import SideBare from "../components/SideBare";
import Produit from "../components/Produit";
export default class Categories extends Component {
  render() {
    return (
      <div className="container">
        <div calssName="row">
          <div calssName="col-sm-3">
            <SideBare />
          </div>

          <div calssName="col-sm-9">
            <Produit />
          </div>
        </div>
      </div>
    );
  }
}
