import ProjectItem from '../../atom/ProjectsPage/ProjectItem';
import React from 'react';
import {tech} from '../../../data/tech';
const Projects = () => {
    return(
        <div>
            <ProjectItem
                icons={[tech.html,tech.css,tech.react,tech.gatsby,tech.styledcomponents]}
                path='#'
                title='Agromar'
            />
        </div>
    )
}
export default Projects;