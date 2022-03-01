import React from 'react';
import ContactItemWrapper from './styles/ContactItemWrapper';
interface IcontactItem {
    children : any,
    path ?: string
}
const ContactItem = ({children,path}:IcontactItem) => {
    return(
        <ContactItemWrapper>
            <a href={path} >
                {children}
            </a> 
        </ContactItemWrapper>
    )
}
export default ContactItem;