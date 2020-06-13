import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiCubeOutline, mdiFingerprint } from '@mdi/js';
import Logo from '../Logo/Logo';
import './Navbar.scss';

const NEW_POST_URL = 'https://medium.com/ionic-prototyping/my-journey-to-sanity-io-fe0a6576a417';

export default ({ location }) => (
  <header role="banner">
    <div className="top-announcement">
      Blog post: <a href={NEW_POST_URL} target="_blank" rel="noopener noreferrer">
        My journey to Sanity.io
      </a>
    </div>

    <div className="header-wrapper">
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <div className="navbar-logo d-flex flex-row align-items-center justify-content-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="tagline">
            <Link to="/">
              <span className="color-black font-bold">
                Take That Design
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="menu-item">
            <Link to="/products" activeClassName="active" partiallyActive={true}>
              <Icon className="menu-icon" path={ mdiCubeOutline } />
              <span className="menu-text">Products</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/100ions/" activeClassName="active">
              <span className="menu-icon-text">#</span>
              <span className="menu-text">100ions</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/about/" activeClassName="active">
              <Icon className="menu-icon" path={ mdiFingerprint } />
              <span className="menu-text">About</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)
