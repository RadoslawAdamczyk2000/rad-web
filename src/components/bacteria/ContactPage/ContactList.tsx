import ContactItem from '../../atom/ContactPage/ContactItem';
import React from 'react';
import {RiPhoneLine} from 'react-icons/ri';
import {VscMailRead} from 'react-icons/vsc';
import ContactListWrapper from './styles/ContactListWrapper';
const ContactList = () => {
    return(
        <ContactListWrapper>
            <ContactItem
                content='radoslaw.adamczyk2000@gmail.com'
                icon={<VscMailRead/>}
                path='mailto:radoslaw.adamczyk2000@gmail.com'
            />
            <ContactItem
                content='+48 794-100-413'
                icon={<RiPhoneLine/>}
                path='tel:+48794100413'
            />
        </ContactListWrapper>
    )
}
export default ContactList;