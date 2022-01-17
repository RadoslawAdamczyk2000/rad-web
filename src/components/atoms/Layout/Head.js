import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({metaDescription, metaRobots, metaTitle, canonical}) => {
    return(
        <Helmet>
            <title>{metaTitle}</title>
            <meta name='author' content='Radosław RadWEB Adamczyk'/>
            <meta name='description' content={metaDescription}/>
            <meta property="og:site_name" content="RadWEB" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <meta name="google-site-verification" content="1R0cNdnVvIwcVStMUJAi1N2vG73gP-13D0eY4ONp2bw" />
            <meta property="og:title" content={metaTitle}/>
            <meta property="og:description" content={metaDescription}/>
            {metaRobots && <meta name='robots' content={metaRobots}/>}
            {canonical && <link rel='canonical' href={canonical}/>}            
        </Helmet>
    )
}

export default Head;