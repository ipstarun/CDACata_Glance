import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-light bg-primary">
          <a className="navbar-brand" href="#">
            Admin CRUD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to={"/adduser"}>
            Add users
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default AdminNav;
