import React from 'react';
import { Link } from 'gatsby';

export default ({ data }) => {
  const { frontmatter: itemData } = data;
  const { slug } = data.fields;

  return (
    <div className="product-item">
      {
        itemData.smallThumbnails &&
        <div className="item-image-stack" style={{backgroundColor: itemData.color }}>
          {
            itemData.smallThumbnails.map(imageUrl => (
              <img key={ imageUrl } src={ imageUrl } alt="" />
            ))
          }
        </div>
      }

      {
        !itemData.smallThumbnails &&
        <div className="item-image">
          <img src={ itemData.thumbnail } alt="" />
          <Link to={ `/${itemData.marketUrl}` } className="item-image-overlay">
            <button className="btn btn-dark btn-view" data-title="{{ itemData.title }}">View</button>
          </Link>
        </div>
      }

      <div className="item-footer">
        <div className="item-info">
          <div className="item-icon">
            <Link to={ slug } title={ itemData.title }>
              <img src={ itemData.icon } alt="" />
            </Link>
          </div>

          <div className="font-bold text-ellipsis">
            <Link to={ slug } title={ itemData.title }>
              { itemData.title }
            </Link>
          </div>
          <div className="text-muted text-sm text-ellipsis" title={ itemData.description }>
            { itemData.shortDescription }
          </div>
          <div className="item-tags">
            <div className="tag tag-sm">
              { itemData.framework }
            </div>
            <div className="tag tag-sm">
              { itemData.category }
            </div>
          </div>
        </div>

        <a href={ slug } target="_blank" rel="noopener noreferrer" data-title={ itemData.title } className="item-price">
          {
            itemData.price === 0 &&
            <span className="text-danger">Free</span>
          }

          {
            itemData.price !== 0 &&
            <span>
              ${ itemData.price }
            </span>
          }
        </a>
      </div>
    </div>
  )
}
