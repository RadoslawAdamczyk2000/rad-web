import React from 'react';
import Layout from './Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {graphql} from 'gatsby';
import TitlePage from '../styles/Titles/TitlePage';
import TextExcerptArticle from '../styles/Text/TextExcerptArticle';
import ArticlePoster from '../styles/Image/ArticlePoster';
import ButtonReturn from '../styles/Buttons/ReturnButtonWrapper';
import Text from '../styles/Text/Text';

const ProjectTemplate = ({data}) => {

    const contentValue = data.datoCmsProject.content;
    const excerptValue = data.datoCmsProject.excerpt;
    const image = data.datoCmsProject.poster.url;

    return(
        <Layout isArticle
            metaDescription={data.datoCmsProject.seo.description}
            metaTitle={data.datoCmsProject.seo.title}
        >   
            <ButtonReturn path='/'/>
            <TitlePage isArticle>
                {data.datoCmsProject.title}
            </TitlePage>
            <div>
                <div>
                </div>
                <a href={data.datoCmsProject.link} target='_blank' rel='noopener noreferrer nofollow'>
                    Zobacz
                </a>
            </div>
            <ArticlePoster image={image}/>
            <TextExcerptArticle dangerouslySetInnerHTML={{__html : excerptValue}}/>
            <br/>
            <br/>
            <Text>
                {
                     contentValue
                }
            </Text>
        </Layout>
    )
}

export const getProject = graphql`
    query getProjecty($slug: String) {
    datoCmsProject(slug: {eq: $slug}) {
        seo {
        title
        description
        }
        title
        tags
        slug
        excerpt
        content
        poster {
        url
        }
        link
    }
    }
`



export default ProjectTemplate;