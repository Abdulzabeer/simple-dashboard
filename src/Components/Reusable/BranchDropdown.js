import React, { Component } from "react";

export class BranchDropdown extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Select Branch</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>CSE</option>
            <option>ISE</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>CIV</option>
            <option>MECH</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default BranchDropdown;
