const React = require('react');
const {ThemeProvider} = require('styled-components');
const {default: theme} = require('./src/styles/theme');

exports.wrapRootElement = ({element}) => {
    return(
        <ThemeProvider theme={theme}>
            {element}
        </ThemeProvider>
    )
}
