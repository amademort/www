const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const itemTemplate = path.resolve(`./src/templates/item.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)

  const result = await graphql(
    `{

      pages: allMdx(filter: {fileAbsolutePath: {regex: "/pages/"}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }

      items: allMdx(filter: {fileAbsolutePath: {regex: "/gallery/"}}) {
        edges {
          node {
            fields {
              slug
            }
          }
          previous {
            id
          }
          next {
            id
          }
        }
      }

    }`)
    
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create items.
  const items = result.data.items.edges

  items.forEach((item, index) => {
    const previous = index === items.length - 1 ? null : items[index + 1].node
    const next = index === 0 ? null : items[index - 1].node

    createPage({
      path: `gallery${item.node.fields.slug}`,
      component: itemTemplate,
      context: {
        slug: item.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create pages.
  const pages = result.data.pages.edges

  pages.forEach((page) => {
    createPage({
      path: `${page.node.fields.slug}`,
      component: pageTemplate,
      context: {
        slug: page.node.fields.slug,
      },
    })
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
