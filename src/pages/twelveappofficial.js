import React from 'react';
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline } from '@mdi/js';
import Layout from '../components/AppLanding/Layout';

const styles = {
  thumbnail: {
    width: '90%',
    maxWidth: 600,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
  },
}

const reviewList = [
  {
    title: 'Best watch tracking app on iOS',
    metadata: 'by wilf1803 – Oct 12, 2021 · Singapore · Version 1.4.0',
    rating: 5,
    body: 'Intuitive and simple to use. Very pleasant UI...',
  },
  {
    title: 'Excellent app, worth your time!',
    metadata: 'Kinnebrew – Sep 22, 2021 · United States · Version 1.3.0',
    rating: 5,
    body: 'How does this app only have 2 reviews?!? I tried the “other” watch timing app (which will remain unnamed, but is the top result in most searches for this type of app), and it was complete garbage. The Twelve O’Clock app does exactly what it says it will do and is super easy to use. No complaints at all. Very happy that I found this to time and track my mechanical watches.'
  },
  {
    title: 'A bit complicated',
    metadata: 'by rich.v – Sep 24, 2021 · United States · Version 1.3.0',
    rating: 4,
    body: 'A bit complicated until you understand how to use it properly then everything seems to fall in place...',
  },
]

export default ({ location }) => (
  <Layout
    metaTags={{
      title: 'Homepage'
    }}
    location={ location }
  >
    <div className="row">
      <section className="col-lg-8 offset-lg-2 text-center">
        <div className="post-content">
          <h2 id="why">Welcome to <br/> Twelve O'clock App</h2>
          <p className="post-body-text">
            The easiest way to track your watch accuracy. <strong>No devices needed.</strong>
          </p>
          <div className="m-b text-center">
            <a href="https://apps.apple.com/app/twelve-oclock/id1570977980" className="m-r-sm">
              <img src="/images/download_appstore.png" height="48" alt=""/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.takethatdesign.twelveappofficial">
              <img src="/images/download_android.png" height="48" alt=""/>
            </a>
          </div>
          <img src="/images/twelve/thumbnail.png" style={ styles.thumbnail } alt=""/>
        </div>
      </section>

      <section className="col-lg-8 offset-lg-2 text-center">
        <h4>Ratings and Reviews</h4>
        <p className="text-sm">From App Store and Google Play around the world</p>

        <div className="review-list">
          {
            reviewList.map(item => (
              <div className="review-item" key={ item.title }>
                <div className="review-item-title">
                  { item.title }
                  <div className="rating">
                    <Icon path={ mdiStar } color="#ff9500" size="16px" />
                    <Icon path={ mdiStar } color="#ff9500" size="16px" />
                    <Icon path={ mdiStar } color="#ff9500" size="16px" />
                    <Icon path={ mdiStar } color="#ff9500" size="16px" />
                    <Icon path={ item.rating === 5 ? mdiStar : mdiStarOutline } color="#ff9500" size="16px" />
                  </div>
                </div>
                <div className="review-item-metadata text-muted">
                  { item.metadata }
                </div>
                <div className="review-item-body text-sm">
                  { item.body }
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  </Layout>
)
