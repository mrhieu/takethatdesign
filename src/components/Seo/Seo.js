import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ metaTags }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const {
    description = 'Best of Ionic Themes and Plugins',
    lang = 'en',
    meta = [],
    title = 'Take That Design',
    thumbnail,
    pageUrl
  } = metaTags;
  const metaDescription = description || site.siteMetadata.description;
  const metaThumbnail = thumbnail || 'https://www.takethatdesign.com/images/market/banner.png';
  const metaUrl = pageUrl || 'https://www.takethatdesign.com';

  const googleMetaTags = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      name: 'keywords',
      content: 'prototype,template,theme,ionic,reactnative,marketplace',
    },
    {
      name: 'author',
      content: site.siteMetadata.author,
    }
  ]

  const facebookMetaTags = [
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: metaThumbnail,
    },
    {
      property: 'og:url',
      content: metaUrl,
    },
  ]

  const twitterMetaTags = [
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
    {
      name: 'twitter:image',
      content: metaThumbnail,
    }
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{
        class: 'has-announcement',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        ...googleMetaTags,
        ...facebookMetaTags,
        ...twitterMetaTags,
      ].concat(meta)}
      link={
        [{
          rel: 'canonical',
          key: pageUrl,
          href: pageUrl
        }]
      }
    >
      {/* Fancybox */}
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
      <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js" />

      {/* Addthis widget */}
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4e72fd7107058ce5"></script>
    </Helmet>
  )
}

SEO.defaultProps = {
  metaTags: {},
}

SEO.propTypes = {
  metaTags: PropTypes.object
}

export default SEO;
