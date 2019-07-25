import React, { Component } from "react";
const oldWidth = {
  width: "75%"
};
const newWidth = {
  width: "90%"
};
export class SquareCard extends Component {
  render() {
    const { SubjectName, gradeValue, oldValue, NewValue } = this.props;
    return (
      <React.Fragment>
        <div class="card cardstyle">
          <div class="card-header text-center">{SubjectName}</div>
          <h1 class="text-center">{gradeValue}</h1>
          <h3>Old Progress</h3>
          <div class="progress">
            <div
              style={oldWidth}
              class="progress-bar"
              role="progressbar"
              aria-valuenow={oldValue}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {oldValue}
            </div>
          </div>
          <h3>New Progress</h3>
          <div class="progress">
            <div
              style={newWidth}
              class="progress-bar bg-success"
              role="progressbar"
              aria-valuenow={NewValue}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {NewValue}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SquareCard;
