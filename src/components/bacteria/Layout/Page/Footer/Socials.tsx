import React from 'react';
import SocialItem from '../../../../atom/Layout/Page/Footer/SocialItem';
import SocialsWrapper from './styles/SocialsWrapper';
import {socials} from '../../../../../data/socials';
const SocialsBox = () => {
    return(
        <SocialsWrapper>
            <ul>
                {
                    socials.map( ({color,icon,path,title}) =>
                        <SocialItem
                            color={color}
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