import React, { Component } from "react";
import { Link } from "react-router-dom";
class dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Mapaka <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Users
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/add-user">
                    Add User
                  </Link>
                  <Link className="dropdown-item" to="/update-user">
                    Update user
                  </Link>
                  <Link className="dropdown-item" to="/view-user">
                    View User
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Subjects
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="add-subject">
                    Add Subjects
                  </Link>
                  <Link className="dropdown-item" to="update-subject">
                    Update Subjects
                  </Link>
                  <Link className="dropdown-item" to="view-subject">
                    View Subjects
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Topics
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="add-topic">
                    Add Topic
                  </Link>
                  <Link className="dropdown-item" to="update-topic">
                    Update Topic
                  </Link>
                  <Link className="dropdown-item" to="view-topic">
                    View Topic
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/progress" className="nav-link">
                  progress
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/performance" className="nav-link">
                  Overall performance
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default dashboard;
