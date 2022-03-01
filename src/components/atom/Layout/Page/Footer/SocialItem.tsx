import React from 'react';
import SocialItemWrapper from './styles/SocialItemWrapper';
interface IsocialItem {
    color : string,
    icon : any,
    name : string,
    path : string
}
const SocialItem = ({color,icon,name,path}:IsocialItem) => {
    return(
        <SocialItemWrapper color={color}>
            <a 
                href={path} 
                title={name}
            >
                {icon}
            </a>
        </SocialItemWrapper>
    )
}
export default SocialItem;