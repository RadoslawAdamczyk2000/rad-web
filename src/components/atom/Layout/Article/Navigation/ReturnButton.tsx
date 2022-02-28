import { Link } from 'gatsby';
import React from 'react';

const ReturnButton = ({path}) => {
    return(
        <Link to={path}>
            wróć
        </Link>
    )
}

export default ReturnButton;