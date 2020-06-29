import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionsPresentation from "../Collections/CollectionsPresentation";
import { getCurrentUserCollections } from "store/actions/collections";
import { API_URL } from "services/api";
import axios from "axios";

class CollectionsContainer extends Component {
  getUserCollections = () => {
    axios
      .get(API_URL.GET_CURRENT_USER_COLLECTIONS)
      .then(res => this.props.getCurrentUserCollections(res.data))
      .catch(err => console.log(err));
  };

  async componentDidMount() {
    await this.getUserCollections();
  }
  render() {
    const { moviesCollections } = this.props;

    return (
      <div>
        <CollectionsPresentation list={moviesCollections} />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    moviesCollections: state.currentUserCollections.usersCollection
  };
};
export default connect(mapStateToProps, { getCurrentUserCollections })(
  CollectionsContainer
);
