import React from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList/ProductList';

export default ({ location }) => {
  return (
    <Layout
      metaTags={{
        pageUrl: location.href,
      }}
      location={ location }
    >
      <div className="product-container">
        <ProductList location={location}/>
      </div>
    </Layout>
  )
}
