import React from 'react';
import ContactItemWrapper from './styles/ContactItemWrapper';
interface IcontactItem {
    children : any,
    isLink ?: boolean,
    path ?: string
}
const ContactItem = ({children,isLink=false,path}:IcontactItem) => {
    return(
        <ContactItemWrapper>
            {
                isLink ?
                <a href={path} isLink={isLink}>{children}</a> :
                <p>{children}</p>
            }
        </ContactItemWrapper>
    )
}
export default ContactItem;