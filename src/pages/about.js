import React from 'react';
import Layout from '../components/Layout';

export default () => (
  <Layout
    metaTags={{
      title: 'About'
    }}
  >
    <div className="row">
      <article className="col-lg-8 offset-lg-2">
        <header>
          <h1>About</h1>
        </header>

        <div className="post-content">
          <p>You’ll find the story of <strong><a href="https://www.takethatdesign.com">Take That Design</a></strong> here.</p>

          <h2 id="why">Why</h2>

          <blockquote>
            <p>Why did I start Take That Design?</p>
          </blockquote>

          <p><img src="/images/colors.jpg" alt="banner" /></p>

          <h3 id="its-my-passion">It’s my passion</h3>

          <p>I’m passionate about mobile web. I remember the very first day I got to know about HTML5 features (geolocation, localstorage, indexedDB, CSS3 animation,…) I immediately dreamed about a world with just web applications, capable of doing anything, accessible from everywhere right in the palm of our hand. I still believe we’ll get there very soon.</p>

          <h3 id="hybrid-app-can-be-much-more">Hybrid app can be much more</h3>

          <p>There were comments that said my themes look so professional, so different, so real. That made me so motivated for the potential of hybrid apps. Hybrid apps can always have more beautiful look, with native feel and rich functionalities. Good news: any web developers with their existing skillset can do it.</p>

          <h3 id="create-the-tools-that-do-the-job">Create the tools that do the job</h3>

          <p>I’ve been working in startups, and I totally understand the moment we found ourselves repeatedly saying: “let’s make this grid view looks like Pinterest”, or “make this list of posts looks like the news feed on Facebook”, or “make this search bar as simple as we see it on Google”… it’s damn true that we don’t have to reinvent the wheel (well, sometimes we do) but take the most out of the proven products in the market. That helps you save a lot of time and effort in development, educating users so that you can spend most of your time focusing on what you meant to do: creating new values with your product ideas.</p>

          <h3 id="live-in-my-own-world">Live in my own world</h3>

          <p>I’m just a normal frontend engineer with a job and some free time. I believe that we should always have some isolated time for yourself to explore your own world. Weekend projects, side projects, or whatever you call it, is your playground to try new things, to learn some trendy technologies, to test your concepts. I love creating beautiful and efficient HTML layout, pushing the limit of web applications. On a beautiful Sunday, I accidentally created <strong>Take That Design</strong>, and that how we are here. (j/k)</p>

          <h2 id="what">What</h2>

          <p><strong>Take That Design</strong> is a collection of the highest quality hand-coded themes and plugins in the market that are made by <strong><a href="https://www.hieugoesto.com/">Hieu Pham</a></strong> (me)</p>

          <p><img src="/images/banner.png" alt="banner" /></p>

          <p>What does TakeThatDesign offer (for now)?</p>

          <ul>
            <li>Themes: the UI kits that give your next mobile app the similar look of the most popular mobile apps</li>
            <li>Plugins: the sets of features that enhance your existing Ionic apps</li>
            <li>Free packages: some plugins or snippets I’ve created during the development of my other products. <strong>F R E E</strong></li>
          </ul>

          <p>In the future: who knows. Themes and plugins using React Native, Flutter,…</p>

          <h2 id="who">Who</h2>

          <p><img src="/images/market.png" alt="banner" /></p>

          <p>Who are these themes and plugins for?</p>

          <ul>
            <li>Ionic Developers who are already familiar with <a href="https://ionicframework.com/docs/intro">Ionic Apps development</a></li>
            <li>Developers who are new to Ionic Framework and want to pick up the best practices of Ionic development</li>
            <li>Hybrid Mobile app developers who want to quickly start a project with their favorite UI kit</li>
          </ul>

        </div>
      </article>
    </div>
  </Layout>
)
