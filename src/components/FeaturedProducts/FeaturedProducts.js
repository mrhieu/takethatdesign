import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import './FeaturedProducts.scss';

export default ({ listData }) => {
  const data = listData.splice(0, 6); // Only show the first 4 items

  return (
    <div className="featured-products">
      <div className="row">
        {
          data.map(item => (
            <div className="product-item col-xl-2 col-lg-3 col-md-4 col-6" key={item.id}>
              <div className="item-icon">
                <Link to={ `/${item.slug}` }>
                  <img src={ item.icon } alt=""/>
                  <Img fluid={item.productImage.icon.asset.fluid} />
                </Link>
              </div>
              <div className="item-title text-ellipsis">
                <Link to={ `/${item.slug}` }>
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
