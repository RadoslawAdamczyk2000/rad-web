import ProjectItem from '../../atom/ProjectsPage/ProjectItem';
import React from 'react';
import {tech} from '../../../data/tech';
import ProjectsWrapper from './styles/ProjectsWrapper';
const Projects = () => {
    return(
        <ProjectsWrapper>
            <ProjectItem
                icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                path='#'
                title='Agromar'
            />
            <ProjectItem
                icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                path='#'
                title='Agromar'
            />
            <ProjectItem
                icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                path='#'
                title='Agromar'
            />
            <ProjectItem
                icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                path='#'
                title='Agromar'
            />
            <ProjectItem
                icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                path='#'
                title='Agromar'
            />
            <ProjectItem
                icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                path='#'
                title='Agromar'
            />
        </ProjectsWrapper>
    )
}
export default Projects;