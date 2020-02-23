import React from 'react';
import './GumroadForm.scss';

export default () => (
  <React.Fragment>
    <form action="https://gumroad.com/follow_from_embed_form" className="form gumroad-follow-form-embed" method="post">
      <input name="seller_id" type="hidden" value="9272340532322" />
      <input name="email" placeholder="Your email address" type="email" />
      <button data-custom-highlight-color="" type="submit">Follow</button>
    </form>
    <div className="form-brand">
      Powered by <a href="https://gumroad.com" target="_blank" rel="noopener noreferrer">Gumroad</a>
    </div>
  </React.Fragment>
)
