import React from 'react';
import GumroadForm from '../GumroadForm/GumroadForm';
import './Footer.scss';

export default () => (
  <footer className="footer-wrapper">
    <div className="container d-flex flex-row align-items-center justify-content-between flex-wrap">
      <div className="email-form">
        <div className="email-form-label">
          Join 1,100+ happy customers and developers
        </div>

        <GumroadForm />
      </div>

      <div className="page-seal">
        <div className="text-center text-muted">
          ┐( ˘_˘ )┌
        </div>
        <div className="text-center text-xxs text-muted">
          {new Date().getFullYear()}, by <a href="https://hieugoesto.com" className="font-bold text-dark">Hieu Pham</a>
        </div>
      </div>
    </div>
  </footer>
)
