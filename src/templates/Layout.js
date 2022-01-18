import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from '../components/atoms/Layout/Head';
import Navigation from '../components/organism/Layout/Navigation';
import Wrapper from '../styles/Containers/Wrapper';
import Global from '../styles/Global';
import theme from '../styles/theme';

const Layout = ({children, isArticle, metaDescription, metaRobots, metaTitle, canonical})  => {
    return(
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}

export default Layout;