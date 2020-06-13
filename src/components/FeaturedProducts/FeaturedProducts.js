import React from 'react';
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
                <img src={ item.icon } alt=""/>
              </div>
              <div className="item-title text-ellipsis">
                { item.title }
              </div>
              <div className="item-short-description text-muted text-ellipsis">
                { item.shortDescription }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
