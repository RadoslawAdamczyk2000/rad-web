import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import ProjectItemWrapper from './styles/ProjectItemWrapper';
interface IprojectItem {
    icons : Array<any>,
    path : string,
    title: string
}
const ProjectItem = ({icons,path,title}:IprojectItem) => {
    return(
        <ProjectItemWrapper>
            <StaticImage
                alt={`${title} poster`}
                src='https://cdn.pixabay.com/photo/2021/12/28/11/38/trees-6899050_960_720.jpg'
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
        </ProjectItemWrapper>
    )
}
export default ProjectItem;
