import React, { Component } from "react";

export default class Produit extends Component {
  render() {
    const { name, year, color } = this.props;
    return (
      <div className="col-md-6">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" data-holder-rendered="true" />
          <span className="text-center p-4">
            {name}
          </span>
          <div className="card-body">
            <p className="card-text" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  style={{ backgroundColor: { color } }}
                >
                  View
                </button>
              </div>
              <small className="text-muted">
                {year}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
