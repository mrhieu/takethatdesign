import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default ({ children }) => (
  <React.Fragment>
    <Navbar />
    <main className="page-content" aria-label="Content">
      <div className="container padder-v">
        {children}
      </div>
    </main>
    <Footer />
  </React.Fragment>
)
