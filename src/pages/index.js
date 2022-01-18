import React from 'react';
import Contact from '../components/atoms/HomePage/Contact';
import Hero from '../components/atoms/HomePage/Hero';
import Blog from '../components/molecule/HomePage/Blog';
import Offer from '../components/molecule/HomePage/Offer';
import Projects from '../components/molecule/HomePage/Projects';
import Layout from '../templates/Layout';
import {graphql} from 'gatsby';

const HomePage = ({data}) => {

  

  return(
      <Layout
        metaDescription='Zapraszam do skorzystania z moich usług z zakresu tworzenia stron internetowych oraz kompleksowego pozycjonowania serwisów w wyszukiwarce Google.'
        metaTitle='Tworzenie stron internetowych, seo i analityka stron, Śrem, Kościan, Poznań - RadWEB'
      >
          <Hero/>
          <Blog data={data}/>
          <Projects/>
          <Offer/>
          <Contact/>
      </Layout>
  )
}

export const getSomePosts = graphql`
  query somePosts {
    allDatoCmsArticle(limit: 4, sort: {order: DESC, fields: meta___publishedAt}){
      edges {
        node {
          title
          slug
          excerpt
        }
      }
    }
  }
`

export default HomePage;