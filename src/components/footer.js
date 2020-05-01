import React from "react"

import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Copyright from "./copyright"
import ThemeToggle from "./themetoggle"

const Footer = ({ menuLegal, menuSocial }) => (
  <FooterWrapper id="footer-wrapper">
    <FooterStyled id="footer">
      <Copyright>
        <ThemeToggle />
      </Copyright>
    </FooterStyled>
  </FooterWrapper>
)

const FooterWrapper = styled.div`
`

const FooterStyled = styled.footer`
  font-size: .9rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${rhythm(30)};
  padding: ${rhythm(3 / 4)};
`

export default Footer
