import React from 'react';
import ArticleCard from '../components/atoms/HomePage/ArticleCard';
import Hero from '../components/atoms/HomePage/Hero';
import ProjectCard from '../components/atoms/HomePage/ProjectCard';
import Blog from '../components/molecule/HomePage/Blog';
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
          <div>
            <div>
              <TitleSection>
                Projekty
              </TitleSection>
              <Text>
                Minima voluptas debitis reiciendis molestiae et nam iure. Sed tempora et saepe et occaecati aperiam doloremque est temporibus. Accusamus veniam et libero nisi qui. Repellendus quis delectus at excepturi. Ipsam soluta nam deserunt nesciunt voluptatem atque voluptate similique similique. Voluptas veniam qui recusandae aliquid voluptate odit.
              </Text>
            </div>
            <ProjectsSectionWrapper>
              <ProjectCard
                image='https://cdn.pixabay.com/photo/2021/11/16/18/10/nature-6801719_960_720.jpg'
                tech={[tech.html, tech.css, tech.bootstrap]}
                title='Future Brand Coordinator'
              />
              <ProjectCard
                image='https://cdn.pixabay.com/photo/2021/11/16/18/10/nature-6801719_960_720.jpg'
                title='Future Brand Coordinator'
              />
            </ProjectsSectionWrapper>
          </div>
      </Layout>
  )
}

export default HomePage;