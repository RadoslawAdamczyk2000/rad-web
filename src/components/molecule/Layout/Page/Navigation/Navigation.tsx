import Brand from '../../../../atom/Layout/Page/Navigation/Brand';
import Menu from '../../../../bacteria/Layout/Page/Navigation/Menu';
import NavigationWrapper from './styles/NavigationWrapper';
import React from 'react';
const Navigation = () => {
    return(
        <NavigationWrapper>
            <div>
                <Brand/>
            </div>
            <Menu/>
        </NavigationWrapper>
    )
}
export default Navigation;