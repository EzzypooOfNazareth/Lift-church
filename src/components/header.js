import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.div`
  background: #3C3B6E;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 0;
  display: flex;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 125px;
  height: auto;
  margin-right: 15px;
  margin-bottom: 0;
`;

const HeaderText = styled(Link)`
  font-family: 'Fjalla One', sans-serif;
  font-size: 36px;
  color: white;
  text-decoration: none;
  margin: 0;
  transition: 0.2s ease;

  &:hover {
    color: #0067a6;
  }
`;

const MenuContainer = styled.div`
  margin-left: auto;
  display: flex;
`;

const MenuLink = styled(Link)`
  font-size: 16px;
  font-family: Verdana, sans-serif;
  color: white;
  text-decoration: none;
  transition: 0.2s ease;
  margin: 0 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <StaticQuery query={graphql`
      query MyQuery {
        logo: allWordpressWpMedia(filter: {alt_text: {eq: "Logo"}}) {
          edges {
            node {
              media_type
              type
              source_url
              alt_text
            }
          }
        }

        menu: allWordpressWpApiMenusMenusItems {
          edges {
            node {
              name
              items {
                url
                title
                object_slug
              }
            }
          }
        }
      }  
  `} render={data => (
    <StyledHeader>
    <HeaderContainer>
      <HeaderImage src={data.logo.edges[0].node.source_url} alt={data.logo.edges[0].node.alt_text} />
      <HeaderText>Lift Chuch</HeaderText>

      <MenuContainer>
        <MenuLink to={"/"}>Home</MenuLink>
        {data.menu.edges[0].node.items.map(itemLink => {
          return <MenuLink to={itemLink.object_slug}>{itemLink.title}</MenuLink>
        })}
      </MenuContainer>
    </HeaderContainer>
  </StyledHeader>
  )} />
)

export default Header
