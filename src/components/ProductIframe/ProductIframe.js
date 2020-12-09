import React from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import '../ProductDetail/ProductDetail.scss';
import './ProductIframe.scss';
import ProductService from '../../services/productService';
import ProductAnnouncement from '../ProductAnnouncement/ProductAnnouncement';
import ProductCompatibility from '../ProductCompatibility/ProductCompatibility';
import PaymentInstruction from '../PaymentInstruction/PaymentInstruction';
import MyWorks from '../MyWorks/MyWorks';
import ProductPromotion from '../ProductPromotion/ProductPromotion';

export default ({ data }) => {
  const markdown = ProductService.generateMarkdown(data);

  return (
    <article className="product-detail no-sidebar h-entry embedded" itemScope itemType="http://schema.org/BlogPosting">
      <div className="product-content e-content mb-5">
        <ProductCompatibility data={ data } />
      </div>

      <div className="product-content e-content">
        <ProductAnnouncement />
      </div>

      {
        data.price > 0 &&
        <div className="mb-4 product-content e-content">
          <PaymentInstruction data={ data } />
        </div>
      }

      <div
        className="product-content e-content"
        itemProp="articleBody"
      >
        <ReactMarkdownWithHtml children={ markdown } allowDangerousHtml />
      </div>

      <div className="product-content e-content">
        <MyWorks />
      </div>

      <div className="mt-5 product-content e-content">
        <ProductPromotion />
      </div>
    </article>
  )
}
