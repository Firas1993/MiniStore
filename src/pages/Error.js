import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions text-center">
              <Link to="/" className="btn btn-primary">
                return home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
