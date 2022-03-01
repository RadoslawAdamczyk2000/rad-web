import React from 'react';
import Author from '../../../../atom/Layout/Page/Footer/Author';
import ContactBox from '../../../../bacteria/Layout/Page/Footer/ContactBox';
import SocialsBox from '../../../../bacteria/Layout/Page/Footer/Socials';
const Footer = () => {
    return(
        <footer>
            <SocialsBox/>
            <ContactBox/>
            <Author/>
        </footer>
    )
}
export default Footer;