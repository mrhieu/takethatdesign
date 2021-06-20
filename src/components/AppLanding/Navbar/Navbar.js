import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

export default ({ location }) => (
  <header role="banner">
    <div className="header-wrapper app-landing">
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <div className="navbar-logo d-flex flex-row align-items-center justify-content-between">
          <Link to="/twelveappofficial">
            <img src="/images/twelve/icon.png" className="landing-logo" alt=""/>
          </Link>
          <div className="tagline">
            <Link to="/">
              <span className="color-black font-bold">
                Twelve O'clock App
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)
