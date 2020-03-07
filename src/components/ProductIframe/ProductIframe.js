import React from 'react';
import { Link } from 'gatsby';
import format from 'date-fns/format';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../ProductDetail/ProductDetail.scss';
import './ProductIframe.scss';

export default ({ data }) => {
  const { html: htmlContent } = data.markdownRemark;
  const { frontmatter: metadata } = data.markdownRemark;

  return (
    <article className="product-detail no-sidebar h-entry embedded" itemScope itemType="http://schema.org/BlogPosting">
      {
        metadata.price > 0 &&
        <div className="mb-4">
          <h4>Payment Methods</h4>
          <div>
            <p>[1] Pay via <strong>Stripe</strong> using the button <strong>PURCHASE ${ metadata.price }</strong> on the side.</p>
            <p>[2] Pay via <strong>Gumroad</strong></p>

            <p>
              <a href={ metadata.gumroadUrl }>
                <img src="/images/btn_gumroad.png" alt="Purchase Externally" />
              </a>
            </p>

            <p>[3] Pay via <strong>Paypal</strong>. Please let me know the name of the item by sending me an email <a href="mailto:mr_hie@yahoo.com">mr_hie@yahoo.com</a> <strong>before</strong> you process the payment. Thanks.</p>

            <p>
              <a href={ metadata.paypalUrl }>
                <img src="/images/btn_paypal.png" alt="Purchase Externally" />
              </a>
            </p>

          </div>
        </div>
      }
      <div
        className="product-content e-content"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  )
}
