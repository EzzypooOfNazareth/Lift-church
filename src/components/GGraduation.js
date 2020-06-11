import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
`;

const ImageTile = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
`;

const TextContainer = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 26px;
    text-align: center;
    font-style: italic;
`;

const GGraduation = () => (
    <StaticQuery query={graphql`
    query HeadQuery {
        allWordpressWpMedia(filter: {title: {eq: "Gerard Graduation"}}) {
          edges {
            node {
              title
              source_url
            }
          }
        }
      }      
    `} render={data => (
        <Container>
            <ImageTile src={data.allWordpressWpMedia.edges[0].node.source_url} alt="Grad Image" />

            <TextContainer>
                <Text>Gerard Barral is a graduate the Zion Bible Institute, class of 2000.</Text>
            </TextContainer>
        </Container>
    )} />
)

export default GGraduation