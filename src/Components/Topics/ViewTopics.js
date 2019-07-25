import React, { Component } from "react";

export class ViewTopics extends Component {
  render() {
    this.state = {
      FirstField: "Topic Name",
      SecondField: "Subject it belongs",
      ThirdField: "Branch",
      title: "View All Students",
      array: [
        { id: 1, topicname: "Java", subject: "Software", branch: "cse" },
        { id: 2, topicname: "Java", subject: "Software", branch: "cse" },
        { id: 3, topicname: "Java", subject: "Software", branch: "cse" }
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
                    <td>{user.topicname}</td>
                    <td>{user.subject}</td>
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

export default ViewTopics;
