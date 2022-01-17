import React from 'react';
import ArticleCard from '../components/atoms/HomePage/ArticleCard';
import Hero from '../components/atoms/HomePage/Hero';
import Blog from '../components/molecule/HomePage/Blog';
import ButtonLink from '../styles/Buttons/ButtonLink';
import ButtonPage from '../styles/Buttons/ButtonPage';
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
            <div>
              <div>
                <img src='https://cdn.pixabay.com/photo/2015/05/31/13/45/young-woman-791849_960_720.jpg'/>
                <div>
                  <TitleSection>
                    Senior Creative Strategist
                  </TitleSection>
                  <ButtonLink>
                    więcej
                  </ButtonLink>
                </div>
              </div>
           
         
            </div>
          </div>
      </Layout>
  )
}

export default HomePage;