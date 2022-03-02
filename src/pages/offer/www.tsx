import Form from '../../components/bacteria/OfferPage/Form';
import Layout from '../../templates/Layout';
import React from 'react';
import Text from '../../components/atom/OfferPage/Text';
import TitlePage from '../../components/atom/OfferPage/TitlePage';
import LinkButton from '../../components/atom/OfferPage/LinkButton';
import LinkButtonsWrapper from '../../components/bacteria/OfferPage/styles/LinkButtonsWrapper';
import { cities } from '../../data/cities';
import HeadWrapper from '../../styles/Containers/HeadWrapper';

const OfferWwwPage = () => {
    return(
        <Layout
            metaTitle='Tworzenie tanich stron internetowych i projektowanie serwisów, Śrem, Poznań - RadWEB'
            metaDescription='Posiadanie własnej strony internetowej to warunek sukcesu. Strona powinna być intuicyjna oraz niebanalna - właśnie takie witryny oferuję. Zapraszam !'
        >
            <div>
                <HeadWrapper>
                <TitlePage
                    title='Oferta stron WWW.'
                />
                    
                <Text>
                    Jak cię widzą tak cię piszą. Strona internetowa jest Twoją wizytówką w sieci, dlatego należy zadbać o jej właściwą prezencję i funkcjonalności. Jak wygląda proces tworzenia strony? W pierwszej kolejności uzupełnij poniższy formluarz, w którym opiszesz jakie masz plany na swój serwis. W dalszym etapie skontaktuję się z Tobą telefonicznie, oraz w wiadomości mailowej otrzymasz projekt wizualny. Po zrealizowaniu powyższych etapów po akceptacji, piszę stronę. Po napisaniu serwisu otrzmyasz tymczasowy link do strony, w którym sprawdzisz jak się prezentuje strona. Po całkowitym zaakceptowaniu prac, przelewasz wcześniej ustaloną kwotę i wtedy kod źródłowy wrzucam na Twój serwer i Twoją domenę. Jeśli posiadasz jeszcze jakieś pytania to zapraszam do kontaktu.
                </Text>
                </HeadWrapper>
            </div>
            <LinkButtonsWrapper>
                <LinkButton
                    path='/offer'
                    title='oferty'
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
            <Form/>
            <div>  
                <Text>
                    <p>
                        Strony przeze mnie napisane są całkowicie spersonalizowane pod klienta z zachowaniem najlepszych technik i wymagań dla wyszukiwarki Google. Piszę strony internetowe oparte o HTML, CSS, preprocesor Sass oraz Scss, JavaScript ES5+, ReactJS, GatsbyJS, NextJS, VueJS, Angular, TypeScript, PHP, MySQL, PostgreSQL, a także MongoDB. Strony internetowe realizuję w następujących krokach:
                    </p>
                    <br/>
                    <br/>
                    <ol>
                        <li><b>1.:</b> Kontakt z klientem, poznanie celów klienta.</li>
                        <li><b>2.:</b> Zebranie pomysłów na wygląd strony, wraz z prezentacją pomysłów.</li>
                        <li><b>3.:</b> Dobór technologii.</li>
                        <li><b>4.:</b> Udostępnienie linku do wersji deweloperskiej strony, umożliwiając bieżące śledzenie rozwoju budowy serwisu.</li>
                        <li><b>5.:</b> Skonfigurowanie systemu zarządzania treścią.</li>
                        <li><b>6.:</b> Zakończenie procesu realizacji strony.</li>
                        <li><b>7.:</b> Zebranie opinii nt. wykonanych prac na stronie od klienta.</li>
                        <li><b>8.:</b> Po zakończeniu prac instaluję GoogleSearchConsole oraz przeprowadzam serwis przez proces zaindeksowania strony przez Google.</li>
                    </ol>
                    <br/>
                    <br/>
                    <p>
                        Realizuję róznego rodzaju strony internetowe. Różnego rodzaju, czyli jakie? Strony typu portfolio, gdzie znajduje się krótka prezentacja strony bazująca na około 3 podstronach. Innym jest blog, czyli strona gdzie trzonem jest zamieszczanie postów na stronie - blogi są trzonem jeśli chcesz mieć dobrze wypozycjonowaną stroną. Ostatnim wariantem są strony e-commerce, czyli strony internetowe. One są zazwyczaj oparte na WooComerce, PrestaShop, Shoper oraz Shopify. Moje usługi z zakresu tworzenia stron internetowych, zwanymi równie powszechnie stronami www tworzę na terenie miast takich jak:
                    </p>
                    <br/>
                    <br/>
                    <ul>
                        {cities.map(i => <li><b>{i}</b></li>)}
                    </ul>
                </Text>
            </div>
        </Layout>
    )
}

export default OfferWwwPage;