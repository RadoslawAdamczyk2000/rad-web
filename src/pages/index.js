import React from 'react';
import ArticleCard from '../components/atoms/HomePage/ArticleCard';
import Contact from '../components/atoms/HomePage/Contact';
import Hero from '../components/atoms/HomePage/Hero';
import ProjectCard from '../components/atoms/HomePage/ProjectCard';
import Blog from '../components/molecule/HomePage/Blog';
import Offer from '../components/molecule/HomePage/Offer';
import Projects from '../components/molecule/HomePage/Projects';
import tech from '../data/tech';
import ButtonLink from '../styles/Buttons/ButtonLink';
import ButtonPage from '../styles/Buttons/ButtonPage';
import ProjectsSectionWrapper from '../styles/Containers/ProjectsSectionWrapper';
import Text from '../styles/Text/Text';
import TitleSection from '../styles/Titles/TitleSection';
import Layout from '../templates/Layout';

const HomePage = () => {
  return(
      <Layout>
          <Hero/>
          <Blog/>
          <Projects/>
          <Offer/>
          <Contact/>
      </Layout>
  )
}

export default HomePage;