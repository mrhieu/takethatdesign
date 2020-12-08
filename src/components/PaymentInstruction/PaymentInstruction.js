import React from 'react';

export default ({ data }) => (
  <div>
    <h3>Payment Methods</h3>
    <div>
      <p><span className="badge badge-secondary">1</span> Pay via <strong>Stripe</strong> using the button <strong>PURCHASE ${ data.price }</strong> on the side.</p>
      <p><span className="badge badge-secondary">2</span> Pay via <strong>Gumroad</strong></p>

      <p>
        <a href={ data.productLink.gumroadUrl } target="_blank" rel="noreferrer noopener">
          <img src="/images/btn_gumroad.png" alt="Purchase Externally" />
        </a>
      </p>

      <p><span className="badge badge-secondary">3</span> Pay via <strong>Paypal</strong>. Please let me know the name of the item by sending me an email <a href="mailto:mr_hie@yahoo.com">mr_hie@yahoo.com</a> <strong>before</strong> you process the payment. Thanks.</p>

      <p>
        <a href={ `https://paypal.me/mrhieu/${data.price}` } target="_blank" rel="noreferrer noopener">
          <img src="/images/btn_paypal.png" alt="Purchase Externally" />
        </a>
      </p>

    </div>
  </div>
)
