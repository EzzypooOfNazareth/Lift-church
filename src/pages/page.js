import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const TitleText = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 36px;
    margin: 0;
    margin-bottom: 25px;
`;

const Page = ({pageContext}) => (
  <Layout>
    <SEO title={ pageContext.title } />
    <div>
        <TitleText dangerouslySetInnerHTML={{__html: pageContext.title }}></TitleText>
    </div>
    <p dangerouslySetInnerHTML={{__html: pageContext.content }}></p>
  </Layout>
)

export default Page
