import Brand from '../../atoms/Layout/Navigation/Brand';
import React from 'react';
import ButtonMenu from '../../../styles/Buttons/ButtonMenu';
import Menu from '../../molecule/Layout/Navigation/Menu';
import NavigationWrapper from '../../../styles/Containers/NavigationWrapper';


const Navigation = () => {
    return(
        <NavigationWrapper>
            <div>
                <Brand/>
                <ButtonMenu/>
            </div>
            <Menu/>
        </NavigationWrapper>
    )
}

export default Navigation;