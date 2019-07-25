import React, { Component } from "react";

export class ViewSubjects extends Component {
  render() {
    this.state = {
      FirstField: "Subject Name",
      SecondField: "Subject code",
      ThirdField: "Branch",
      title: "View All Students",
      array: [
        { id: 1, subname: "software", code: "1234", branch: "cse" },
        { id: 2, subname: "software", code: "1234", branch: "cse" },
        { id: 3, subname: "software", code: "1234", branch: "cse" }
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
                    <td>{user.subname}</td>
                    <td>{user.code}</td>
                    <td>{user.branch}</td>
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

export default ViewSubjects;
