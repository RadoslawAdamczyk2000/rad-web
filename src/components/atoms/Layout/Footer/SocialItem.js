import React from 'react';
import SocialItemWrapper from '../../../../styles/Containers/SocialItemWrapper';

const SocialItem = ({icon, isArticle, name, path}) => {
    console.log(isArticle);
    return(
        <SocialItemWrapper isArticle={isArticle}>
            <a href={path} title={name}>
                {icon}
            </a>
        </SocialItemWrapper>
    )
}

export default SocialItem;