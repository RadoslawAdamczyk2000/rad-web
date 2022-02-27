import Button from '../../atom/HomePage/Button';
import ProjectCard from '../../atom/HomePage/ProjectCard';
import React from 'react';
import Text from '../../atom/HomePage/Text';
import TitleSection from '../../atom/HomePage/TitleSection';
import ProjectsWrapper from './styles/ProjectsWrapper';
import { tech } from '../../../data/tech';
const Projects = () => {
    return(
        <ProjectsWrapper>
            <div className='cards'>
                <ProjectCard
                    icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                    path='#'
                    title='Agromar'
                />
                <ProjectCard
                    icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                    path='#'
                    title='Agromar'
                />
                <ProjectCard
                    icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                    path='#'
                    title='Agromar'
                />
                <ProjectCard
                    icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                    path='#'
                    title='Agromar'
                />
                <ProjectCard
                    icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                    path='#'
                    title='Agromar'
                />
            </div>
            <div className='head'>
                <TitleSection
                    title='Projekty i realizacje'
                />
                <Text>
                    <p>
                        Moje projekty to kompilacja realizacji komerycjnych oraz własnych stron i aplikacji internetowych. Stack technologiczny, w którym się poruszam to HTML, CSS, frameworki stylowania Bootstrap oraz Tailwind, preprocesor SCSS, JavaScript, TypeScript, biblioteka React, wraz z front-endowymi frameworkami: GatsbyJS oraz VueJS, który co raz bardziej rozszerza się na rynku. W planach mam również napisanie kilka projektów w AngularJS. Posiadam również trochę komercyjnego doświadczenia w technologiach back-endowych, tj. PHP oraz MySQL.
                    </p>
                </Text>
                <Button
                    center={true}
                    path='/projects'
                    title='wszystkie projekty'
                />
            </div>
        </ProjectsWrapper>
    )
}
export default Projects;