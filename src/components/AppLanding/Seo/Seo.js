import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({ metaTags }) => {
  const {
    description = 'Track your watch accuracy',
    lang = 'en',
    meta = [],
    title = 'Twelve O\'clock App',
    thumbnail = '/images/twelve/thumbnail.png',
    pageUrl
  } = metaTags;
  const metaDescription = description || 'Track your watch accuracy';
  const metaThumbnail = thumbnail ? `https://www.takethatdesign.com${thumbnail}` : 'https://www.takethatdesign.com/images/twelve/thumbnail.png';
  const metaUrl = pageUrl || 'https://www.takethatdesign.com/twelveappofficial';

  const googleMetaTags = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      name: 'keywords',
      content: 'watch,accuracy,mechanical,automatic,horology,timegrapher',
    },
    {
      name: 'author',
      content: 'Hieu Pham',
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
    {
      property: 'fb:app_id',
      content: '719535605519260',
    }
  ]

  const twitterMetaTags = [
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: 'Hieu Pham',
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
      title={title}
      titleTemplate={`%s | Twelve O'clock App`}
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
    />
  )
}

SEO.defaultProps = {
  metaTags: {},
}

SEO.propTypes = {
  metaTags: PropTypes.object
}

export default SEO;
