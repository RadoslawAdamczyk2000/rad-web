import ArticleCard from '../../atom/BlogPage/ArticleCard';
import ArticlesWrapper from './styles/ArticlesWrapper';
import React from 'react';
import { articles } from '../../../data/posts/articles';
const Articles = () => {
    return(
        <ArticlesWrapper>
            {
                articles.map(({excerpt,path,title,variant}) => 
                    <ArticleCard
                        articleType={variant}
                        excerpt={excerpt}
                        path={path}
                        title={title}
                    />        
                )
            }
            
        </ArticlesWrapper>
    )
}
export default Articles;
