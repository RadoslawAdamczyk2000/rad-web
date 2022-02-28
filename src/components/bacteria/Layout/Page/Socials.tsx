import React from 'react';
import SocialItem from '../../../atom/Layout/Page/Footer/SocialItem';
import { socials } from '../../../../data/socials';
import SocialsWrapper from './styles/SocialsWrapper';
const SocialsBox = () => {
    return(
        <SocialsWrapper>
            <ul>
                {
                    socials.map( ({icon,path,title}) =>
                        <SocialItem
                            icon={icon}
                            name={title}
                            path={path}
                        />
                    )
                }
            </ul>
        </SocialsWrapper>
    )
}
export default SocialsBox;