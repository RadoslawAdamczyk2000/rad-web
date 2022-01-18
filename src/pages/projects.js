import Layout from '../templates/Layout';
import React from 'react';
import TitlePage from '../styles/Titles/TitlePage';
import Text from '../styles/Text/Text';
import ProjectCard from '../components/atoms/HomePage/ProjectCard';
import {graphql} from 'gatsby';
import ProjectsWrapper from '../styles/Containers/ProjectsWrapper';

const ProjectsPage = ({data}) => {
    return(
        <Layout>
            <ProjectsWrapper>
                <div className='content'>
                    <TitlePage>
                        Projekty
                    </TitlePage>
                    <Text>
                        Distinctio inventore est. Dignissimos aliquam debitis nihil at quasi optio dolores. Quisquam corporis quia neque sit vel dolorum optio. Ad enim dolor deleniti ullam quaerat necessitatibus ipsa exercitationem aliquam. Et consequuntur totam dolorem. Repudiandae nam repellendus iusto doloremque blanditiis rerum voluptatum ducimus sint.Veniam minima non et perferendis quia ad distinctio perferendis. Ratione eaque sit non. Est consequuntur voluptates eos cum. Quas necessitatibus odio asperiores. Cupiditate in ut in ducimus placeat voluptates expedita dicta omnis. Quo commodi corrupti consequatur. Officiis repudiandae esse est reiciendis adipisci.
                    </Text>
                </div>
                <div className='cards'>
                    {
                        data.allDatoCmsProject.edges.map(({node}) => 
                            <ProjectCard
                                image={node.poster.url}
                                title={node.title}
                                path={'/projects/' + node.slug}
                            />
                        )
                    }
                </div>
            </ProjectsWrapper>
        </Layout>
    )
}

export const getAllProjects = graphql`
    query AllProjects {
  allDatoCmsProject {
    edges {
      node {
        title
        slug
        tags
        poster {
          url
        }
      }
    }
  }
}

`

export default ProjectsPage;