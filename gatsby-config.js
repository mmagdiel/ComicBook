/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require(`dotenv`).config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Data Fetching Examples`,
    description: `Examples for data fetching at build time and runtime.`,
    TOKEN: process.env.TOKEN,
  },
  plugins: ["gatsby-plugin-sass"],
};
