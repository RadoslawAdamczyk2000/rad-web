import React from 'react';
import ArticleCard from '../components/atoms/HomePage/ArticleCard';
import Hero from '../components/atoms/HomePage/Hero';
import Blog from '../components/molecule/HomePage/Blog';
import Text from '../styles/Text/Text';
import TitleSection from '../styles/Titles/TitleSection';
import Layout from '../templates/Layout';

const HomePage = () => {
  return(
      <Layout>
          <Hero/>
          <Blog/>
      </Layout>
  )
}

export default HomePage;