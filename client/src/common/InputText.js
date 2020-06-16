import React, { Component } from "react";

import PropTypes from "prop-types";
export default class InputText extends Component {
  /**
   * props
   * 1.id =  id - to differentiate an input from another
   * 2. value = inputValue -  default value of the input
   * 3. action = action -  function to be triggered onChange
   * 4. type - text
   * 5.error = error -  boolean
   * 6.errorMsg = errorMsg - string
   */

  render() {
    const {
      cardId,
      handleUserInput,
      error,
      placeholder,
      errorMsg,
      name,
      inputValue
    } = this.props;
    // console.log("state is ", inputValue);
    return (
      <input
        id={cardId}
        type="text"
        placeholder={placeholder}
        onChange={handleUserInput}
        name={name}
        value={inputValue}
        error={!!error}
        errorMsg={errorMsg}
      />
    );
  }
}
InputText.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  action: PropTypes.func,
  name: PropTypes.string,
  inputValue: PropTypes.any,
  error: PropTypes.bool,
  errorMsg: PropTypes.string
};
