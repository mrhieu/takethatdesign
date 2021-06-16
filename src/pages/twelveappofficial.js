import React from 'react';
import Layout from '../components/AppLanding/Layout';

const styles = {
  thumbnail: {
    width: '80%',
    maxWidth: 600,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
  },
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
          <h2 id="why">Welcome to <br/> Twelve O'clock App</h2>
          <p className="post-body-text">
            The easiest way to track your watch accuracy
          </p>
          <a href="https://apps.apple.com/vn/app/twelve-oclock/id1570977980" className="inline m-b">
            <img src="/images/download_appstore.png" height="50" alt=""/>
          </a>
          <img src="/images/twelve/thumbnail.png" style={ styles.thumbnail } alt=""/>
        </div>
      </article>
    </div>
  </Layout>
)
