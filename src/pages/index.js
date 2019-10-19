import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroImage from '../components/hero';
import AboutSection from '../components/Homepage/about_section';
import SkillsSection from '../components/Homepage/skills_section';
import PortfolioSection from '../components/Homepage/portfolio_section';
import Header from '../components/header';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage>
      <h1 className="hero_title">Jarod Peachey</h1>
      <h4 className="hero_subtitle">Front End Web Developer and Designer</h4>
      <div className="hero_buttons">
        <button className="primary">Button</button>
        <button className="secondary transparent">Button</button>
      </div>
    </HeroImage>
    <Header />
    <AboutSection />
    <SkillsSection />
    <PortfolioSection />
  </Layout>
);

export default IndexPage;
