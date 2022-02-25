import LinkButtonWrapper from './styles/LinkButtonWrapper';
import React from 'react';
import { Link } from 'gatsby';
const LinkButton = ({path,title}:{path:string,title:string}) => {
    return(
        <LinkButtonWrapper>
            <Link to={path}>
                {title}
            </Link>
        </LinkButtonWrapper>
    )
}
export default LinkButton;