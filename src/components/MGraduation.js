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

const MGraduation = () => (
    <StaticQuery query={graphql`
    query Head2Query {
        allWordpressWpMedia(filter: {title: {eq: "Mary Graduation"}}) {
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
            <TextContainer>
                <Text>Mary Barral is a graduate the Zion Bible Institute, class of 2000.</Text>
            </TextContainer>

            <ImageTile src={data.allWordpressWpMedia.edges[0].node.source_url} alt="Grad Image" />
        </Container>
    )} />
)

export default MGraduation