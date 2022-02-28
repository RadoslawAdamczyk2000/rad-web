import React from 'react';
import MenuItemWrapper from './styles/MenuItemWrapper';
const MenuItem = ({children, path}) => {
    return(
        <MenuItemWrapper to={path}>
            {children}
        </MenuItemWrapper>
    )
}
export default MenuItem;