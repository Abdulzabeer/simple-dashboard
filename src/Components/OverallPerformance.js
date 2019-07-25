import React, { Component } from "react";
import TopOverallPerform from "../Components/TopOverallPerform";
import CircleCard from "./circleCard";
const space = {
  margin: "5%"
};
export class OverallPerformance extends Component {
  render() {
    return (
      <React.Fragment>
        <TopOverallPerform
          heading="Overall-Performance"
          usn="1CG14CS001"
          name="Ramesh"
          grade="Excellent"
          gradeValue="90%"
        />
        <h1 className="text-center">Subject Wise Performance</h1>
        <hr />
        <div className="container" style={space}>
          <div className="row">
            <CircleCard SubjectName="Software Engineering" newValue="75%" />
            <CircleCard SubjectName="Software Engineering" newValue="75%" />
            <CircleCard SubjectName="Software Engineering" newValue="75%" />
            <CircleCard SubjectName="Software Engineering" newValue="75%" />
          </div>
        </div>
        <h1 className="text-center">Topic Wise Performance</h1>
        <hr />
        <div className="container" style={space}>
          <div className="row">
            <CircleCard SubjectName="Java" newValue="75%" />
            <CircleCard SubjectName="Java" newValue="75%" />
            <CircleCard SubjectName="Java" newValue="75%" />
            <CircleCard SubjectName="Java" newValue="75%" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OverallPerformance;
