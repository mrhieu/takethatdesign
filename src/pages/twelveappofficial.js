import React from 'react';
import Layout from '../components/AppLanding/Layout';

const styles = {
  thumbnail: {
    width: '90%',
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
            The easiest way to track your watch accuracy. <strong>No devices needed.</strong>
          </p>
          <div className="m-b text-center">
            <a href="https://apps.apple.com/app/twelve-oclock/id1570977980" className="m-l-sm">
              <img src="/images/download_appstore.png" height="48" alt=""/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.takethatdesign.twelveappofficial">
              <img src="/images/download_android.png" height="72" alt=""/>
            </a>
          </div>
          <img src="/images/twelve/thumbnail.png" style={ styles.thumbnail } alt=""/>
        </div>
      </article>
    </div>
  </Layout>
)
