import React from 'react';
import HobbyItemWrapper from '../../../styles/Containers/HobbyItemWrapper';

const HobbyItem = ({icon, title}) => {
    return(
        <HobbyItemWrapper
            whileHover={{
                boxShadow:'0 0 1rem hsla(0,100%,100%,.5)',
                scale:1.05
            }}
        >
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