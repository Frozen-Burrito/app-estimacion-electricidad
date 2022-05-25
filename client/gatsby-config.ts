// @ts-check
/**
 * @type {import('gatsby').GatsbyConfig}
 */
const gatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:5001",
  },
  plugins: [],
}

module.exports = gatsbyConfig;
