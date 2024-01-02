/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Elizabeth W. Franklin`,
    siteUrl: `https://www.elizabethwfranklin.com`,
    menuLinks: [
      {
        name: "Projects",
        link: "/"
      },
      {
        name: "Resume",
        link: "/resume"
      },
    ]
  },
  plugins: ["gatsby-plugin-styled-components"]
};