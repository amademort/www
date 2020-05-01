import React from "react"


import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Items extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const items = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="photography" />
        <h1>gallery</h1>
        <div className="items" style={{ margin: "1rem 0 2rem" }}>
          {items.map(({ node }) => {
            const frontmatter = node.frontmatter
            const excerpt = node.excerpt
            const slug = node.fields.slug
            const title = frontmatter.title || slug
            const description = frontmatter.description
            const date = frontmatter.date
            const categories = frontmatter.categories
            const tags = frontmatter.tags
            const tools = frontmatter.tools
            return (
              <div key={slug} class="project">
                <div class="info">
                  <Link to={`gallery${slug}`}><h3>{title}</h3></Link>
                  <ul class="item-info">
                    <li class="item-date">{date}</li>
                    {categories.map((category) => { return(<li class="item-category">{category}</li>)})}
                    {tags.map((tag) => { return(<li class="item-tag">{tag}</li>)})}
                    {tools.map((tool) => { return(<li class="item-tool">{tool}</li>)})}
                  </ul>
                  <p dangerouslySetInnerHTML={{__html: description || excerpt,}}/>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Items

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {ne: true}}, fileAbsolutePath: {regex: "/gallery/img/"}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            categories
            tags
            tools
            featured
          }
        }
      }
    }
  }
`
