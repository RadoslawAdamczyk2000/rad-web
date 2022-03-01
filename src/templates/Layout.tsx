import Footer from  '../components/molecule/Layout/Page/Footer/Footer';
import Global from '../styles/Global';
import Head from '../components/atoms/Layout/Head';
import Navigation from '../components/organism/Layout/Navigation';
import React from 'react';
import Wrapper from '../styles/Containers/Wrapper';
interface Ilayout {
    children : any,
    isArticle ?: boolean,
    metaDescription : string,
    metaRobots ?: string,
    metaTitle : string,
    canonical ?: string
}
const Layout = ({children, isArticle=false, metaDescription, metaRobots, metaTitle, canonical}:Ilayout)  => {
    return(
        <>
            <Head
                canonical={canonical}
                metaDescription={metaDescription}
                metaRobots={metaRobots}
                metaTitle={metaTitle}
            />
            <Global isArticle={isArticle}/>
            <Navigation/>
            <Wrapper isArticle={isArticle}>
                {children}
            </Wrapper>
            <Footer/>
        </>
    )
}
export default Layout;