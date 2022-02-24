import ButtonLink from '../../styles/Buttons/ButtonLink';
import Layout from '../../templates/Layout';
import React from 'react';
import OfferMenu from '../../styles/Containers/OfferMenu';
import TitlePage from '../../components/atom/OfferPage/TitlePage';
import Text from '../../components/atom/OfferPage/Text';
import Offers from '../../components/bacteria/OfferPage/Offers';
import Dictonary from '../../components/bacteria/OfferPage/Dictonary';
import LinkButton from '../../components/atom/OfferPage/LinkButton';

const OfferPage = () => {
    return(
        <Layout
            metaTitle=''
            metaDescription=''
        >
            <div>
                <TitlePage 
                    title='Oferta tworzenia, seo i analityka stron'
                />
                <Text>
                    Zapraszam do skorzystania z bogatej oferty, gdzie z pewnością znajdziesz coś dla siebie. Wśród proponowanych usług znajdziesz między innymi tworzenie stron internetowych napisanych w technologiach takich jak Gatsby.js, który od kilku lat śmiało wkracza na światową scenę, oraz WordPress, który swoją popularnością zjednał wielu użytkowników. Oferuję również pozycjonowanie serwisów w wyszukiwarce Google z użyciem topowych narzędzi, w tym kampanie mailingowe, a także Google Ads oraz bezpłatną podstawową analizę witryn internetowych pod kątem SEO.
                </Text>
            </div>
            <ul>
                <LinkButton
                    path='#'
                    title='www'
                />
                <LinkButton
                    path='#'
                    title='seo'
                />
                <LinkButton
                    path='#'
                    title='analityka'
                />
            </ul>
            <Offers/>
            <Dictonary/>
        </Layout>
    )
}

export default OfferPage;