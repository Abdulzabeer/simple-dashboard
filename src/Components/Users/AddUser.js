import React, { Component } from "react";
import InputText from "../Reusable/InputText";
import image from "../../assests/male-circle-512.png";
import BranchDropdown from "../Reusable/BranchDropdown";
export class AddUser extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container backgroundFormAddUser">
          <h1 className="text-center">Add Users</h1>
          <div className="row">
            <div className="col-sm-6">
              <div className="main">
                <form>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <InputText label="First Names" type="text" />
                      </div>
                      <div className="col">
                        <InputText label="Last Name" type="text" />
                      </div>
                    </div>
                    <InputText label="University Seat Number" type="text" />
                    <InputText label="Email Address" type="email" />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <InputText label="Password" type="password" />
                  </div>
                  <BranchDropdown />
                  <button type="submit" className="btn btn-primary">
                    Add User
                  </button>
                </form>
              </div>
            </div>
            <div class="col-sm-6 main">
              <img src={image} alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddUser;
