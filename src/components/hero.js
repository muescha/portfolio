import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { styled } from 'linaria/react';
import Img from 'gatsby-image';

import BackgroundImage from 'gatsby-background-image';
// Use the following to support legacy browsers like IE11:
// import BackgroundImage from 'gatsby-background-image-es5'

/**
 * In this functional component a <BackgroundImage />  is compared to an <Img />.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components from index.js / page-2.js.
 * @return {*}
 * @constructor
 */
const HeroImage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero_image.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => {
      // Extract imageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          // To style via external CSS see layout.css last examples:
          // className="test"
          fluid={imageData}
          backgroundColor="#040e18"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            clipPath: 'polygon(100% 0, 100% 83%, 35% 95%, 0 87%, 0 0)',
          }}
          // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
          id="hero_image"
          fadeIn="soft"
        >
          <HeroContainer>
            <div className="container">{children}</div>
          </HeroContainer>
        </BackgroundImage>
      );
    }}
  />
);

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  box-shadow: inset 0 0 0 2000px rgba(37, 56, 72, 0.3);
  text-align: center;
`;

export default HeroImage;
