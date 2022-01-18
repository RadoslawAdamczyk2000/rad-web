import React from 'react';
import Layout from './Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {graphql} from 'gatsby';
import TitlePage from '../styles/Titles/TitlePage';
import TextExcerptArticle from '../styles/Text/TextExcerptArticle';
import ArticlePoster from '../styles/Image/ArticlePoster';
import ButtonReturn from '../styles/Buttons/ReturnButtonWrapper';

const ArticleTemplate = ({data}) => {

    const excerptValue = data.datoCmsArticle.excerpt;
    const image = data.datoCmsArticle.poster.url;

    return(
        <Layout isArticle
            metaDescription={data.datoCmsArticle.seo.description}
            metaTitle={data.datoCmsArticle.seo.title}
        >   
            <ButtonReturn path='/'/>
            <TitlePage isArticle>
                {data.datoCmsArticle.title}
            </TitlePage>
            <ArticlePoster image={image}/>
            <TextExcerptArticle dangerouslySetInnerHTML={{__html : excerptValue}}/>
            <br/>
            <br/>
            <br/>
            <br/>
            
        </Layout>
    )
}

export const getArticle = graphql`
    query getArticle($slug : String){
        datoCmsArticle(slug: {eq:$slug}) {
            seo {
                title
                description
            }
            title
            poster {
                url
            }
            excerpt
        }
    }
`

export default ArticleTemplate;