import React from "react";
import { BASE_URL, IMAGE_POSTER_SIZES } from "services/api";
import axios from "axios";
import { API_URL } from "services/api";
import { connect } from "react-redux";
import "./card.scss";

export class ImageCard extends React.Component {
  renderImageCardJSX(arrayToMap, btnText) {
    const jsx =
      arrayToMap &&
      arrayToMap.map(item => {
        let posterPath = `${BASE_URL}${IMAGE_POSTER_SIZES}${item.poster_path}`;
        const requestBody = {
          title: item.title,
          overview: item.overview,
          year: item.release_date,
          poster: item.poster_path,
          rating: item.vote_average,
          movieId: item.id
        };
        const options = {
          headers: { token: this.props.token }
        };
        console.log(options.headers);
        const saveToCollectionsHandler = async () => {
          await axios
            .post(API_URL.POST_ADD_MOVIE, requestBody, options)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data));
          //save the selected movie to db
          //if successful, make a get cal to get all the movies for that particular user
          //save the get response to store
          //connect the collections component to store. when component mounts,fetch the list of movies from store
        };

        return (
          <div key={item.id} className="movie-card">
            <img
              src={posterPath}
              alt="movie poster"
              className="movie-card_poster"
            />
            <div className="movie-card_other-items">
              <h4 className="movie-card_other-items__title">{item.title}</h4>
              <h4 className="movie-card_other-items__rating">
                {item.vote_average}
              </h4>
              {/* <button className="movie-card_other-items__save-btn">
              {btnText}
            </button> */}
              <a
                href="#"
                className="movie-card_other-items__save-btn"
                onClick={() => {
                  saveToCollectionsHandler();
                }}
              >
                Save To Collections
              </a>
            </div>
          </div>
        );
      });
    return jsx;
  }
  render() {
    const { list, propsObj } = this.props;
    const btnText = propsObj.btnText;
    return (
      <div className="recent-movies-container">
        {this.renderImageCardJSX(list || [], btnText || {})}
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return {
    token: state.auth.authenticated
  };
};
export default connect(mapStateToProps, {})(ImageCard);
