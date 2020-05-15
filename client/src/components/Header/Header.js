import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <h1 className="logo">Movideo</h1>
      <ul className=" header__navs">
        <li className="navs--recent-movies">RECENT MOVIES</li>
        <li className="navs--cinemas">AT CINEMAS</li>
        <li className="navs--grammys">GRAMMYs</li>
        <li className="navs--collections">COLLECTIONS</li>
      </ul>
      <ul className="header__user-auth">
        <li className="signIn">SIGN IN</li>
        <li className="SignOut">SIGN OUT</li>
      </ul>
    </div>
  );
}
