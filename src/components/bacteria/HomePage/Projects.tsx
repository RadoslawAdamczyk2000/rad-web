import Button from '../../atom/HomePage/Button';
import ProjectCard from '../../atom/HomePage/ProjectCard';
import React from 'react';
import Text from '../../atom/HomePage/Text';
import TitleSection from '../../atom/HomePage/TitleSection';
import ProjectsWrapper from './styles/ProjectsWrapper';
import { tech } from '../../../data/tech';
import { projects } from '../../../data/posts/projects';
const Projects = () => {
    return(
        <ProjectsWrapper>
            <div className='cards'>
                <ProjectCard
                    image={projects[0].image}
                    icons={projects[0].stack}
                    path={projects[0].path}
                    title={projects[0].title}
                />
                <ProjectCard
                    image={projects[1].image}
                    icons={projects[1].stack}
                    path={projects[1].path}
                    title={projects[1].title}
                />
                <ProjectCard
                    image={projects[2].image}
                    icons={projects[2].stack}
                    path={projects[2].path}
                    title={projects[2].title}
                />
                <ProjectCard
                    image={projects[3].image}
                    icons={projects[3].stack}
                    path={projects[3].path}
                    title={projects[3].title}
                />
                <ProjectCard
                    image={projects[4].image}
                    icons={projects[4].stack}
                    path={projects[4].path}
                    title={projects[4].title}
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