import ProjectItem from '../../atom/ProjectsPage/ProjectItem';
import React from 'react';
import {tech} from '../../../data/tech';
import ProjectsWrapper from './styles/ProjectsWrapper';
import { projects } from '../../../data/posts/projects';
const Projects = () => {
    return(
        <ProjectsWrapper>
            {
                projects.map(({image,title,path,stack}) =>
                    <ProjectItem
                        image={image}
                        icons={stack}
                        path={path}
                        title={title}
                    />    
                )
            }
        </ProjectsWrapper>
    )
}
export default Projects;