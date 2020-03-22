import React from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList/ProductList';

export default ({ location }) => {
  return (
    <Layout
      metaTags={{
        pageUrl: location.href,
      }}
    >
      <div className="hero-text">
        Best of Ionic Themes & Plugins
      </div>

      <div className="padder-v text-center text-muted text-sm d-none d-md-block">
        Based on <a href="https://ionicframework.com/" className="font-bold text-dark" target="_blank" rel="noopener noreferrer">Ionic Framework</a> - My favorite hybrid mobile app framework
      </div>

      <div className="product-container">
        <ProductList location={location}/>
      </div>
    </Layout>
  )
}
