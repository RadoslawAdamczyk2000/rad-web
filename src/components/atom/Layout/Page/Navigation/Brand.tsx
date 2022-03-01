import BrandWrapper from './styles/BrandWrapper';
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