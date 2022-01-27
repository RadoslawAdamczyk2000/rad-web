import React from 'react';
import ButtonPage from '../../../styles/Buttons/ButtonPage';
import ProjectsSectionWrapper from '../../../styles/Containers/ProjectsSectionWrapper';
import Text from '../../../styles/Text/Text';
import TitleSection from '../../../styles/Titles/TitleSection';
import ProjectCard from '../../atoms/HomePage/ProjectCard';

const Projects = ({data}) => {
    return(
        <ProjectsSectionWrapper>
            <div className='content'>
              <TitleSection isCenter isHeading>
                Projekty
              </TitleSection>
              <Text isCenter>
                Moje projekty to kompilacja realizacji komerycjnych oraz własnych stron i aplikacji internetowych. Stack technologiczny, w którym się poruszam to HTML, CSS, frameworki stylowania Bootstrap oraz Tailwind, preprocesor SCSS, JavaScript, TypeScript, biblioteka React, wraz z front-endowymi frameworkami: GatsbyJS oraz VueJS, który co raz bardziej rozszerza się na rynku. W planach mam również napisanie kilka projektów w AngularJS. Posiadam również trochę komercyjnego doświadczenia w technologiach back-endowych, tj. PHP oraz MySQL.
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