import React from 'react';
import Layout from './Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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

    console.log(data.datoCmsArticle.text[6])
    // Cześć, próbuję wymapować elementy z artykułu w datoCms. Chcę aby elementy artykułu wyświetlały się w takiej kolejności jakie były napisane. Byłem pewien, po sprawdzeniu w consol.logu data.datoCmsArticle.text wystarczy wymapować bo to tablica ... niestety nie udało się. Kolejnym podejściem było mapowanie z parametrem ({text}), ale też bez rezultatu. Czy ktoś z was ma na to remedium?

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
            <br/>
{/* 
            {
                data.datoCmsArticle.map( ({text}) => {
                    return(
                        <div>
                            {
                                <>
                                    <h3>{text.heading}</h3>
                                    <p>{text.content}</p>
                                </>
                            }
                        </div>
                    )
                })
            } */}

            {
                data.datoCmsArticle.text.map( ({content, heading}) => <><TitleSection content={heading} isArticle/><Text content={content} isArticle/></>)
            }
            <br/>
            <br/>
            <br/>
            
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