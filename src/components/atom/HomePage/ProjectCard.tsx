import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import ProjectCardWrapper from './styles/ProjectCardWrapper';
interface IprojectItem {
    icons : Array<any>,
    image : string,
    path : string,
    title: string
}
const ProjectItem = ({icons,path,image,title}:IprojectItem) => {
    return(
        <ProjectCardWrapper>
             <img
                alt={`${title} poster`}
                src={image}
                style={{
                    height:'100%',
                    objectFit:'cover',
                    objectPosition:'center',
                    width:'100%',
                    zIndex:0
                }}
            />
            <div className='content'>
                <Link to={path} className='title'>
                    {title}
                </Link>
                <ul className='icons'>
                    {icons.map(i => <li>{i}</li>)}
                </ul>
                <Link to={path} className='button'>
                    więcej
                </Link>
            </div>
        </ProjectCardWrapper>
    )
}
export default ProjectItem;