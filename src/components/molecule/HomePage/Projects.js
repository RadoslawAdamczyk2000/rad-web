import React from 'react';
import tech from '../../../data/tech';
import ButtonPage from '../../../styles/Buttons/ButtonPage';
import ProjectsSectionWrapper from '../../../styles/Containers/ProjectsSectionWrapper';
import Text from '../../../styles/Text/Text';
import TitleSection from '../../../styles/Titles/TitleSection';
import ProjectCard from '../../atoms/HomePage/ProjectCard';

const Projects = () => {
    return(
        <ProjectsSectionWrapper>
            <div className='content'>
              <TitleSection>
                Projekty
              </TitleSection>
              <Text>
                Minima voluptas debitis reiciendis molestiae et nam iure. Sed tempora et saepe et occaecati aperiam doloremque est temporibus. Accusamus veniam et libero nisi qui. Repellendus quis delectus at excepturi. Ipsam soluta nam deserunt nesciunt voluptatem atque voluptate similique similique. Voluptas veniam qui recusandae aliquid voluptate odit.
              </Text>
            </div>
            <div className='projects'>
              <ProjectCard
                image='https://cdn.pixabay.com/photo/2021/11/16/18/10/nature-6801719_960_720.jpg'
                tech={[tech.html, tech.css, tech.bootstrap]}
                title='Future Brand Coordinator'
              />
              <ProjectCard
                image='https://cdn.pixabay.com/photo/2021/11/16/18/10/nature-6801719_960_720.jpg'
                title='Future Brand Coordinator'
              />
            </div>
            <ButtonPage>
                wszystkie projekty
            </ButtonPage>
        </ProjectsSectionWrapper>
    )
}

export default Projects;