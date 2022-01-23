const React = require('react');
const {ThemeProvider} = require('styled-components');
const {default: theme} = require('./src/styles/theme');
const { default: Layout } = require('./src/templates/Layout');

exports.wrapRootElement = ({element}) => {
    return(
        <ThemeProvider theme={theme}>
            <Layout>
                {element}
            </Layout>
        </ThemeProvider>
    )
}
