import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
interface IprojectItem {
    icons : Array<any>,
    path : string,
    title: string
}
const ProjectItem = ({icons,path,title}:IprojectItem) => {
    return(
        <article>
            <StaticImage
                alt=''
                src='https://cdn.pixabay.com/photo/2021/12/28/11/38/trees-6899050_960_720.jpg'
            />
            <div>
                <Link to={path}>
                    {title}
                </Link>
                <ul>
                    {icons.map(i => <li>{i}</li>)}
                </ul>
                <Link to={path}>
                    więcej
                </Link>
            </div>
        </article>
    )
}
export default ProjectItem;
