import Layout from '../../templates/Layout';
import React from 'react';
import TitlePage from '../../components/atom/OfferPage/TitlePage';
import Text from '../../components/atom/OfferPage/Text';
import LinkButton from '../../components/atom/OfferPage/LinkButton';
import Form from '../../components/bacteria/OfferPage/Form';
const OfferAnalyticsPage = () => {
    return(
        <Layout
            metaDescription='Po co wydawać pieniądze za coś co jest za darmo? Moja analityka stron oparta jest o topowe narzędzia, które dadzą kierunek pracom seo.'
            metaTitle='Bezpłatna analiza stron i serwisów internetowych, raporty seo, Śrem, Poznań - RadWEB'
        >
            <div>
                <TitlePage title='Oferta analizy stron internetowych'/>
                <Text>
                    Masz już seris, ale nie wiesz jakie podjąć dalsze działania? W tym wyręczy Ciebie bezpłatna analiza, która wskaże na jakich frazach powinieneś się skupić oraz jak powinny wyglądać najbliższe prace. Wyniki takich badań dostaniesz ode mnie w formie raportu wysłanego na podany poniżej Twój adres e-mail. 
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
            <Form/>
            <div>
                <Text>
                    Masz już seris, ale nie wiesz jakie podjąć dalsze działania? W tym wyręczy Ciebie bezpłatna analiza, która wskaże na jakich frazach powinieneś się skupić oraz jak powinny wyglądać najbliższe prace. Wyniki takich badań dostaniesz ode mnie w formie raportu wysłanego na podany poniżej Twój adres e-mail. 
                </Text>
            </div>
        </Layout>
    )
}

export default OfferAnalyticsPage;