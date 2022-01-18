import React from 'react';
import Layout from './Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {graphql} from 'gatsby';

const ArticleTemplate = ({data}) => {

    const excerptValue = data.datoCmsArticle.excerpt;
    const image = data.datoCmsArticle.poster.url;

    return(
        <Layout isArticle
            metaDescription={data.datoCmsArticle.seo.description}
            metaTitle={data.datoCmsArticle.seo.title}
        >
            <h1>
                {data.datoCmsArticle.title}
            </h1>
            <img src={image} style={{width:'200px'}}/>
            <strong dangerouslySetInnerHTML={{__html : excerptValue}}/>
            <p>

            </p>
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
                fluid {
                    src
                }
                url
            }
            excerpt
        }
    }
`

export default ArticleTemplate;