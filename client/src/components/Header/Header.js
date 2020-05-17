import React from "react";
import "./header.scss";

export default function Header() {
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
        <li className="navs--grammys">
          <a href="">GRAMMYs</a>
        </li>
        <li className="navs--collections">
          <a>COLLECTIONS</a>
        </li>
      </ul>
      <ul className="header__user-auth">
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
