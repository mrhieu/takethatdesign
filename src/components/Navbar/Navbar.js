import React from 'react';
import { Link } from 'gatsby';
import Logo from '../Logo/Logo';
import './Navbar.scss';

const NEW_POST_URL = 'https://medium.com/ionic-prototyping/my-journey-to-sanity-io-fe0a6576a417';

export default () => (
  <header role="banner">
    <div className="top-announcement">
      Blog post: <a href={NEW_POST_URL} target="_blank" rel="noopener noreferrer">
        My journey to Sanity.io
      </a>
    </div>

    <div className="header-wrapper">
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <div className="navbar-logo d-flex flex-row align-items-center justify-content-between">
          <Link to={'/'}>
            <Logo />
          </Link>
          <div className="tagline">
            <span className="color-black font-bold">
              Take That Design <span className="d-none d-sm-inline">: </span>
            </span>
            <span className="text-muted d-none d-sm-inline">
              Kick start your next <span className="text-dark">Ionic</span> project
            </span>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="menu-item">
            <Link to={`/about`}>About</Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)
