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
                Tinder Ionic Vue
              </div>
              <div className="slide-subtitle">
                Tinder UI is <strong>finally</strong> available in Ionic Vue (Vue 3, Ionic 5)
              </div>
              <Link to="/theme/tinder-vue-5/" className="slide-cta">
                Take a look
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="slide-images">
            <img src="https://cdn.sanity.io/images/o607ve1z/leafdb/69e9f77a530a23933f44af0a435ff9065694281e-828x1792.png?w=600&h=1299&fit=crop" alt="" className="image-item"/>
            <img src="https://cdn.sanity.io/images/o607ve1z/leafdb/702f933c560210df77808d7e3f1003553c2beb68-828x1792.png?w=600&h=1299&fit=crop" alt="" className="image-item" />
            <img src="https://cdn.sanity.io/images/o607ve1z/leafdb/098d367392c2673d38f6f514565e0b1399b4a2f6-828x1792.png?w=600&h=1299&fit=crop" alt="" className="image-item" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
