import React from 'react';
import Layout from '../components/Layout';

const projects = [
  {
    title: 'Ionic-cnn',
    description: 'CNN News App',
    keywords: ['cnn', 'news'],
    githubUrl: 'https://github.com/mrhieu/ionic-cnn',
    createdAt: 'June 7 2020',
  },
  {
    title: 'Ionic-messenger',
    description: '(Facebook) Messenger',
    keywords: ['messaging', 'chat', 'messenger'],
    githubUrl: 'https://github.com/mrhieu/ionic-messenger',
    createdAt: 'June 19 2020',
  }
]

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
          <h2>Project #100ions</h2>
          <p>by <strong>Take That Design</strong></p>

          <h3 class="text-center">100 Free Ionic Templates</h3>

          <div className="twitter-embed">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                What if I tell you that I&#39;m going to create 100 <a href="https://twitter.com/hashtag/ionicframework?src=hash&amp;ref_src=twsrc%5Etfw">#ionicframework</a> templates as open source projects, aka. FREE of charge, and publish them on Github? <a href="https://twitter.com/Ionicframework?ref_src=twsrc%5Etfw">@Ionicframework</a>
              </p>&mdash; Take That Design (@takethatdesign) <a href="https://twitter.com/takethatdesign/status/1270006703598088196?ref_src=twsrc%5Etfw">June 8, 2020</a>
            </blockquote>
          </div>

          <p>Let's keep it short, as the tweet mentioned, I've planned to create <strong>100 Ionic Templates</strong> for <strong>Free</strong>. This is the most ambitious project of mine with Ionic Framework.</p>
          <p>Template may vary from Theme to Plugin, or some specific micro design element. You can find the published projects below.</p>
          <p>Happy coding!</p>

          <ol className="project-100ions-list">
            {
              projects.map(item => (
                <li className="project-item">
                  <div className="project-title">
                    <strong>{item.title}</strong>
                  </div>
                  <div className="project-description">
                    {item.description}
                  </div>
                  <div className="project-url">
                    <a href={item.githubUrl} target="_blank" rel="noreferrer noopener">{item.githubUrl}</a>
                  </div>
                  <div className="text-muted">
                    {item.createdAt}
                  </div>
                </li>
              ))
            }

            <li className="project-item">
              <div className="project-title">
                <div className="text-muted">Coming up</div>
              </div>
            </li>
            <div className="text-muted">...</div>
            <li value="100">
              <div className="project-title">
                <div className="text-muted">Coming up</div>
              </div>
            </li>
          </ol>
        </div>
      </article>
    </div>
  </Layout>
)
