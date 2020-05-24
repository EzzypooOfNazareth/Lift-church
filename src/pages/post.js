import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

const TitleText = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 36px;
    margin: 0;
    margin-bottom: 25px;
`;

const DateText = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-style: italic;
    margin: 0;
`;

const Post = ({pageContext}) => (
  <Layout>
    <SEO title={ pageContext.title } />
    <HeadContainer>
        <TitleText dangerouslySetInnerHTML={{__html: pageContext.title }}></TitleText>
        <DateText>{`${new Date(pageContext.date).getMonth()}/${new Date(pageContext.date).getDate()}/${new Date(pageContext.date).getFullYear()}`}</DateText>
    </HeadContainer>
    <p dangerouslySetInnerHTML={{__html: pageContext.content }}></p>
  </Layout>
)

export default Post
