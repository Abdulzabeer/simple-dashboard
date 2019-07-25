import React, { Component } from "react";
import TopOverallPerform from "./TopOverallPerform";
import SquareCard from "./SquareCard";
const space = {
  margin: "5%"
};
class Progress extends Component {
  render() {
    return (
      <div>
        <TopOverallPerform
          heading="Overall-Progress"
          usn="1CG14CS001"
          name="Ramesh"
          grade="Excellent"
          gradeValue="90%"
        />
        <h2 className="text-center" style={space}>
          Overall Progress of Subjects
        </h2>
        <hr />
        <div className="container">
          <div className="row">
            <div class="col-sm-4">
              <SquareCard
                SubjectName="Software Engineering"
                gradeValue="90%"
                oldValue="75"
                NewValue="90"
              />
            </div>
            <div class="col-sm-4">
              <SquareCard
                SubjectName="DBMS"
                gradeValue="90%"
                oldValue="75"
                NewValue="90"
              />
            </div>
            <div class="col-sm-4">
              <SquareCard
                SubjectName="System Engineering"
                gradeValue="90%"
                oldValue="75"
                NewValue="90"
              />
            </div>
          </div>
        </div>
        <h2 className="text-center" style={space}>
          Overall Progress of Topics
        </h2>
        <hr />
        <div className="container">
          <div className="row">
            <div class="col-sm-4">
              <SquareCard
                SubjectName="OOps"
                gradeValue="90%"
                oldValue="75"
                NewValue="90"
              />
            </div>
            <div class="col-sm-4">
              <SquareCard
                SubjectName="Java"
                gradeValue="90%"
                oldValue="75"
                NewValue="90"
              />
            </div>
            <div class="col-sm-4">
              <SquareCard
                SubjectName="Web"
                gradeValue="90%"
                oldValue="75"
                NewValue="90"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
