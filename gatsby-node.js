const path = require('path');

exports.createPages = async ({graphql, actions}) => {

    const {data} = await graphql(`
        query articlesLinks {
            allDatoCmsArticle {
            edges {
                node {
                slug
                }
            }
            }
            allDatoCmsProject {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    data.allDatoCmsArticle.edges.forEach(({node}) => (
        actions.createPage({
            path:'/blog/' + node.slug,
            component:path.resolve('./src/templates/ArticleTemplate.js'),
            context:{slug:node.slug}
        })
    ))

    data.allDatoCmsProject.edges.forEach(({node}) => (
        actions.createPage({
            path:'/projects/' + node.slug,
            component:path.resolve('./src/templates/ProjectTemplate.js'),
            context:{slug:node.slug}
        })
    ))
}