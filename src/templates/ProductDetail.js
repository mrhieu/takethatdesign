import React from 'react';
import { Link, graphql } from 'gatsby';
import format from 'date-fns/format';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiOpenInNew, mdiTag } from '@mdi/js';
import Layout from '../components/Layout';
import SEO from '../components/Seo/Seo';

export default ({ data }) => {
  const { html: htmlContent } = data.markdownRemark;
  const { frontmatter: metadata } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={metadata.title} />

      <React.Fragment>
        <div className="product-toolbar m-b">
          <Link className="btn btn-link btn-sm" to={ '/' }>
            <Icon className="icon-sm link-icon" path={mdiChevronLeft} /> Back
          </Link>
        </div>

        <article className="product-detail h-entry" itemScope itemType="http://schema.org/BlogPosting">
          <div className="product-summary">
            <div className="item-icon">
              <img src={ metadata.icon } alt="" />
            </div>
            <div className="item-info">
              <div className="item-title">
                { metadata.title }
              </div>

              <div>Created on { format(new Date(metadata.createdAt), 'MMM dd, yyyy') }</div>
              <div>{ metadata.framework } · { metadata.category }</div>
              <div className="tags">
                <Icon className="icon-sm mb-2 mr-2" path={mdiTag} />

                {
                  metadata.tags.map(tag => (
                    <div key={tag} className="tag tag-sm">{tag}</div>
                  ))
                }
              </div>
            </div>

            <div>
              <div className="btn-group m-b btn-block btn-buy">
                <button type="button" className="btn btn-dark btn-block btn-lg dropdown-toggle btn-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Buy now
                  <div className="btn-addon" title={`USD$${ metadata.price }`}>
                    ${ metadata.price }
                  </div>
                </button>
                <div className="dropdown-menu">
                  {
                    metadata.gumroadUrl &&
                    <a className="dropdown-item" href={ metadata.gumroadUrl } target="_blank" rel="noopener noreferrer">
                      <Icon className="icon-sm" path={mdiOpenInNew} /> Pay via Gumroad
                    </a>
                  }

                  {
                    metadata.paypalUrl &&
                    <a className="dropdown-item" href={ metadata.paypalUrl } target="_blank" data-toggle="tooltip" data-placement="top" data-html="true" title="Please Add a note <br><strong>'{{ metadata.title }}'</strong><br> during your payment" rel="noopener noreferrer">
                      <Icon className="icon-sm" path={mdiOpenInNew} /> Pay via Paypal
                    </a>
                  }

                  <div className="dropdown-divider"></div>

                  {
                    metadata.githubUrl &&
                    <a className="dropdown-item" href={ metadata.githubUrl } target="_blank" rel="noopener noreferrer">
                      <Icon className="icon-sm" path={mdiOpenInNew} /> View on Github
                    </a>
                  }

                  {
                    metadata.marketUrl &&
                    <a className="dropdown-item" href={ metadata.marketUrl } target="_blank" rel="noopener noreferrer">
                      <Icon className="icon-sm" path={mdiOpenInNew} /> View on Ionic Market
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="product-thumbnail-container">
            <ul className="thumbnail-list">
              {
                metadata.thumbnails.map((imageUrl, index) => (
                  <li key={imageUrl} className="thumbnail-item" data-fancybox="gallery" data-caption={`Screenshot #${index + 1}`} data-src={imageUrl}>
                    <img src={ imageUrl } alt="" />
                  </li>
                ))
              }
            </ul>
          </div>

          <div
            className="product-content e-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        shortDescription
        price
        createdAt(formatString: "DD MMMM, YYYY")
        category
        icon
        tags
        framework
        marketUrl
        gumroadUrl
        sellfyUrl
        paypalUrl
        color
        thumbnails
        smallThumbnails
      }
      excerpt
    }
  }
`
