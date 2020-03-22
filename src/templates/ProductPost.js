/*
  add ?type="embedded to be served as iFrame
*/

import React from 'react';
import { Link, graphql } from 'gatsby';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import queryString from 'query-string';
import Layout from '../components/Layout';
import ProductIframe from '../components/ProductIframe/ProductIframe';
import ProductDetail from '../components/ProductDetail/ProductDetail';

export default ({ data, location }) => {
  const { frontmatter: metadata } = data.markdownRemark;

  if (queryString.parse(location.search).type === 'embedded') {
    return (
      <ProductIframe
        data={data}
      />
    )
  }

  return (
    <Layout
      metaTags={{
        title: metadata.title,
        thumbnail: metadata.icon,
        pageUrl: location.href,
      }}
    >
      <div className="m-b">
        <Link className="btn btn-link btn-sm" to="/">
          <Icon className="icon-sm link-icon" path={mdiChevronLeft} /> Back
        </Link>
      </div>

      <ProductDetail
        data={data}
      />
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
