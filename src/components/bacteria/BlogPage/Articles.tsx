import ArticleCard from '../../atom/BlogPage/ArticleCard';
import ArticlesWrapper from './styles/ArticlesWrapper';
import React from 'react';
const Articles = () => {
    return(
        <ArticlesWrapper>
            <ArticleCard
                articleType='history'
                excerpt='Dbanie o swój wizerunek w sieci jest podstawą do budowania swojej marki. Z racji tego, że chcę si...'
                path='#'
                title='Efekty pozycjonowania portfolio 20.02.2022'
            />
            <ArticleCard
                articleType='history'
                excerpt='Dbanie o swój wizerunek w sieci jest podstawą do budowania swojej marki. Z racji tego, że chcę si...'
                path='#'
                title='Efekty pozycjonowania portfolio 20.02.2022'
            />
            <ArticleCard
                articleType='history'
                excerpt='Dbanie o swój wizerunek w sieci jest podstawą do budowania swojej marki. Z racji tego, że chcę si...'
                path='#'
                title='Efekty pozycjonowania portfolio 20.02.2022'
            />
            <ArticleCard
                articleType='seo'
                excerpt='Dbanie o swój wizerunek w sieci jest podstawą do budowania swojej marki. Z racji tego, że chcę si...'
                path='#'
                title='Efekty pozycjonowania portfolio 20.02.2022'
            />
            <ArticleCard
                articleType='lifestyle'
                excerpt='Dbanie o swój wizerunek w sieci jest podstawą do budowania swojej marki. Z racji tego, że chcę si...'
                path='#'
                title='Efekty pozycjonowania portfolio 20.02.2022'
            />
        </ArticlesWrapper>
    )
}
export default Articles;
