import React from 'react';
import ButtonPage from '../../../styles/Buttons/ButtonPage';
import BlogSectionWrapper from '../../../styles/Containers/BlogSectionWrapper';
import Text from '../../../styles/Text/Text';
import TitleSection from '../../../styles/Titles/TitleSection';
import ArticleCard from '../../atoms/HomePage/ArticleCard';

const Blog = () => {
    return(
        <BlogSectionWrapper>
            <div className='content'>
                <TitleSection isHeading>
                Blog
                </TitleSection>
                <Text>
                Minima voluptas debitis reiciendis molestiae et nam iure. Sed tempora et saepe et occaecati aperiam doloremque est temporibus. Accusamus veniam et libero nisi qui. Repellendus quis delectus at excepturi. Ipsam soluta nam deserunt nesciunt voluptatem atque voluptate similique similique. Voluptas veniam qui recusandae aliquid voluptate odit.
                </Text>
                <ButtonPage>
                    wszystkie posty
                </ButtonPage>
            </div>
            <div className='articles'>
                <ArticleCard 
                type='lifestyle' 
                title='Jak zostałem pozycjonrem' 
                excerpt='To jest prosta historia człowieka który został pozycjonrem przez przypadek.To jest prosta historia człowieka który został pozycjonrem przez przypadek.To jest prosta historia człowieka który został pozycjonrem przez przypadek.'
                />
                <ArticleCard 
                type='lifestyle' 
                title='Jak zostałem pozycjonrem' 
                excerpt='To jest prosta historia człowieka który został pozycjonrem przez przypadek.To jest prosta historia człowieka który został pozycjonrem przez przypadek.To jest prosta historia człowieka który został pozycjonrem przez przypadek.'
                />
                <ArticleCard 
                type='lifestyle' 
                title='Jak zostałem pozycjonrem' 
                excerpt='To jest prosta historia człowieka który został pozycjonrem przez przypadek.To jest prosta historia człowieka który został pozycjonrem przez przypadek.To jest prosta historia człowieka który został pozycjonrem przez przypadek.'
                />
                <ArticleCard 
                type='lifestyle' 
                title='Jak zostałem pozycjonrem' 
                excerpt='To jest prosta historia człowieka który został pozycjonrem przez przypadek.To jest prosta historia człowieka który został pozycjonrem przez przypadek.To jest prosta historia człowieka który został pozycjonrem przez przypadek.'
                />
            </div>
          </BlogSectionWrapper>
    )
}

export default Blog;