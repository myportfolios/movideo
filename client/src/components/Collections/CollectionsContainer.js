import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionsPresentation from "../Collections/CollectionsPresentation";

class CollectionsContainer extends Component {
  render() {
    return (
      <div>
        <CollectionsPresentation />
      </div>
    );
  }
}

export default CollectionsContainer;
