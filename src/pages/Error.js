import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div class="container">
      <div class="row text-center">
        <div class="col-md-12">
          <div class="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div class="error-actions text-center">
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
