import React from 'react';
import ButtonPage from '../../../styles/Buttons/ButtonPage';
import BlogSectionWrapper from '../../../styles/Containers/BlogSectionWrapper';
import Text from '../../../styles/Text/Text';
import TitleSection from '../../../styles/Titles/TitleSection';
import ArticleCard from '../../atoms/HomePage/ArticleCard';

const Blog = ({data}) => {
    return(
        <BlogSectionWrapper>
            <div className='content'>
                <TitleSection isHeading>
                Blog
                </TitleSection>
                <Text>
                    Posiadam szeroki wachlarz zainteresowań oraz co raz to bardziej się poszerzający portfel wiedzy. Z tym wszystkim zamierzam się dzielić poprzez właśnie artykuły blogowe, które stanowią zarówno bazę wiedzy z zakresu programowania, pozycjonowania oraz historii. Ponadto znajdziesz tutaj to co się dzieje aktualnie w moim życiu. To też, jeśli zainteresowały te tematy to zapraszam do udanej lektury.
                </Text>
                <ButtonPage path='/blog'>
                    wszystkie posty
                </ButtonPage>
            </div>
            <div className='articles'>
                {
                    data.allDatoCmsArticle.edges.map(({node}) => (
                        <ArticleCard
                            title={node.title}
                            excerpt={node.excerpt}
                            path={'/blog/'+ node.slug}
                        />
                    ))
                }
            </div>
          </BlogSectionWrapper>
    )
}

export default Blog;