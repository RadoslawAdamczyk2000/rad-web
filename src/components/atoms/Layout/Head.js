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
            <link rel="icon" href="https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/272283819_103383992253548_4323845245526580592_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=R8zgmNYicMsAX9x9jjF&_nc_ht=scontent-frx5-1.xx&oh=00_AT-yWJoi54f5vxzQZLBpBV-KG7hxuFV1bQyTcQvVaXzT-A&oe=61F1C133"/>
        </Helmet>
    )
}

export default Head;