import Layout from '../../templates/Layout';
import React from 'react';
import TitlePage from '../../components/atom/OfferPage/TitlePage';
import Text from '../../components/atom/OfferPage/Text';
import Offers from '../../components/bacteria/OfferPage/Offers';
import Dictonary from '../../components/bacteria/OfferPage/Dictonary';
import LinkButton from '../../components/atom/OfferPage/LinkButton';
import LinkButtonsWrapper from '../../components/bacteria/OfferPage/styles/LinkButtonsWrapper';
import HeadWrapper from '../../styles/Containers/HeadWrapper';

const OfferPage = () => {
    return(
        <Layout
            metaTitle=''
            metaDescription=''
        >
            <div>
                <HeadWrapper>
                <TitlePage 
                    title='Oferta tworzenia, seo i analityka stron'
                />
                <Text>
                    Zapraszam do skorzystania z bogatej oferty, gdzie z pewnością znajdziesz coś dla siebie. Wśród proponowanych usług znajdziesz między innymi tworzenie stron internetowych napisanych w technologiach takich jak Gatsby.js, który od kilku lat śmiało wkracza na światową scenę, oraz WordPress, który swoją popularnością zjednał wielu użytkowników. Oferuję również pozycjonowanie serwisów w wyszukiwarce Google z użyciem topowych narzędzi, w tym kampanie mailingowe, a także Google Ads oraz bezpłatną podstawową analizę witryn internetowych pod kątem SEO.
                </Text>
                </HeadWrapper>
            </div>
            <LinkButtonsWrapper>
                <LinkButton
                    path='/offer/www'
                    title='www'
                />
                <LinkButton
                    path='/offer/seo'
                    title='seo'
                />
                <LinkButton
                    path='/offer/analytics'
                    title='analityka'
                />
            </LinkButtonsWrapper>
            <Offers/>
            <Dictonary/>
        </Layout>
    )
}

export default OfferPage;