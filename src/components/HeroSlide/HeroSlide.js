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
                Tinder UI for Ionic Apps
              </div>
              <div className="slide-subtitle">
                The latest Tinder UI (Ionic 5) with Tabbed View, Profile Passions edit
              </div>
              <Link to="/theme/tinder-5-tabbed-view/" className="slide-cta">
                Take a look
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="slide-images">
            <img src="/images/import/c338dfea681155d680a3bcf23d12c0a507873b57-828x1792.jpg" alt="" className="image-item"/>
            <img src="/images/import/bab21962864371a0c15447b5bbdf3abeff0f5bf5-828x1792.jpg" alt="" className="image-item" />
            <img src="/images/import/8c4d0c24104440c2ef820abffd587dc3f57f2c80-828x1792.jpg" alt="" className="image-item" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
