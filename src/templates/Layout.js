import React from 'react';
import { ThemeProvider } from 'styled-components';
import Wrapper from '../styles/Containers/Wrapper';
import Global from '../styles/Global';
import theme from '../styles/theme';

const Layout = ({children, isArticle})  => {
    return(
        <ThemeProvider theme={theme}>
            <Global isArticle={isArticle}/>
            <Wrapper>
                {children}
            </Wrapper>
        </ThemeProvider>
    )
}

export default Layout;