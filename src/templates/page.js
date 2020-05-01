import React from "react"

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class pageTemplate extends React.Component {
  render() {
    const props = this.props
    const page = props.data
    const location = props.location
    const mdx = page.mdx
    const frontmatter = mdx.frontmatter
    const title = frontmatter.title
    const description = frontmatter.description
    const body = mdx.body

    const siteTitle = page.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={title} description={description || page.excerpt} />
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </Layout>
    )
  }
}

export default pageTemplate

export const pageQuery = graphql`
  query Pages($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
