import React from 'react';
import SocialItemWrapper from './styles/SocialItemWrapper';
interface IsocialItem {
    icon : any,
    name : string,
    path : string
}
const SocialItem = ({icon,name,path}:IsocialItem) => {
    return(
        <SocialItemWrapper>
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