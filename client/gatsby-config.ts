// @ts-check
import type { GatsbyConfig } from "gatsby";

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:5001",
  },
  plugins: [],
}

export default gatsbyConfig;
