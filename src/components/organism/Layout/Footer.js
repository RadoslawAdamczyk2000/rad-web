import Author from '../../atoms/Layout/Footer/Author';
import ContactBox from '../../molecule/Layout/Footer/ContactBox';
import React from 'react';
import SeoBox from '../../molecule/Layout/Footer/SeoBox';
import SocialsBox from '../../molecule/Layout/Footer/SocialsBox';
import FooterWrapper from '../../../styles/Containers/FooterWrapper';

const Footer = ({isArticle}) => {
    return(
        <FooterWrapper isArticle={isArticle}>
            <div className='box'>
                <div>
                    <SeoBox isArticle={isArticle}/>
                </div>
                <div>
                    <ContactBox isArticle={isArticle}/>
                    <SocialsBox isArticle={isArticle}/>
                </div>
            </div>
            <Author/>
        </FooterWrapper>
    )
}

export default Footer;