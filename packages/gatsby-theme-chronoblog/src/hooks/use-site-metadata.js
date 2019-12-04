import { graphql, useStaticQuery } from 'gatsby';

/**
 * @typedef {object} SocialObject
 * @property {string} icon
 * @property {string} url
 */

/**
 * @typedef {object} SiteMetadata
 * @property {string} siteTitle
 * @property {string} siteDescription
 * @property {string} siteImage
 * @property {string} siteUrl
 * @property {string} pathPrefix
 * @property {string} siteLanguage
 * @property {string} ogLanguage
 * @property {string} author
 * @property {string} authorDescription
 * @property {string} avatar
 * @property {string} twitterSite
 * @property {string} twitterCreator
 * @property {object} uiText
 * @property {string} uiText.feedShowMoreButton
 * @property {string} uiText.feedSearchPlaceholder
 * @property {string} uiText.cardReadMoreButton
 * @property {string} uiText.allTagsButton
 * @property {object} feedItems
 * @property {number} feedItems.limit
 * @property {'year' | 'space' | boolean} feedItems.yearSeparator
 * @property {boolean} feedItems.yearSeparatorSkipFirst
 * @property {SocialObject[]} social
 */

/**
 * @typedef {object} SiteData
 * @property {object} site
 * @property {SiteMetadata} site.siteMetadata
 */

/**
 * @returns {SiteMetadata}
 */
const useSiteMetadata = () => {
  const siteMetaQuery = graphql`
    query SEOQuery {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteImage
          siteUrl
          pathPrefix
          siteLanguage
          ogLanguage
          author
          authorDescription
          avatar
          twitterSite
          twitterCreator
          uiText {
            feedShowMoreButton
            feedSearchPlaceholder
            cardReadMoreButton
            allTagsButton
          }
          feedItems {
            limit
            yearSeparator
            yearSeparatorSkipFirst
          }
          social {
            icon
            url
          }
        }
      }
    }
  `;
  /** @constant
    @type {SiteData}
   */
  const data = useStaticQuery(siteMetaQuery);
  const { siteMetadata } = data.site;
  //
  return siteMetadata;
};

export default useSiteMetadata;
