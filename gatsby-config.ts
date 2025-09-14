import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Frederik Dudzik`,
    description: `Personal website of Frederik Dudzik`,
    author: `Frederik Dudzik`,
    siteUrl: `https://dudzik.co`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
  ],
}

export default config
