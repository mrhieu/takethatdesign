import React from 'react';
import Layout from '../components/Layout';

export default ({ location }) => (
  <Layout
    metaTags={{
      title: 'About'
    }}
    location={ location }
  >
    <div className="row">
      <article className="col-lg-8 offset-lg-2">
        <header>
          <h1>Project #100ions</h1>
          <p>by <strong>Take That Design</strong></p>
        </header>

        
      </article>
    </div>
  </Layout>
)
