import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Baner from '../components/atoms/AboutPage/Baner';
import Text from '../styles/Text/Text';
import TitlePage from '../styles/Titles/TitlePage';
import TitleSection from '../styles/Titles/TitleSection';
import Layout from '../templates/Layout';

const AboutPage = () => {
    return(
        <Layout>
            <Baner/>
            <div>
                <TitleSection isHeading isCenter>
                    Technologie
                </TitleSection>
            </div>
            <div>
                <TitleSection isHeading isCenter>
                    Zainteresowania
                </TitleSection>
            </div>
        </Layout>
    )
}

export default AboutPage;