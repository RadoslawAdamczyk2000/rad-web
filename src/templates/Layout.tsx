import Footer from  '../components/molecule/Layout/Page/Footer/Footer';
import Global from '../styles/Global';
import Head from '../components/atoms/Layout/Head';
import React from 'react';
import Wrapper from '../styles/Containers/Wrapper';
import Navigation from '../components/molecule/Layout/Page/Navigation/Navigation';
interface Ilayout {
    children : any,
    metaDescription : string,
    metaRobots ?: string,
    metaTitle : string,
    canonical ?: string
}
const Layout = ({children,metaDescription, metaRobots, metaTitle, canonical}:Ilayout)  => {
    return(
        <>
            <Head
                canonical={canonical}
                metaDescription={metaDescription}
                metaRobots={metaRobots}
                metaTitle={metaTitle}
            />
            <Global/>
            <Navigation/>
            <Wrapper>
                {children}
            </Wrapper>
            <Footer/>
        </>
    )
}
export default Layout;