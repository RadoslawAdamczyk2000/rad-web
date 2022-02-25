import React from 'react';
import HobbyItemWrapper from './styles/HobbyItemWrapper';
interface IhobbyItem {
    icon : any,
    title : string
}
const HobbyItem = ({icon, title}:IhobbyItem) => {
    return(
        <HobbyItemWrapper>
            <span>
                {icon}
            </span>
            <p>
                {title}
            </p>
        </HobbyItemWrapper>
    )
}

export default HobbyItem;