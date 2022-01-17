import React from 'react';
import MenuItemWrapper from '../../../../styles/Containers/MenuItemWrapper';

const MenuItem = ({children, path}) => {
    return(
        <MenuItemWrapper to={path}>
            {children}
        </MenuItemWrapper>
    )
}

export default MenuItem;