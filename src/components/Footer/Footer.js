import React from 'react';
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiShopping } from '@mdi/js';
import GumroadForm from '../GumroadForm/GumroadForm';
import './Footer.scss';

export default () => (
  <footer className="footer-wrapper">
    <div className="container d-flex flex-row justify-content-between flex-wrap">
      <div className="email-form">
        <div className="email-form-label">
          Join 1,100+ happy customers and developers
        </div>

        <GumroadForm />
      </div>

      <div className="external-links">
        Elsewhere:
        <a href="https://www.facebook.com/takethatdesign" target="_blank" rel="noreferrer noopener">
          <Icon path={ mdiFacebook } size="28px" />
        </a>
        <a href="https://twitter.com/takethatdesign" target="_blank" rel="noreferrer noopener">
          <Icon path={ mdiTwitter } size="28px" />
        </a>
        <a href="https://market.ionicframework.com/user/66136" target="_blank" rel="noreferrer noopener">
          <Icon path={ mdiShopping } size="28px" />
        </a>
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
