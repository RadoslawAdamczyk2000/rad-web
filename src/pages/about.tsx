import React from 'react';
import Layout from '../templates/Layout';
import Technologies from '../components/molecule/AboutPage/Technologies';
import Hobbies from '../components/bacteria/AboutPage/Hobbies';
import Charts from '../components/bacteria/AboutPage/Charts';
import Baner from '../components/bacteria/AboutPage/Baner';
import Timeline from '../components/bacteria/AboutPage/Timeline';

const AboutPage = () => {
    return(
        <Layout>
            <Baner/>
            <Timeline/>
            <Technologies/>
            <Charts/>
            <Hobbies/>
        </Layout>
    )
}

export default AboutPage;