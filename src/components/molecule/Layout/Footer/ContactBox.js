import React from 'react';
import ContactItem from '../../../atoms/Layout/Footer/ContactItem';
import Map from '../../../atoms/Layout/Footer/Map';

const ContactBox = ({isArticle}) => {
    return(
        <div>
            <div>
                <ContactItem isArticle={isArticle}>
                    Radosław Adamczyk
                </ContactItem>
                <ContactItem isArticle={isArticle}>
                    RadWEB
                </ContactItem>
                <ContactItem 
                    isArticle={isArticle}
                    isLink 
                    path='mailto:radoslaw.adamczyk2000@gmail.com'
                >
                    radoslaw.adamczyk2000@gmail.com
                </ContactItem>
                <ContactItem 
                    isArticle={isArticle}
                    isLink 
                    path='tel:+48794100413'
                >
                    +48 794-100-413
                </ContactItem>
                <ContactItem isArticle={isArticle}>
                    Donatowo 53, 64-020
                </ContactItem>
            </div>
            <Map/>
        </div>
    )
}

export default ContactBox;