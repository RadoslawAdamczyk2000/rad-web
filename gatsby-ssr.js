const React = require('react');
const {ThemeProvider} = require('styled-components');
const theme = require('./src/styles/theme');

exports.wrapRootElement = ({children}) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
