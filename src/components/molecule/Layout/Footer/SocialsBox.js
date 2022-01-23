import navigation from '../../../../data/navigation';
import React from 'react';
import SocialItem from '../../../atoms/Layout/Footer/SocialItem';
import SocialsBoxWrapper from '../../../../styles/Containers/SocialsBoxWrapper';

const SocialsBox = ({isArticle}) => {
    return(
        <SocialsBoxWrapper isArticle={isArticle}>
            <ul>
                {
                    navigation.socials.map( i =>
                        <SocialItem
                            isArticle={isArticle}
                            icon={i.icon}
                            name={i.name}
                            path={i.path}
                        />
                    )
                }
            </ul>
        </SocialsBoxWrapper>
    )
}

export default SocialsBox;