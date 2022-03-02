import React from 'react';
import {RiShareCircleFill} from 'react-icons/ri';
import LinkPageWrapper from './styles/LinkPageWrapper';
interface IlinkPage {
    path : string
}
const LinkPage = ({path}:IlinkPage) => {
    return(
        <LinkPageWrapper 
            href={path} 
            target='_blank' 
            rel='noopener noreferrer nofollow noindex'
        >
            <span>
                <RiShareCircleFill/>
            </span>
            <span>
                wejdź
            </span>
        </LinkPageWrapper>
    )
}
export default LinkPage;