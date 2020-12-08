import React from 'react';
import { Link, navigate } from 'gatsby';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './ProductItem.scss';
import ProductService from '../../services/productService';
import ImageWrapper from '../ImageWrapper/ImageWrapper';

const thirtyDays = 60 * 60 * 24 * 30 * 1000;

export default ({ data, onTagClick }) => {
  const slug = ProductService.getProductUrl(data);

  const handleTagClick = (type, name) => {
    onTagClick({type, name});
  }

  const goToDetail = () => {
    navigate(slug);
  }

  // A NEW item is the one that was created less than 30 days ago
  const isNew = () => {
    return new Date().getTime() - new Date(data.createdAt).getTime() < thirtyDays;
  }

  const smallThumbnails = data.productImage.thumbnails.slice(0, 3);

  return (
    <div className="product-item">
      {
        smallThumbnails.length > 0 &&
        <div
          className="item-image-stack"
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
          style={{backgroundColor: data.productImage.color.hex }}
          onClick={goToDetail}
        >
          {
            smallThumbnails.map(item => (
              <ImageWrapper key={ item._key } imageData={ item } isFixed={ true } />
            ))
          }
          {
            isNew() &&
            <div className="label-new">NEW</div>
          }
        </div>
      }

      <div className="item-footer">
        <div className="item-info">
          <div className="item-icon">
            <Link to={ `/${slug}` } title={ data.title }>
              <ImageWrapper imageData={ data.productImage.icon } />
            </Link>
          </div>

          <div className="font-bold text-ellipsis">
            <Link to={ `/${slug}` } title={ data.title }>
              { data.title }
            </Link>
          </div>
          <div className="text-muted text-sm text-ellipsis" title={ data.shortDescription }>
            { data.shortDescription }
          </div>
          <div className="item-tags">
            <OverlayTrigger
              overlay={
                <Tooltip>
                  Framework
                </Tooltip>
              }
            >
              <button onClick={() => handleTagClick('framework', data.framework.title)} className="tag tag-sm">
                { data.framework.title }
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              overlay={
                <Tooltip>
                  Category
                </Tooltip>
              }
            >
              <button onClick={() => handleTagClick('category', data.category.title)} className="tag tag-sm">
                { data.category.title }
              </button>
            </OverlayTrigger>
          </div>
        </div>

        <Link to={ `/${slug}` } title={ data.title } className="item-price">
          {
            data.price === 0 &&
            <span className="text-danger">Free</span>
          }

          {
            data.price !== 0 &&
            <span>
              ${ data.price }
            </span>
          }
        </Link>
      </div>
    </div>
  )
}
