import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import HeroSlide from '../components/HeroSlide/HeroSlide';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';

export default ({ location }) => {
  return (
    <Layout
      metaTags={{
        pageUrl: location.href,
      }}
    >
      <HeroSlide />

      <div>
        <div className="featured-header">
          <div className="feature-title">
          </div>
          <Link to="/products?q=Theme">See All</Link>
        </div>
        <div>
          <FeaturedProducts />
        </div>
      </div>
    </Layout>
  )
}
