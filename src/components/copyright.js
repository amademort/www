import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Copyright = ({ children }) => (
  <StaticQuery
  query={graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
          menuSocial {
              name
              link
            }
          menuLegal {
            name
            link
          }
        }
      }
    }
`}
render={data => (
    <section id="copyright">
      <p>©{new Date().getFullYear()} → ama<span class="accent">de</span>mort _ {data.site.siteMetadata.menuSocial.map(link => (<span key={link.name}><a href={link.link}>{link.name}</a> </span>))} ♥ {data.site.siteMetadata.menuLegal.map(link => (<span key={link.name}><a href={link.link}>{link.name}</a> </span>))}</p>
      {children}
    </section>
)}
/>
)

export default Copyright
