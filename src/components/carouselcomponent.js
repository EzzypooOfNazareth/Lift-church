import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'  

const CarouselContainer = styled.div`
    width: 100%;
    height: 350px;
    margin-bottom: 1.8rem;
`;

const CarouselImg = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`;

const CarouselComponent = () => (
    <StaticQuery query={graphql`
        query CarouselQuery {
            allWordpressWpMedia(filter: {alt_text: {eq: "carousel"}}) {
                edges {
                    node {
                        id
                        media_type
                        type
                        source_url
                        alt_text
                        caption
                        path
                    }
                }
            }
        }         
    `} render={data => (
        <CarouselContainer>
            <Carousel showArrows={false} showIndicators={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                {data.allWordpressWpMedia.edges.map(i => {
                    return <div><CarouselImg key={i.node.id} src={i.node.source_url} alt={i.node.alt_text} /></div>
                })}
            </Carousel>
        </CarouselContainer>
    )} />
);

export default CarouselComponent