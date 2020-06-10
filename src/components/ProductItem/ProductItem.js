import React from 'react';
import { Link, navigate } from 'gatsby';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './ProductItem.scss';

export default ({ data, onTagClick }) => {
  const { frontmatter: itemData } = data;
  const { slug } = data.fields;

  const handleTagClick = (type, name) => {
    onTagClick({type, name});
  }

  const goToDetail = () => {
    navigate(slug);
  }

  return (
    <div className="product-item">
      {
        itemData.smallThumbnails &&
        <div className="item-image-stack" role="button" tabIndex="0" onKeyDown={() => {}} style={{backgroundColor: itemData.color }} onClick={goToDetail}>
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
            <Link to={ `/${slug}` } title={ itemData.title }>
              <img src={ itemData.icon } alt="" />
            </Link>
          </div>

          <div className="font-bold text-ellipsis">
            <Link to={ `/${slug}` } title={ itemData.title }>
              { itemData.title }
            </Link>
          </div>
          <div className="text-muted text-sm text-ellipsis" title={ itemData.description }>
            { itemData.shortDescription }
          </div>
          <div className="item-tags">
            <OverlayTrigger
              overlay={
                <Tooltip>
                  Framework
                </Tooltip>
              }
            >
              <button onClick={() => handleTagClick('framework', itemData.framework)} className="tag tag-sm">
                { itemData.framework }
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              overlay={
                <Tooltip>
                  Category
                </Tooltip>
              }
            >
              <button onClick={() => handleTagClick('category', itemData.category)} className="tag tag-sm">
                { itemData.category }
              </button>
            </OverlayTrigger>
          </div>
        </div>

        <Link to={ `/${slug}` } title={ itemData.title } className="item-price">
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
        </Link>
      </div>
    </div>
  )
}
