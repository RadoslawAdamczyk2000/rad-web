import ContactList from '../../bacteria/ContactPage/ContactList';
import React from 'react';
import Map from '../../atom/ContactPage/Map';
import ContactWrapper from './styles/ContactWrapper';
const Contact = () => {
    return(
        <ContactWrapper>
            <Map/>
            <ContactList/>
        </ContactWrapper>
    )
}
export default Contact;