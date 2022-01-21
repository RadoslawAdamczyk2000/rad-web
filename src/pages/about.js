import React from 'react';
import Baner from '../components/atoms/AboutPage/Baner';
import Timeline from '../components/molecule/AboutPage/Timeline';
import Layout from '../templates/Layout';
import Technologies from '../components/molecule/AboutPage/Technologies';
import Hobbies from '../components/molecule/AboutPage/Hobbies';

const AboutPage = () => {
    return(
        <Layout>
            <Baner/>
            <Timeline/>
            <Technologies/>
            <Hobbies/>
        </Layout>
    )
}

export default AboutPage;