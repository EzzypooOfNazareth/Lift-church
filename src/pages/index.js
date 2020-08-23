import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from "../components/layout"
import CarouselComponent from '../components/carouselcomponent'
import SEO from "../components/seo"

const TitleText = styled.h1`
  margin: 15px auto;
  font-size: 64px;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
`

const IndexPage = () => (
  useEffect(() => {
    navigate('https://www.lift-church.com');
  }, []);
  return null;
)

export default IndexPage
