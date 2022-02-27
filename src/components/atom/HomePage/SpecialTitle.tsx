import React from 'react';
import SpecialTitleWrapper from './styles/SpecialTitleWrapper';
const SpecialTitle = ({children}) => {
    return(
        <SpecialTitleWrapper>
            {children}
        </SpecialTitleWrapper>
    )
}
export default SpecialTitle;