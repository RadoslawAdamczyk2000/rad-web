import React from 'react';
import ContactItemWrapper from './styles/ContactItemWrapper';
interface IcontactItem {
    content : string, 
    icon : any,
    path : string
}
const ContactItem = ({content,icon,path}:IcontactItem) => {
    return(
        <ContactItemWrapper href={path}>
            <span className='icon'>
                {icon}
            </span>
            <span className='content'>
                {content}
            </span>
        </ContactItemWrapper>
    )
}
export default ContactItem;