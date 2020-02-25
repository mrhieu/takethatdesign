import React from 'react';
import SEO from '../components/Seo/Seo';
import Layout from '../components/Layout';

export default () => (
  <React.Fragment>
    <SEO title="About"/>
    <Layout>
      <h1>About</h1>
      <p>
        We're the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  </React.Fragment>
)
