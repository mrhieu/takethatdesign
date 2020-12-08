import React from 'react';
import { Link } from 'gatsby';
import './FeaturedProducts.scss';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import ProductService from '../../services/productService';

export default ({ listData }) => {
  const data = listData.splice(0, 6); // Only show the first 4 items

  return (
    <div className="featured-products">
      <div className="row">
        {
          data.map(item => (
            <div className="product-item col-xl-2 col-lg-3 col-md-4 col-6" key={item.id}>
              <div className="item-icon">
                <Link to={ `/${ ProductService.getProductUrl(item) }` }>
                  <ImageWrapper imageData={ item.productImage.icon } />
                </Link>
              </div>
              <div className="item-title text-ellipsis">
                <Link to={ `/${ ProductService.getProductUrl(item) }` }>
                  { item.title }
                </Link>
                <div className="item-short-description text-muted text-ellipsis">
                  { item.shortDescription }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
