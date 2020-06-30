import React, { useState } from "react";
// import { getOscarNominations } from "store/actions/oscars";
import { makeOscarCalls, notUndefined } from "utilities/utils";
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
          <Link
            to="/"
            onClick={() => {
              showOscarList(oscarList);
            }}
          >
            HOME
          </Link>
        </li>
        <li className="navs--recent-movies">
          <Link
            to="/recent-movies"
            onClick={() => {
              showOscarList(!oscarList);
            }}
          >
            RECENT MOVIES
          </Link>
        </li>
        <li className="navs--cinemas">
          <Link
            to="/at-cinemas"
            onClick={() => {
              showOscarList(!oscarList);
            }}
          >
            AT CINEMAS
          </Link>
        </li>
        <li
          className="navs--oscar"
          onClick={() => {
            showOscarList(!oscarList);
          }}
        >
          {" "}
          <Link to="#">OSCARS</Link>
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
          {!!notUndefined(loggedIn) && (
            <Link
              to="/my-collections"
              onClick={() => {
                showOscarList(oscarList);
              }}
            >
              COLLECTIONS
            </Link>
          )}
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

//fix the bug with display of osacrs_nav by setting it to "false" and not !oscarList
