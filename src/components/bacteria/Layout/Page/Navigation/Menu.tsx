import MenuItem from '../../../../atom/Layout/Page/Navigation/MenuItem';
import MenuWrapper from './styles/MenuWrapper';
import React from 'react';
import {menu} from '../../../../../data/menu';
const Menu = () => {
    return(
        <MenuWrapper>
            {
                menu.map( ({name,path}) =>
                    <MenuItem path={path}>
                        {name}
                    </MenuItem> 
                )
            }
        </MenuWrapper>
    )
}
export default Menu;