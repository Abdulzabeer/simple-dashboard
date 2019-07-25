import React, { Component } from "react";
import "../App.css";
class circleCard extends Component {
  render() {
    const { SubjectName, newValue } = this.props;
    return (
      <React.Fragment>
        <div className="col-md-3 col-sm-6">
          <h6>{SubjectName}</h6>
          <div className="progress1 pink">
            <span className="progress-left1">
              <span className="progress-bar1" />
            </span>
            <span className="progress-right1">
              <span className="progress-bar1" />
            </span>
            <div className="progress-value">{newValue}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default circleCard;
