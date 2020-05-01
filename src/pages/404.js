import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1><span class="accent">404</span> means you are wrong here <span role="img" aria-label="stupid emoji, that doesn't add anything of value to the reader.">🤦🏼‍♀️</span></h1>
        <p>Please find your way BACK to the homePage.</p>
        <ul>
          <li><Link to="/">click HERE</Link> <span role="img" aria-label="stupid emoji, that doesn't add anything of value to the reader.">🔙</span> welcome page</li>
          <li><Link to="/">or here</Link> - well. it's the same site...</li>
        </ul>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
