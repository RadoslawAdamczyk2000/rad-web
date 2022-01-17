import React from 'react';
import ButtonLink from '../../../styles/Buttons/ButtonLink';
import ProjectCardWrapper from '../../../styles/Containers/ProjectCardWrapper';
import PropTypes, { array } from 'prop-types';
import TitleSection from '../../../styles/Titles/TitleSection';

const ProjectCard = ({ image, path, tech, title}) => {
    return(
        <ProjectCardWrapper>
            <img className='poster' src={image}/>
            <div className='content'>
                <p>
                    {title}
                </p>
                <ul className='tech'>
                    {
                        tech.map( i => 
                            <li>{i}</li>
                        )
                    }
                </ul>
                <ButtonLink path={path}>
                    więcej
                </ButtonLink>
            </div>
        </ProjectCardWrapper>
    )
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tech: PropTypes.array,
    title: PropTypes.string.isRequired
}

ProjectCard.defaultProps = {
    tech: []
}

export default ProjectCard;

