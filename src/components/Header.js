import React from "react";
import NavBar from "./NavBar";

function Header({ title, author }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>by {author}</p>
      <NavBar />
    </header>
  );
}

export default Header;
