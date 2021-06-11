import React from 'react';
import Layout from '../components/AppLanding/Layout';

const styles = {
  thumbnail: {
    width: '80%',
    maxWidth: 600,
  }
}

export default ({ location }) => (
  <Layout
    metaTags={{
      title: 'Homepage'
    }}
    location={ location }
  >
    <div className="row">
      <article className="col-lg-8 offset-lg-2 text-center">
        <div className="post-content">
          <h2 id="why">Welcome to Twelve O'clock App Homepage</h2>
          <p className="post-body-text">
            Download Link: Coming soon
          </p>
          <img src="/images/twelve/thumbnail.png" style={ styles.thumbnail } alt=""/>
        </div>
      </article>
    </div>
  </Layout>
)
