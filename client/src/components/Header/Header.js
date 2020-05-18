import React, { useState } from "react";
import "./header.scss";

export default function Header() {
  const [oscarList, showOscarList] = useState(false);

  return (
    <nav className="header">
      <h1 className="logo">Movideo</h1>
      <ul className=" header__navs">
        <li className="navs--home">
          <a href="./">HOME</a>
        </li>
        <li className="navs--recent-movies">
          <a href="./recent-movies">RECENT MOVIES</a>
        </li>
        <li className="navs--cinemas">
          <a href="./at-cinemas">AT CINEMAS</a>
        </li>
        <li
          className="navs--oscar"
          onClick={() => {
            showOscarList(!oscarList);
          }}
        >
          {" "}
          <a>OSCARS</a>
          {!!oscarList && (
            <ul className="oscar-box">
              <li
                id="2012"
                onClick={e => {
                  console.log(e.target.textContent);
                }}
              >
                <a>2012 NOMINATIONS</a>
              </li>
              <li id="2011">
                <a>2011 NOMINATIONS</a>
              </li>
              <li id="2010">
                <a>2010 NOMINATIONS</a>
              </li>
              <li id="2009">
                <a>2009 NOMINATIONS</a>
              </li>
            </ul>
          )}
        </li>
        <li className="navs--collections">
          <a>COLLECTIONS</a>
        </li>
        <li className="signIn">
          <a href="">SIGN IN</a>
        </li>
        <li className="SignOut">
          <a href="">SIGN OUT</a>
        </li>
      </ul>
    </nav>
  );
}
