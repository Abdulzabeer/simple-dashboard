import React, { Component } from "react";
const Form = {
  textAlign: "center"
};
export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="logreg-forms">
          <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal" style={Form}>
              Sign in
            </h1>
            <div className="social-login">
              <button className="btn facebook-btn social-btn" type="button">
                <span>
                  <i className="fab fa-facebook-f" /> Sign in with Facebook
                </span>
              </button>
              <button className="btn google-btn social-btn" type="button">
                <span>
                  <i className="fab fa-google-plus-g" /> Sign in with Google+
                </span>
              </button>
            </div>
            <p style={Form}> OR </p>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
            />

            <button className="btn btn-success btn-block" type="submit">
              <i className="fas fa-sign-in-alt" /> Sign in
            </button>
            <a href="#" id="forgot_pswd">
              Forgot password?
            </a>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
