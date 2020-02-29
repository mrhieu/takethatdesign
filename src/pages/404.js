import React from 'react';
import SEO from '../components/Seo/Seo';
import Layout from '../components/Layout';

export default () => (
  <React.Fragment>
    <SEO />
    <Layout>
      <h1>Ouch...</h1>
      <p>404 Not Found. Familiar?</p>
    </Layout>
  </React.Fragment>
)
