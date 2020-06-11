import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 55px 0;
  width: 100%;
`;

const MenuItem = styled(Link)`
  font-family: Verdana;
  font-size: 16px;
  color: black;
  font-weight: bold;
  transition: 0.2s ease;
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

const HeaderImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  margin: 50px 15px 25px 15px;
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

      <Menu>
        <MenuItem to="/">Home</MenuItem>
        {data.menu.edges[0].node.items.slice(0, 2).map(l => {
          return <MenuItem key={l.title} to={l.object_slug}>{ l.title }</MenuItem>
        })}
      </Menu>

        <HeaderImage src={data.logo.edges[0].node.source_url} alt={data.logo.edges[0].node.alt_text} />

      <Menu>
        {data.menu.edges[0].node.items.slice(2, 5).map(l => {
          return <MenuItem key={l.title} to={l.object_slug}>{ l.title }</MenuItem>
        })}
      </Menu>
      
    </StyledHeader>
  )} />
)

export default Header
