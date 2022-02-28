import React from 'react';
import Contact from '../components/atoms/HomePage/Contact';
import Layout from '../templates/Layout';
import {graphql, useStaticQuery} from 'gatsby';
import Hero from '../components/bacteria/HomePage/Hero';
import SectionImage from '../components/atom/HomePage/SectionImage';
import Blog from '../components/bacteria/HomePage/Blog';
import Projects from '../components/bacteria/HomePage/Projects';
import Offer from '../components/bacteria/HomePage/Offer';
import FbPosts from '../components/atom/HomePage/FbPosts';
import Www from '../components/bacteria/HomePage/Www';
const HomePage = () => {
  const {allFile} = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {eq: "svg"}}) {
      edges {
        node {
          name
          publicURL
          extension
        }
      }
    }
  }
  `)
  console.log(allFile.edges[4].node.publicURL)
  return(
      <Layout
        metaDescription='Zapraszam do skorzystania z moich usług z zakresu tworzenia stron internetowych oraz kompleksowego pozycjonowania serwisów w wyszukiwarce Google.'
        metaTitle='Tworzenie stron internetowych, seo i darmowa analityka stron www, Śrem, Poznań - RadWEB'
      >
          <Hero/>
          <SectionImage 
            center={false}
            end={true}
            imagePath='/static/ddba8127f1cc54a783bfeaa5d5db4d23/agree.svg'
            start={false}
          />
          <Blog/>
          <SectionImage 
            center={false}
            end={false}
            imagePath='/static/d3566df7d06c7092d9ab63dd19cf81a0/reading.svg'
            start={true}
          />
          <Projects/>
          <SectionImage 
            center={false}
            end={true}
            imagePath='/static/4a8255b9aff6a267528aadef51d0b698/website.svg'
            start={false}
          />
          <Offer/>
          <SectionImage 
              center={true}
              end={false}
              imagePath='/static/abacf4454aaf52ec4393aaca3013d178/going-up.svg'
              start={false}
            />
          <Www/>
          <FbPosts/>
          <Contact/>
      </Layout>
  )
}
export default HomePage;