import React from 'react';

const HobbyItem = ({icon, title}) => {
    return(
        <div>
            <span>
                {icon}
            </span>
            <p>
                {title}
            </p>
        </div>
    )
}

export default HobbyItem;