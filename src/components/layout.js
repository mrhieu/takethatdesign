import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import FbChat from './FbChat/FbChat';

export default ({ children }) => (
  <div className="layout-container">
    <Navbar />
    <main className="page-content" aria-label="Content">
      <div className="container padder-v">
        {children}
      </div>
    </main>
    <Footer />
    {
      process.env.NODE_ENV === 'production' &&
      <FbChat />
    }
  </div>
)
