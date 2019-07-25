import React, { Component } from "react";
import "../App.css";
export class TopOverallPerform extends Component {
  render() {
    const { usn, name, grade, gradeValue, heading } = this.props;
    return (
      <React.Fragment>
        <h2 className="text-center">{heading}</h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-sm-5 border PerformanceCardStyle">
              <div className="row">
                <div className="col-sm-4">
                  <i className="fas fa-user-plus fa-2x" />
                </div>
                <div className="col-sm-8">
                  <h2>{usn}</h2>
                  <p>{name}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-4">
                  <i className="fas fa-signal fa-2x" />
                </div>
                <div className="col-sm-8">
                  <h2>{grade}</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-5 PerformanceCardStyle1">
              <div className="row">
                <div className="col-sm-3" />
                <div className="col-md-3 col-sm-6">
                  <div className="progress1 blue">
                    <span className="progress-left1">
                      <span className="progress-bar1" />
                    </span>
                    <span className="progress-right1">
                      <span className="progress-bar1" />
                    </span>
                    <div className="progress-value">{gradeValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopOverallPerform;
