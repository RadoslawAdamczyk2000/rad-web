import React from 'react';
import ContactItemWrapper from '../../../../styles/Containers/ContactItemWrapper';

const ContactItem = ({children, isArticle, isLink, path}) => {
    return(
        <ContactItemWrapper
            isArticle={isArticle}
        >
            {
                isLink ?
                <a href={path} isLink={isLink}>{children}</a> :
                <p>{children}</p>
            }
        </ContactItemWrapper>
    )
}

export default ContactItem;