import Layout from '../templates/Layout';
import React from 'react';
import TitlePage from '../styles/Titles/TitlePage';
import Text from '../styles/Text/Text';
import ArticleCard from '../components/atoms/HomePage/ArticleCard';
import {graphql} from 'gatsby';

const BlogPage = ({data}) => {
    return(
        <Layout>
            <TitlePage>
                Blog
            </TitlePage>
            <Text>
                Distinctio inventore est. Dignissimos aliquam debitis nihil at quasi optio dolores. Quisquam corporis quia neque sit vel dolorum optio. Ad enim dolor deleniti ullam quaerat necessitatibus ipsa exercitationem aliquam. Et consequuntur totam dolorem. Repudiandae nam repellendus iusto doloremque blanditiis rerum voluptatum ducimus sint.Veniam minima non et perferendis quia ad distinctio perferendis. Ratione eaque sit non. Est consequuntur voluptates eos cum. Quas necessitatibus odio asperiores. Cupiditate in ut in ducimus placeat voluptates expedita dicta omnis. Quo commodi corrupti consequatur. Officiis repudiandae esse est reiciendis adipisci.
            </Text>
            <div>
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