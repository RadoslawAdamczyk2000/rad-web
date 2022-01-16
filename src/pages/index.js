import React from 'react';
import ArticleCard from '../components/atoms/HomePage/ArticleCard';
import Hero from '../components/atoms/HomePage/Hero';
import Text from '../styles/Text/Text';
import TitleSection from '../styles/Titles/TitleSection';
import Layout from '../templates/Layout';

const HomePage = () => {
  return(
      <Layout>
          <Hero/>
          <div>
              <TitleSection>
                Blog
              </TitleSection>
              <Text>
                Minima voluptas debitis reiciendis molestiae et nam iure. Sed tempora et saepe et occaecati aperiam doloremque est temporibus. Accusamus veniam et libero nisi qui. Repellendus quis delectus at excepturi. Ipsam soluta nam deserunt nesciunt voluptatem atque voluptate similique similique. Voluptas veniam qui recusandae aliquid voluptate odit.
              </Text>
              <div>
                <ArticleCard type='lifestyle' title='Jak zostałem pozycjonrem' excerpt='To jest prosta historia człowieka który został pozycjonrem przez przypadek.'/>
                <ArticleCard type='lifestyle' title='Jak zostałem pozycjonrem' excerpt='To jest prosta historia człowieka który został pozycjonrem przez przypadek.'/>
                <ArticleCard type='lifestyle' title='Jak zostałem pozycjonrem' excerpt='To jest prosta historia człowieka który został pozycjonrem przez przypadek.'/>
                <ArticleCard type='lifestyle' title='Jak zostałem pozycjonrem' excerpt='To jest prosta historia człowieka który został pozycjonrem przez przypadek.'/>
              </div>
          </div>
      </Layout>
  )
}

export default HomePage;