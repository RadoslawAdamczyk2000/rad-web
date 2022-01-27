import React from 'react';
import Layout from './Layout';
import {graphql} from 'gatsby';
import TitlePage from '../styles/Titles/TitlePage';
import TextExcerptArticle from '../styles/Text/TextExcerptArticle';
import ArticlePoster from '../styles/Image/ArticlePoster';
import ButtonReturn from '../styles/Buttons/ReturnButtonWrapper';
import Text from '../styles/Text/Text';
import TitleSection from '../styles/Titles/TitleSection';
const ArticleTemplate = ({data}) => {
    const excerptValue = data.datoCmsArticle.excerpt;
    const image = data.datoCmsArticle.poster.url;
    return(
        <Layout isArticle
            metaDescription={data.datoCmsArticle.seo.description}
            metaTitle={data.datoCmsArticle.seo.title}
        >   
            <ButtonReturn path='/blog'/>
            <TitlePage isArticle>
                {data.datoCmsArticle.title}
            </TitlePage>
            <ArticlePoster image={image}/>
            <TextExcerptArticle dangerouslySetInnerHTML={{__html : excerptValue}}/>
            {
                data.datoCmsArticle.text.map( ({content, heading}) => <><TitleSection content={heading} isArticle/><Text content={content} isArticle/></>)
            }
        </Layout>
    )
}

export const getArticle = graphql`
    query getArticle($slug : String){
        datoCmsArticle(slug: {eq: $slug}) {
            seo {
            title
            description
            }
            title
            poster {
            url
            }
            excerpt
            text {
            ... on DatoCmsHeading {
                heading
            }
            ... on DatoCmsContent {
                content
            }
            ... on DatoCmsImage {
                image {
                url
                }
            }
            ... on DatoCmsList {
                list
            }
            ... on DatoCmsMovie {
                movie {
                url
                }
            }
            }
        }
    }
`

export default ArticleTemplate;