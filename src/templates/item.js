import React from "react"

import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class itemTemplate extends React.Component {
  render() {
    const props = this.props
    const location = props.location
    const data = props.data
    const { previous, next } = props.pageContext

    const mdx = data.mdx // project
    const frontmatter = mdx.frontmatter
    const title = frontmatter.title
    const description = frontmatter.description
    const date = frontmatter.date
    const excerpt = mdx.excerpt
    const body = mdx.body

    const metadata = data.site.siteMetadata
    const siteTitle = metadata.title

    const categories = frontmatter.categories
    const tags = frontmatter.tags
    const tools = frontmatter.tools

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={title} description={description || excerpt} />
        <h1>{title}</h1>
        <ul class="item-info">
          <li class="item-date"><p class="item-date">{date}</p></li>
          {categories.map((category) => { return(<li class="item-category">{category}</li>)})}
          {tags.map((tag) => { return(<li class="item-tag">{tag}</li>)})}
          {tools.map((tool) => { return(<li class="item-tool">{tool}</li>)})}
        </ul>

        <div class="item-body">
        <MDXRenderer>{body}</MDXRenderer>
        </div>

        {/* <ul class="item-context">
          <li>
            {previous && (<Link to={`gallery${previous.fields.slug}`} rel="prev">← {previous.frontmatter.title}</Link>)}
          </li>
          <li>
            {next && (<Link to={`gallery${next.fields.slug}`} rel="next">{next.frontmatter.title} →</Link>)}
          </li>
        </ul> */}
      </Layout>
    )
  }
}

export default itemTemplate

export const pageQuery = graphql`
  query Items($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        categories
        tags
        tools
        draft
        featured
      }
      excerpt(pruneLength: 160)
      body
    }
  }
`
