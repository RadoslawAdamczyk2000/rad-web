import Layout from '../templates/Layout';
import React from 'react';
import TitlePage from '../styles/Titles/TitlePage';
import Text from '../styles/Text/Text';
import ArticleCard from '../components/atoms/HomePage/ArticleCard';
import {graphql} from 'gatsby';
import BlogWrapper from '../styles/Containers/BlogWrapper';

const BlogPage = ({data}) => {
    return(
        <Layout
            metaDescription='Szukasz ciekawostek o szeroko rozumianym internecie, programowaniu? A może szukasz ciekawostek historycznych lub o tym co się dzieje w moim życiu? W odpowiedzi na te pytania zapraszam do śledzenia bloga.'
            metaTitle='Blog o programowaniu, pozycjonowaniu, historii, stylu życia, Śrem, Poznań - RadWEB'
        >
            <BlogWrapper>
                <div className='content'>
                    <TitlePage>
                        Blog
                    </TitlePage>
                    <Text>
                        HiT - historia i teraźniejszość - to idealna kwintensencja mojego osobistego blogu. Z tego segmentu serwisu poznasz głębiej tajniki stron internetowych oraz pozycjonowania. Ponadto dowiesz się tutaj wiele o historii, w szczególności o przeszłości Polski, o ważnych personach. A propo historii, możesz się w tym miejscu zaznajomić z moim ciągle rozwijającym się życiorysem. Jeśli Ciebie zaciekawiłem to nic innego mi nie zostaje jak zaprosić do lektury co do raz bardziej rozszerzanej biblioteki arytkułów. 
                    </Text>
                </div>
                <div className='cards'>
                    {
                        data.allDatoCmsArticle.edges.map(({node}) => 
                            <ArticleCard
                                title={node.title}
                                excerpt={node.excerpt}
                                path={'/blog/' + node.slug}
                            />
                        )
                    }
                </div>
            </BlogWrapper>
        </Layout>
    )
}

export const getAllArticles = graphql`
    query AllArticles {
  allDatoCmsArticle(sort: {fields: meta___publishedAt, order: DESC}) {
    edges {
      node {
        title
        slug
        excerpt
      }
    }
  }
}

`

export default BlogPage;