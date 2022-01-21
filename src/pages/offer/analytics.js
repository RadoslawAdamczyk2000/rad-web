import ButtonLink from '../../styles/Buttons/ButtonLink';
import Layout from '../../templates/Layout';
import React from 'react';
import Text from '../../styles/Text/Text';
import TitlePage from '../../styles/Titles/TitlePage';
import OfferMenu from '../../styles/Containers/OfferMenu';
import Form from '../../components/atoms/OfferPage/Form';

const OfferAnalyticsPage = () => {
    return(
        <Layout
            metaDescription='Po co wydawać pieniądze za coś co jest za darmo? Moja analityka stron oparta jest o topowe narzędzia, które dadzą kierunek pracom seo.'
            metaTitle='Bezpłatna analiza stron i serwisów internetowych, raporty seo, Śrem, Poznań - RadWEB'
        >
            <div
                style={{
                    margin:'5rem 0'
                }}
            >
                <TitlePage>
                    Oferta Analiz
                </TitlePage>
                <Text>
                    Masz już seris, ale nie wiesz jakie podjąć dalsze działania? W tym wyręczy Ciebie bezpłatna analiza, która wskaże na jakich frazach powinieneś się skupić oraz jak powinny wyglądać najbliższe prace. Wyniki takich badań dostaniesz ode mnie w formie raportu wysłanego na podany poniżej Twój adres e-mail. 
                </Text>
            </div>
            <OfferMenu>
                <ButtonLink path='/offer/www'>
                    www
                </ButtonLink>
                <ButtonLink path='/offer/seo'>
                    seo
                </ButtonLink>
                <ButtonLink path='/offer/'>
                    oferty
                </ButtonLink>
            </OfferMenu>
            <Form isAnalytics/>
        </Layout>
    )
}

export default OfferAnalyticsPage;