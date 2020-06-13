import React from 'react';
import { Link } from 'gatsby';
import './FeaturedProducts.scss';

export default ({ listData }) => {
  const data = listData.splice(0, 4);

  return (
    <div className="featured-products">
      <div className="row">
        {
          data.map(item => (
            <div className="product-item col-md-3 col-6" key={item.id}>
              <div className="item-icon">
                <Link to={ `/${item.slug}` }>
                  <img src={ item.icon } alt=""/>
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
