import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-4" />
            <div className="col-sm-4">
              <hr />
              <h1 className="text-center display-4">Take a Test</h1>
              <p className="text-center">
                You have to answers minimum 10 questions out of 20 questions to
                pass in the exam ,you have time of 10 minutes
              </p>
              <hr />
              <button
                type="button"
                className="btn btn-outline-primary btn-lg btn-block"
              >
                Start Test
              </button>
            </div>
            <div className="col-sm-4" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
