import React from 'react';
import { Link } from 'gatsby';
import './HeroSlide.scss';

export default () => (
  <div className="hero-slide">
    <div className="slide-item">
      <div className="row">
        <div className="col-md-7">
          <div className="slide-description">
            <div>
              <div className="label-latest">Latest</div>
              <div className="slide-title">
                Twitter UI for Ionic Apps
              </div>
              <div className="slide-subtitle">
                I've had the most fun (and challenges) working on this Ionic Theme
              </div>
              <Link to="/theme/twitter-5" className="slide-cta">
                Take a look
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="slide-images">
            <img src="/images/export/d04d11c8cd6656635dea0dd2aeeac5079a4b1057-828x1792.jpg" alt="" className="image-item"/>
            <img src="/images/export/e37cae1bb7a93d36ef61bde9d8560abd7230e264-828x1792.jpg" alt="" className="image-item" />
            <img src="/images/export/fb2feac5e821806a1ef37637cb03a44e4b96e59a-828x1792.jpg" alt="" className="image-item" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
