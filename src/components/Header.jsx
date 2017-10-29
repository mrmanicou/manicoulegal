import React from "react";

function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://manicoulegal.com">
            <h1>Manicou Legal</h1>
          </a>
          <button className="button navbar-burger">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
