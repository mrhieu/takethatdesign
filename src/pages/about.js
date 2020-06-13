import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js';
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
        <div className="post-content">
          <p className="post-body-text">Here's the story of <strong><a href="https://www.takethatdesign.com">Take That Design</a></strong>.</p>

          <h2 id="why">Why did I start Take That Design?</h2>

          <p className="post-body-text"><img src="/images/colors.jpg" alt="banner" /></p>

          <h4 id="its-my-passion">It’s my passion</h4>

          <p className="post-body-text">I’m passionate about mobile web. I remember the very first day I got to know about HTML5 features (geolocation, localstorage, indexedDB, CSS3 animation, ...) I immediately dreamed about a world with only web-based applications which are capable of doing anything, accessible from everywhere, right in the palm of our hand. I still believe we’ll get there very soon.</p>

          <h4 id="hybrid-app-can-be-much-more">Hybrid app can be much more</h4>

          <p className="post-body-text">I've received quite a few compliments that my themes look so professional, so different, so real. That made me feel motivated for the potential of hybrid apps. Hybrid apps can always have more beautiful look, with native feel and rich functionalities. Good news: any web developers with their existing skillset can do it.</p>

          <h4 id="create-the-tools-that-do-the-job">Create the tools that do the job</h4>

          <p className="post-body-text">I’ve been working in startups, and I totally understand the moment we found ourselves repeatedly saying: “let’s make this grid view looks like Pinterest”, or “make this list of posts looks like the news feed on Facebook”, or “make this search bar as simple as we see it on Google”, ... it’s damn true that we don’t have to reinvent the wheel (well, sometimes we do) but take the most out of the proven products in the market. That helps you save a lot of time and effort in development, educating users so that you can spend most of your time focusing on what you meant to do: creating new values with your product ideas.</p>

          <h4 id="live-in-my-own-world">Live in my own world</h4>

          <p className="post-body-text">I’m just a normal frontend engineer with a full-time job and some free time. I believe that we should always have some isolated space for ourselves to explore our own world. A weekend project, a side project, or whatever you want to call it, is your playground to try new things, to learn some trendy technologies, to test your ideas. I love creating beautiful and efficient HTML layout, pushing the limit of the web applications. On a beautiful Sunday, I accidentally created <strong>Take That Design</strong>, and that's how we are here talking about it (j/k).</p>

          <h2 id="what">What is Take That Design about?</h2>

          <p className="post-body-text"><strong>Take That Design</strong> is a collection of the highest quality hand-coded themes and plugins in the market that are made by <strong><a href="https://www.hieugoesto.com/">Hieu Pham</a></strong> (me)</p>

          <p className="post-body-text"><img src="/images/banner.png" alt="banner" /></p>

          <p className="post-body-text">What does TakeThatDesign offer (for now)?</p>

          <div>
            <div className="post-body-text">
              <span className="mr-2">
                <Icon path={ mdiCheckboxMarkedCircleOutline } color="#777" size="18px" />
              </span>
              <strong>Themes</strong>: the UI kits that give your next mobile app the similar look of the most popular mobile apps.
            </div>
            <div className="post-body-text">
              <span className="mr-2">
                <Icon path={ mdiCheckboxMarkedCircleOutline } color="#777" size="18px" />
              </span>
              <strong>Plugins</strong>: the sets of features that enhance your existing Ionic apps.
            </div>
            <div className="post-body-text">
              <span className="mr-2">
                <Icon path={ mdiCheckboxMarkedCircleOutline } color="#777" size="18px" />
              </span>
              <strong>Free packages</strong>: some plugins or snippets I’ve created during the development of my other products. These are free of charge.
            </div>
          </div>

          <br/>

          <p className="post-body-text">In the future, maybe Themes and Plugins using React Native, Flutter, ...</p>

          <h2 id="who">Who is Take That Design for?</h2>

          <p className="post-body-text"><img src="/images/market.png" alt="banner" /></p>

          <p className="post-body-text">Who are these themes and plugins for?</p>

          <div>
            <div className="post-body-text">
              <span className="mr-2">
                <Icon path={ mdiCheckboxMarkedCircleOutline } color="#777" size="18px" />
              </span>
              Ionic Developers who are already familiar with <a href="https://ionicframework.com/docs/intro">Ionic Apps development</a>.
            </div>
            <div className="post-body-text">
              <span className="mr-2">
                <Icon path={ mdiCheckboxMarkedCircleOutline } color="#777" size="18px" />
              </span>
              Developers who are new to Ionic Framework and want to pick up the best practices of Ionic development.
            </div>
            <div className="post-body-text">
              <span className="mr-2">
                <Icon path={ mdiCheckboxMarkedCircleOutline } color="#777" size="18px" />
              </span>
              Hybrid Mobile app developers who want to quickly start a project with their favorite UI kit.
            </div>
          </div>

        </div>
      </article>
    </div>
  </Layout>
)
