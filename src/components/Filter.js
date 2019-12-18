import React, { Component } from "react";
import InputFilter from "./InputFilter";
export default class Filter extends Component {
  render() {
    const { name, elements } = this.props;
    const example = ["red", "blue", "green"];
    const nameEx = "Color";
    return (
      <div className="row">
        <div className="col-sm-12 text-center">
          <h5>
            Filter by {nameEx}
          </h5>
          <ul className="list-group">
            {example.map(item => {
              return (
                <li className="list-group-item">
                  <InputFilter key={item} item={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
