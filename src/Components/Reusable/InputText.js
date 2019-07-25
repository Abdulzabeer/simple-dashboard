import React, { Component } from "react";

export class InputText extends Component {
  render(props) {
    return (
      <React.Fragment>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          className="form-control"
          placeholder={`Enter ${this.props.label}`}
        />
      </React.Fragment>
    );
  }
}

export default InputText;
