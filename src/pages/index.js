import React from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList/ProductList';

export default ({ data, location }) => {
  return (
    <Layout
      metaTags={{
        title: 'Homepage',
        pageUrl: location.href,
      }}
    >
      <div className="hero-text">
        Best of Ionic Themes & Plugins
      </div>

      <div className="padder-v text-center text-muted text-sm m-b d-none d-md-block">
        Based on <a href="https://ionicframework.com/" className="font-bold text-dark" target="_blank" rel="noopener noreferrer">Ionic Framework</a> - My favorite hybrid mobile app framework
      </div>

      <div className="product-container">
        <ProductList />
      </div>
    </Layout>
  )
}
