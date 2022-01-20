import ButtonLink from '../../styles/Buttons/ButtonLink';
import Layout from '../../templates/Layout';
import React from 'react';
import Text from '../../styles/Text/Text';
import TitlePage from '../../styles/Titles/TitlePage';
import Offer from '../../components/molecule/OfferPage/Offer';
import Glossary from '../../components/molecule/OfferPage/Glossary';
import OfferMenu from '../../styles/Containers/OfferMenu';

const OfferPage = () => {
    return(
        <Layout>
            <div
                style={{
                    margin:'5rem 0'
                }}
            >
                <TitlePage>
                    Oferta
                </TitlePage>
                <Text>
                    Zapraszam do skorzystania z bogatej oferty, gdzie z pewnością znajdziesz coś dla siebie. Wśród proponowanych usług znajdziesz między innymi tworzenie stron internetowych napisanych w technologiach takich jak Gatsby.js, który od kilku lat śmiało wkracza na światową scenę, oraz WordPress, który swoją popularnością zjednał wielu użytkowników. Oferuję również pozycjonowanie serwisów w wyszukiwarce Google z użyciem topowych narzędzi, w tym kampanie mailingowe, a także Google Ads oraz bezpłatną podstawową analizę witryn internetowych pod kątem SEO.
                </Text>
            </div>
            <OfferMenu>
                <ButtonLink path='/offer/www'>
                    www
                </ButtonLink>
                <ButtonLink path='/offer/seo'>
                    seo
                </ButtonLink>
                <ButtonLink path='/offer/analytics'>
                    analityka
                </ButtonLink>
            </OfferMenu>
            <Offer/>
            <Glossary/>
        </Layout>
    )
}

export default OfferPage;