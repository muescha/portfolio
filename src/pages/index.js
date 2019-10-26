import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMobileAlt,
  faCode,
  faCodeBranch,
  faRocket,
  faBars,
  faEnvelope,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faCss3, faHtml5, faJsSquare, faReact, faBootstrap, faPhp, faGithub, faWordpress } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroImage from '../components/hero';
import AboutSection from '../components/Homepage/about_section';
import SkillsSection from '../components/Homepage/skills_section';
import PortfolioSection from '../components/Homepage/portfolio_section';

library.add(faMobileAlt, faCode, faCodeBranch, faRocket, faBars, faEnvelope, fab, faCss3, faHtml5, faJsSquare, faReact, faBootstrap, faPhp, faDatabase, faGithub, faWordpress);

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage id="home">
      <h1 className="hero_title">Hi. I'm Jarod Peachey</h1>
      <h4 className="hero_subtitle">
        I'm a Front End Web Developer focused on code quality, consistencey and
        website speed.
      </h4>
      <a href="#about">
        <button className="button secondary transparent">
          Let's Build Something
        </button>
      </a>
    </HeroImage>
    <AboutSection />
    <SkillsSection />
    <PortfolioSection />
  </Layout>
);

export default IndexPage;
