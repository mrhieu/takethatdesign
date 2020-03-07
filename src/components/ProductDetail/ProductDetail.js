import React from 'react';
import { Link } from 'gatsby';
import format from 'date-fns/format';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './ProductDetail.scss';

export default ({ data }) => {
  const { html: htmlContent } = data.markdownRemark;
  const { frontmatter: metadata } = data.markdownRemark;

  return (
    <article className="product-detail h-entry" itemScope itemType="http://schema.org/BlogPosting">
      <div className="product-summary">
        <div className="item-icon">
          <img src={ metadata.icon } alt="" />
        </div>
        <div className="item-info">
          <div className="item-title">
            { metadata.title }
          </div>

          <div>
            <span className="text-muted">Created on </span>
            { format(new Date(metadata.createdAt), 'MMM dd, yyyy') }
          </div>
          <div>
            <span className="text-muted">Framework </span>
            <Link to={`/?q=${metadata.framework}`} className="tag tag-sm">{ metadata.framework }</Link>
          </div>
          <div>
            <span className="text-muted">Category </span>
            <Link to={`/?q=${metadata.category}`} className="tag tag-sm">{ metadata.category }</Link>
          </div>
          <div className="tags">
            {
              metadata.tags.map(tag => (
                <Link
                  key={tag}
                  className="tag tag-sm"
                  to={`/?q=${tag}`}
                >
                  {tag}
                </Link>
              ))
            }
          </div>
        </div>

        <div className="mb-4">
          <Dropdown>
            <Dropdown.Toggle variant="dark" size="lg" block className="btn-split">
              { metadata.price > 0 ? 'Buy now' : 'Free Download' }
              <div className="btn-addon" title={`USD$${ metadata.price }`}>
                ${ metadata.price }
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
                metadata.gumroadUrl &&
                <Dropdown.Item href={ metadata.gumroadUrl } target="_blank" rel="noopener noreferrer">
                  <Icon className="icon-sm" path={mdiOpenInNew} /> Pay via Gumroad
                </Dropdown.Item>
              }

              {
                metadata.paypalUrl &&
                <Dropdown.Item href={ metadata.paypalUrl } target="_blank" rel="noopener noreferrer">
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip>
                        Please Add a note <br/><strong>{ metadata.title }</strong><br/> during your payment
                      </Tooltip>
                    }
                  >
                    <div>
                      <Icon className="icon-sm" path={mdiOpenInNew} /> Pay via Paypal
                    </div>
                  </OverlayTrigger>
                </Dropdown.Item>
              }

              <div className="dropdown-divider"></div>

              {
                metadata.githubUrl &&
                <Dropdown.Item href={ metadata.githubUrl } target="_blank" rel="noopener noreferrer">
                  <Icon className="icon-sm" path={mdiOpenInNew} /> View on Github
                </Dropdown.Item>
              }

              {
                metadata.marketUrl &&
                <Dropdown.Item href={ metadata.marketUrl } target="_blank" rel="noopener noreferrer">
                  <Icon className="icon-sm" path={mdiOpenInNew} /> View on Ionic Market
                </Dropdown.Item>
              }

            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="product-thumbnail-container">
        <ul className="thumbnail-list">
          {
            metadata.thumbnails.map((imageUrl, index) => (
              <li key={imageUrl} className="thumbnail-item" data-fancybox="gallery" data-caption={`Screenshot #${index + 1}`} data-src={imageUrl}>
                <img src={ imageUrl } alt="" />
              </li>
            ))
          }
        </ul>
      </div>

      <div
        className="product-content e-content"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  )
}
