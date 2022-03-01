import ContactItem from '../../../../atom/Layout/Page/Footer/ContactItem';
import React from 'react';
import TextItem from '../../../../atom/Layout/Page/Footer/TextItem';
import ContactBoxWrapper from './styles/ContactBoxWrapper';
const ContactBox = () => {
    return(
        <ContactBoxWrapper>
            <TextItem>Radosław Adamczyk</TextItem>
            <TextItem isBrand={true}>RadWEB</TextItem>
            <ContactItem path='mailto:radoslaw.adamczyk2000@gmail.com'>radoslaw.adamczyk2000@gmail.com</ContactItem>
            <ContactItem path='tel:+48794100413'>+48 794-100-413</ContactItem>
            <TextItem>Donatowo 53, 64-020 Czempiń</TextItem>
        </ContactBoxWrapper>
    )
}
export default ContactBox;