import React, { Component } from "react";
import AddUser from "./AddUser";

export class UpdateUser extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <AddUser />
            </div>
            <div className="col-sm-6">
              <AddUser />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateUser;
