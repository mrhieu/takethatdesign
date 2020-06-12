import React from 'react';
import { Link } from 'gatsby';
import './HeroSlide.scss';

export default () => (
  <div className="hero-slide">
    <div className="slide-item">
      <div className="slide-description">
        <div className="label-latest">Latest</div>
        <div className="slide-title">
          Pinterest UI for Ionic Apps
        </div>
        <div className="slide-subtitle">
          The most beautiful Ionic Theme that I've ever created
        </div>
        <Link to="/theme/pinterest-5" className="slide-cta">
          Take a look
        </Link>
      </div>

      <div className="slide-images">
        <img src="/images/export/4f1e39671696a2ce0ed3d0cd88ed19a34236cc46-828x1792.jpg" alt="" className="image-item" />
        <img src="/images/export/55df651590ce80472cbdb25f7798fa1283ad322a-828x1792.jpg" alt="" className="image-item" />
      </div>
    </div>
  </div>
)
