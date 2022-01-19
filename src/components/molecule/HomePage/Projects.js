import React from 'react';
import tech from '../../../data/tech';
import ButtonPage from '../../../styles/Buttons/ButtonPage';
import ProjectsSectionWrapper from '../../../styles/Containers/ProjectsSectionWrapper';
import Text from '../../../styles/Text/Text';
import TitleSection from '../../../styles/Titles/TitleSection';
import ProjectCard from '../../atoms/HomePage/ProjectCard';

const Projects = ({data}) => {
  console.log(data.allDatoCmsProject.edges[0].node.title);

    return(
        <ProjectsSectionWrapper>
            <div className='content'>
              <TitleSection isCenter isHeading>
                Projekty
              </TitleSection>
              <Text isCenter>
                Minima voluptas debitis reiciendis molestiae et nam iure. Sed tempora et saepe et occaecati aperiam doloremque est temporibus. Accusamus veniam et libero nisi qui. Repellendus quis delectus at excepturi. Ipsam soluta nam deserunt nesciunt voluptatem atque voluptate similique similique. Voluptas veniam qui recusandae aliquid voluptate odit.
              </Text>
            </div>
            <div className='projects'>
              {
                data.allDatoCmsProject.edges.map( ({node}) => 
                  <ProjectCard
                    image={node.poster.url}
                    title={node.title}
                    path={'/projects/' + node.slug}
                  />
                )
              }
            </div>
            <div className='button'>
                <ButtonPage path='/projects'>
                    wszystkie projekty
                </ButtonPage>
            </div>
        </ProjectsSectionWrapper>
    )
}

export default Projects;