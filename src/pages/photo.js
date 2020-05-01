import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="photography" />
        <h1>gallery</h1>
        <div className="projects" style={{ margin: "1rem 0 2rem" }}>
          {projects.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} class="project">
                <div class="thumbnail">
                <img src={node.frontmatter.thumbnail.childImageSharp.fluid.src} alt={title} />
                </div>
                <div class="info">
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {title}
                </h3>
                <ul class="project-tags">
                  <li class="project-date">
                      <p class="project-date">
                        {node.frontmatter.date}
                      </p>
                  </li>
                  {node.frontmatter.categories.map((category) => { return(
                    <li class="project-category">{category}</li>
                  )})}
                  {node.frontmatter.tags.map((tag) => { return(
                    <li class="project-tag">{tag}</li>
                  )})}
                  {node.frontmatter.tools.map((tool) => { return(
                    <li class="project-tool">{tool}</li>
                  )})}
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {ne: true}}, fileAbsolutePath: {regex: "/projects/photo/"}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            categories
            tools
            featured
            thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
          }
        }
      }
    }
  }
`
