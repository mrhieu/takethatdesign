import React from 'react';
import { Link } from 'gatsby';
import format from 'date-fns/format';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import './ProductDetail.scss';
import ProductRecommendation from '../ProductRecommendation/ProductRecommendation';
import ProductPromotion from '../ProductPromotion/ProductPromotion';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import ProductService from '../../services/productService';

export default ({ data }) => {
  const markdown = ProductService.generateMarkdown(data);

  return (
    <React.Fragment>
      <article className="product-detail h-entry" itemScope itemType="http://schema.org/BlogPosting">
        <div className="product-summary">
          <div className="item-icon">
            <ImageWrapper imageData={ data.productImage.icon } />
          </div>
          <div className="item-info">
            <div className="item-title">
              { data.title }
            </div>

            <div>
              <Link to={`/products?q=${data.framework.title}`} className="text-muted font-bold">{ data.framework.title }</Link>
              <span className="middot">·</span>
              <Link to={`/products?q=${data.category.title}`} className="text-muted font-bold">{ data.category.title }</Link>
            </div>

            <div>
              <span className="text-muted">Created on </span>
              { format(new Date(data.createdAt), 'MMM dd, yyyy') }
            </div>

            <div className="tags">
              {
                data.tags.map(tag => (
                  <Link
                    key={tag}
                    className="tag tag-sm"
                    to={`/products?q=${tag}`}
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
                { data.price > 0 ? 'Buy now' : 'Free Download' }
                <div className="btn-addon" title={`USD$${ data.price }`}>
                  ${ data.price }
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  data.productLink.gumroadUrl &&
                  <Dropdown.Item href={ data.productLink.gumroadUrl } target="_blank" rel="noopener noreferrer">
                    <Icon className="icon-sm" path={mdiOpenInNew} /> Pay via Gumroad
                  </Dropdown.Item>
                }

                {
                  data.price > 0 &&
                  <Dropdown.Item href={ `https://paypal.me/mrhieu/${data.price}` } target="_blank" rel="noopener noreferrer">
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip>
                          Please Add a note <br/><strong>{ data.title }</strong><br/> during your payment
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
                  data.productLink.githubUrl &&
                  <Dropdown.Item href={ data.productLink.githubUrl } target="_blank" rel="noopener noreferrer">
                    <Icon className="icon-sm" path={mdiOpenInNew} /> View on Github
                  </Dropdown.Item>
                }

                {
                  data.productLink.marketIonicUrl &&
                  <Dropdown.Item href={ data.productLink.marketIonicUrl } target="_blank" rel="noopener noreferrer">
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
              data.productImage.thumbnails.map((image, index) => (
                <li
                  key={image._key}
                  className="thumbnail-item"
                  data-fancybox="gallery"
                  data-caption={`Screenshot #${index + 1}`}
                  data-src={ ProductService.getImageDisplayUrl(image, true) }
                >
                  <ImageWrapper imageData={ image } isFixed={ true } />
                </li>
              ))
            }
          </ul>
        </div>

        <div
          className="product-content e-content"
          itemProp="articleBody"
        >
          <ReactMarkdownWithHtml children={ markdown } allowDangerousHtml />
        </div>
      </article>

      <div className="mt-5">
        <ProductPromotion />
      </div>

      <div className="mt-5">
        <ProductRecommendation
          itemData={ data }
        />
      </div>
    </React.Fragment>
  )
}
