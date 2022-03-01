import React from 'react';
import {RiShareCircleFill} from 'react-icons/ri';
interface IlinkPage {
    path : string
}
const LinkPage = ({path}:IlinkPage) => {
    return(
        <div>
            <a 
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
            </a>
        </div>
    )
}
export default LinkPage;