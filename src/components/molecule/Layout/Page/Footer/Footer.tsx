import Author from '../../../../atom/Layout/Page/Footer/Author';
import ContactBox from '../../../../bacteria/Layout/Page/Footer/ContactBox';
import FooterWrapper from './styles/FooterWrapper';
import React from 'react';
import SocialsBox from '../../../../bacteria/Layout/Page/Footer/Socials';
const Footer = () => {
    return(
        <FooterWrapper>
            <SocialsBox/>
            <ContactBox/>
            <Author/>
        </FooterWrapper>
    )
}
export default Footer;