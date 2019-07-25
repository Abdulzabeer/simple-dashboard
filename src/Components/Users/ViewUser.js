import React, { Component } from "react";

export class ViewUser extends Component {
  render() {
    this.state = {
      FirstField: "Name",
      SecondField: "Email",
      ThirdField: "USN",
      title: "View All Students",
      array: [
        { id: 1, name: "abdul", email: "abdul@gmail.com", usn: "1cg14cs001" },
        { id: 2, name: "abdul", email: "abdul@gmail.com", usn: "1cg14cs001" },
        { id: 3, name: "abdul", email: "abdul@gmail.com", usn: "1cg14cs001" }
      ]
    };
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="text-center">{this.state.title}</h2>
          <hr />
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">{this.state.FirstField}</th>
                <th scope="col">{this.state.SecondField}</th>
                <th scope="col">{this.state.ThirdField}</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {this.state.array.map(user => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.usn}</td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                      <button className="btn btn-warning">Update</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewUser;
