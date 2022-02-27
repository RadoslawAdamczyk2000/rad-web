import ArticleCard from '../../atom/HomePage/ArticleCard';
import Button from '../../atom/HomePage/Button';
import React from 'react';
import Text from '../../atom/HomePage/Text';
import TitleSection from '../../atom/HomePage/TitleSection';
import BlogWrapper from './styles/BlogWrapper';
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
                    articleType='programming'
                    excerpt='Co rozumiem przez słowo rozwój? Naukę nowych rzeczy, a w przypadku mojej działki, nowych technolo'
                    path='#'
                    title='Aplikacja Netflix 2.0 - pierwsze podejście'
                />
                <ArticleCard
                    articleType='lifestyle'
                    excerpt='Co rozumiem przez słowo rozwój? Naukę nowych rzeczy, a w przypadku mojej działki, nowych technolo'
                    path='#'
                    title='Aplikacja Netflix 2.0 - pierwsze podejście'
                />
                <ArticleCard
                    articleType='programming'
                    excerpt='Co rozumiem przez słowo rozwój? Naukę nowych rzeczy, a w przypadku mojej działki, nowych technolo'
                    path='#'
                    title='Aplikacja Netflix 2.0 - pierwsze podejście'
                />
                <ArticleCard
                    articleType='lifestyle'
                    excerpt='Co rozumiem przez słowo rozwój? Naukę nowych rzeczy, a w przypadku mojej działki, nowych technolo'
                    path='#'
                    title='Aplikacja Netflix 2.0 - pierwsze podejście'
                />
                <ArticleCard
                    articleType='programming'
                    excerpt='Co rozumiem przez słowo rozwój? Naukę nowych rzeczy, a w przypadku mojej działki, nowych technolo'
                    path='#'
                    title='Aplikacja Netflix 2.0 - pierwsze podejście'
                />
                <ArticleCard
                    articleType='lifestyle'
                    excerpt='Co rozumiem przez słowo rozwój? Naukę nowych rzeczy, a w przypadku mojej działki, nowych technolo'
                    path='#'
                    title='Aplikacja Netflix 2.0 - pierwsze podejście'
                />
            </div>
        </BlogWrapper>
    )
}
export default Blog;