import { graphql } from 'gatsby';

export const USE_SANITY_IMG = true;

/**
  Gatsby searches all your files for fragments first. Then it builds your site. You don't need
  to think about defining fragments before you use them. Gatsby takes care of that for you.
  Define anywhere, use anywhere.

  Read more: https://www.gatsbycentral.com/reusable-graphql-queries-in-gatsby
*/
export const productItemFragment = graphql`
  fragment ProductItem on SanityProduct {
    id
    title
    slug {
      current
    }
    isFeatured
    isHidden
    shortDescription
    price
    createdAt(formatString: "DD MMM, YYYY")
    category {
      id
      title
    }
    framework {
      id
      title
    }
    productImage {
      color {
        hex
      }
      icon {
        _key
        _rawAsset
        asset {
          extension
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      thumbnails {
        _key
        _rawAsset
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    tags
    productLink {
      marketIonicUrl
      gumroadUrl
      sellfyUrl
      youtubeUrl
      youtubeEmbedUrl
      apkUrl
      trackingUrl
      githubUrl
    }
    documentGenerator {
      productDocument {
        title
        headline
        compatibility
        introduction
        changelog
        screens
        notes
        template {
          id
          title
          description
          body
        }
      }
    }
  }`
