import React from 'react';
import AuthorWrapper from '../../../../styles/Containers/AuthorWrapper';

const Author = () => {
    const currentYear = new Date().getFullYear();
    return(
        <AuthorWrapper>
            <p>
                Radosław Adamczyk &copy; {currentYear}
            </p>
        </AuthorWrapper>
    )
}

export default Author;