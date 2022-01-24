const React = require('react');
const {ThemeProvider} = require('styled-components');
const {default: theme} = require('./src/styles/theme');
const {default: Global} = require('./src/styles/Global');

exports.wrapRootElement = ({element}) => {
    return(
        <>
            <Global/>
        </>
    )
}
