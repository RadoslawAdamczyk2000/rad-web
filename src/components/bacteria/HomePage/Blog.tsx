import ArticleCard from '../../atom/HomePage/ArticleCard';
import BlogWrapper from './styles/BlogWrapper';
import Button from '../../atom/HomePage/Button';
import React from 'react';
import Text from '../../atom/HomePage/Text';
import TitleSection from '../../atom/HomePage/TitleSection';
import {articles} from '../../../data/posts/articles';
const Blog = () => {
    return(
        <BlogWrapper>
            <div className='head'>
                <TitleSection
                    title='Blog o seo i programowaniu'
                />
                <Text>
                    <p>Posiadam szeroki wachlarz zainteresowań oraz co raz to bardziej się poszerzający portfel wiedzy. Z tym wszystkim zamierzam się dzielić poprzez właśnie artykuły blogowe, które stanowią zarówno bazę wiedzy z zakresu programowania, pozycjonowania oraz historii. Ponadto znajdziesz tutaj to co się dzieje aktualnie w moim życiu. To też, jeśli zainteresowały te tematy to zapraszam do udanej lektury.</p>
                </Text>
                <Button center={true} path='/blog' title='Wszystkie posty'/>
            </div>
            <div className='cards'>
                <ArticleCard
                    articleType={articles[0].variant}
                    excerpt={articles[0].excerpt}
                    path={articles[0].path}
                    title={articles[0].title}
                />
                <ArticleCard
                    articleType={articles[1].variant}
                    excerpt={articles[1].excerpt}
                    path={articles[1].path}
                    title={articles[1].title}
                />
                <ArticleCard
                    articleType={articles[2].variant}
                    excerpt={articles[2].excerpt}
                    path={articles[2].path}
                    title={articles[2].title}
                />
                <ArticleCard
                    articleType={articles[3].variant}
                    excerpt={articles[3].excerpt}
                    path={articles[3].path}
                    title={articles[3].title}
                />
            </div>
        </BlogWrapper>
    )
}
export default Blog;