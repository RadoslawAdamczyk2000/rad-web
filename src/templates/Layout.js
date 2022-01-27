import React from 'react';
import Head from '../components/atoms/Layout/Head';
import Footer from '../components/organism/Layout/Footer';
import Navigation from '../components/organism/Layout/Navigation';
import Wrapper from '../styles/Containers/Wrapper';
import Global from '../styles/Global';

const Layout = ({children, isArticle, metaDescription, metaRobots, metaTitle, canonical})  => {
    return(
        <>
            <Head
                canonical={canonical}
                metaDescription={metaDescription}
                metaRobots={metaRobots}
                metaTitle={metaTitle}
            />
            <Global isArticle={isArticle}/>
            {isArticle ?? <Navigation/>}
            <Wrapper isArticle={isArticle}>
                {children}
            </Wrapper>
            <Footer isArticle={isArticle}/>
        </>
    )
}

export default Layout;