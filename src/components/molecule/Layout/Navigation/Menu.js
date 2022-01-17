import React from 'react';
import navigation from '../../../../data/navigation';
import MenuWrapper from '../../../../styles/Containers/MenuWrapper';
import MenuItem from '../../../atoms/Layout/Navigation/MenuItem';

const Menu = () => {
    return(
        <MenuWrapper>
            {
                navigation.menu.map( i =>
                    <MenuItem path={i.path}>
                        {i.name}
                    </MenuItem> 
                )
            }
        </MenuWrapper>
    )
}

export default Menu;