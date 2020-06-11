import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import GGraduation from '../components/GGraduation'
import MGraduation from '../components/MGraduation'

const TitleText = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 36px;
    margin: 0;
    margin-bottom: 25px;
`;

const Page = ({pageContext}) => {
  let aboutSection;
  
  if (pageContext.title ===  "About Us") {
    aboutSection = <><GGraduation /><MGraduation /></>
  }

  return (
    <Layout>
      <SEO title={ pageContext.title } />
      <div>
          <TitleText dangerouslySetInnerHTML={{__html: pageContext.title }}></TitleText>
      </div>

      {aboutSection}

      <p dangerouslySetInnerHTML={{__html: pageContext.content }}></p>
    </Layout>
  )
}

export default Page
