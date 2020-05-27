import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import CarouselComponent from '../components/carouselcomponent'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CarouselComponent />
    <div>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
