import { Link } from 'gatsby';
import React from 'react';
import ButtonWrapper from './styles/ButtonWrapper';
interface Ibutton {
    center ?: boolean,
    small ?: boolean,
    path : string,
    title : string 
}
const Button = ({center=false,path,small=false,title}:Ibutton) => {
    return(
        <ButtonWrapper 
            isCenter={center} 
            isSmall={small}
        >
            <Link to={path}>
                {title}
            </Link>
        </ButtonWrapper>
    )
}
export default Button;