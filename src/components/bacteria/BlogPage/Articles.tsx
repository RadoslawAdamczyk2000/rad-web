import React from 'react';
import ArticleCard from '../../atom/BlogPage/ArticleCard';
const Articles = () => {
    return(
        <div>
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
        </div>
    )
}
export default Articles;
