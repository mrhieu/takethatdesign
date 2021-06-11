import React from 'react';
import Seo from './Seo/Seo';
import Navbar from './Navbar/Navbar';

export default ({ children, metaTags, location }) => (
  <div className="layout-container">
    <Seo metaTags={metaTags} />
    <Navbar location={ location }/>
    <main className="page-content" aria-label="Content">
      <div className="container padder-v">
        {children}
      </div>
    </main>
  </div>
)
