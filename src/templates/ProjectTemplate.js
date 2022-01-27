import React from 'react';
import Layout from './Layout';
import {graphql} from 'gatsby';
import TitlePage from '../styles/Titles/TitlePage';
import TextExcerptArticle from '../styles/Text/TextExcerptArticle';
import ArticlePoster from '../styles/Image/ArticlePoster';
import ButtonReturn from '../styles/Buttons/ReturnButtonWrapper';
import Text from '../styles/Text/Text';
import ButtonProject from '../styles/Buttons/ButtonProject';
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
            <TitlePage isProject>
                {data.datoCmsProject.title}
            </TitlePage>
            <ButtonProject path={data.datoCmsProject.link}/>
            <ArticlePoster image={image}/>
            <TextExcerptArticle dangerouslySetInnerHTML={{__html : excerptValue}}/>
            <br/>
            <br/>
            <Text content={contentValue} isArticle/>
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