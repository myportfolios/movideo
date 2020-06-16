import React, { useState } from "react";
// import { getOscarNominations } from "store/actions/oscars";
import { makeOscarCalls } from "utilities/utils";
import { Link } from "react-router-dom";
import "./header.scss";
/**
 *
 * can adda loader SVG to handle when we link to "/oscars"
 * it is set to false the moment we link to any of the specific oscarYears "/oscar/:oscarYear"
 */

export default function Header(props) {
  const { getOscarNominations, loggedIn, signOutUser, pushToHomePage } = props;

  const [oscarList, showOscarList] = useState(false);
  return (
    <nav className="header">
      <h1 className="logo">Movideo</h1>
      <ul className=" header__navs">
        <li className="navs--home">
          <Link to="/">HOME</Link>
        </li>
        <li className="navs--recent-movies">
          <Link to="/recent-movies">RECENT MOVIES</Link>
        </li>
        <li className="navs--cinemas">
          <Link to="/at-cinemas">AT CINEMAS</Link>
        </li>
        <li
          className="navs--oscar"
          onClick={() => {
            showOscarList(!oscarList);
          }}
        >
          {" "}
          <Link to="/oscars">OSCARS</Link>
          {!!oscarList && (
            <ul className="oscar-box">
              <li>
                <Link
                  to="/oscars/2012"
                  onClick={e => {
                    getOscarNominations(makeOscarCalls(e.target.textContent));
                  }}
                >
                  2012 NOMINATIONS
                </Link>
              </li>

              <li>
                <Link
                  to="/oscars/2011"
                  onClick={e => {
                    getOscarNominations(makeOscarCalls(e.target.textContent));
                  }}
                >
                  2011 NOMINATIONS
                </Link>
              </li>
              <li>
                <Link
                  to="/oscars/2010"
                  onClick={e => {
                    getOscarNominations(makeOscarCalls(e.target.textContent));
                  }}
                >
                  2010 NOMINATIONS
                </Link>
              </li>

              <li>
                <Link
                  to="/oscars/2009"
                  onClick={e => {
                    getOscarNominations(makeOscarCalls(e.target.textContent));
                  }}
                >
                  2009 NOMINATIONS
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navs--collections">
          {loggedIn && <Link to="/my-collections">COLLECTIONS</Link>}
        </li>
        {/* <li className="register">
          <a href="">REGISTER</a>
        </li> */}
        <li className="login">
          {!loggedIn ? (
            <Link to="/login">LOGIN</Link>
          ) : (
            <Link
              to="#"
              onClick={() => {
                signOutUser();
                pushToHomePage();
              }}
            >
              LOGOUT
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
