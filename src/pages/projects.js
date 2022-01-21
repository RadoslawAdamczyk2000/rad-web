import Layout from '../templates/Layout';
import React from 'react';
import TitlePage from '../styles/Titles/TitlePage';
import Text from '../styles/Text/Text';
import ProjectCard from '../components/atoms/HomePage/ProjectCard';
import {graphql} from 'gatsby';
import ProjectsWrapper from '../styles/Containers/ProjectsWrapper';

const ProjectsPage = ({data}) => {
    return(
        <Layout
            metaDescription='Aplikacja pogodowa, prywatny Netlix oraz strony dla plantatorów i operatorów filmowych - co to wszystko łączy? To są moje projekty oraz efekty współpracy z klientami, którzy mi zaufali.'
            metaTitle='Projekty aplikacji i stron internetowych, realizacje komercyjne, Śrem, Poznań - RadWEB'
        >
            <ProjectsWrapper>
                <div className='content'>
                    <TitlePage>
                        Projekty
                    </TitlePage>
                    <Text>
                        To jest sedno mojej pracy i rozwoju w tej branży. Znajdziesz tutaj prace wykonane na zlecenie oraz zrealizowane pod wpływem inspiracji. Wszystko realizowałem z wykorzystaniem topowych i rekomendowanych przez mądrzejszych technologii. Są to głównie strony internetowe, aplikacje oraz serwisy z systemami zarządzania treściami. To doświadczenie pozwoliło mi zdobyć wiedzę z użycia HTML'a, CSS'a, JavaScript'u, React'a, Gatsby'ego oraz PHP'a wraz z bazą danych MySQL. W czasach zamierzchłych, kiedy to uczyłem się w śremskim KPALO, miałem okazję zaznajomić się z C++ oraz z relacyjnymi bazami danych Access.
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