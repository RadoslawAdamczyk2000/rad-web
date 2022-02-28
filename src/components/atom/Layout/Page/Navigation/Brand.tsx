import BrandWrapper from '../../../../../styles/Containers/BrandWrapper';
import React from 'react';
import { Link } from 'gatsby';
const Brand = () => {
    return(
        <BrandWrapper>
            <Link to='/'>
                RadWEB
            </Link>
        </BrandWrapper>
    )
}
export default Brand;