import React from 'react';
import ReturnButtonWrapper from './styles/ReturnButtonWrapper';
import { Link } from 'gatsby';

const ReturnButton = ({path}) => {
    return(
        <ReturnButtonWrapper>
            <Link to={path}>
                wróć
            </Link>
        </ReturnButtonWrapper>
    )
}

export default ReturnButton;