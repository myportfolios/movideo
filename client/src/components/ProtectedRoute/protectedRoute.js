import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class ProtectedRoute extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("./my-collections");
    } else {
      this.props.history.push("./login");
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
export default withRouter(ProtectedRoute);
