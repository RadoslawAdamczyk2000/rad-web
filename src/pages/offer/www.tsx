import Form from '../../components/bacteria/OfferPage/Form';
import Layout from '../../templates/Layout';
import React from 'react';
import Text from '../../components/atom/OfferPage/Text';
import TitlePage from '../../components/atom/OfferPage/TitlePage';
import LinkButton from '../../components/atom/OfferPage/LinkButton';
import LinkButtonsWrapper from '../../components/bacteria/OfferPage/styles/LinkButtonsWrapper';
import { cities } from '../../data/cities';

const OfferWwwPage = () => {
    return(
        <Layout
            metaTitle='Tworzenie tanich stron internetowych i projektowanie serwisów, Śrem, Poznań - RadWEB'
            metaDescription='Posiadanie własnej strony internetowej to warunek sukcesu. Strona powinna być intuicyjna oraz niebanalna - właśnie takie witryny oferuję. Zapraszam !'
        >
            <div>
                <TitlePage
                    title='Oferta stron WWW.'
                />
                    
                <Text>
                    Jak cię widzą tak cię piszą. Strona internetowa jest Twoją wizytówką w sieci, dlatego należy zadbać o jej właściwą prezencję i funkcjonalności. Jak wygląda proces tworzenia strony? W pierwszej kolejności uzupełnij poniższy formluarz, w którym opiszesz jakie masz plany na swój serwis. W dalszym etapie skontaktuję się z Tobą telefonicznie, oraz w wiadomości mailowej otrzymasz projekt wizualny. Po zrealizowaniu powyższych etapów po akceptacji, piszę stronę. Po napisaniu serwisu otrzmyasz tymczasowy link do strony, w którym sprawdzisz jak się prezentuje strona. Po całkowitym zaakceptowaniu prac, przelewasz wcześniej ustaloną kwotę i wtedy kod źródłowy wrzucam na Twój serwer i Twoją domenę. Jeśli posiadasz jeszcze jakieś pytania to zapraszam do kontaktu.
                </Text>
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
                        Strony przeze mnie napisane są całkowicie spersonalizowane pod klienta z zachowaniem najlepszych technik i wymagań dla wyszukiwarki Google. Piszę strony internetowe oparte o HTML, CSS, preprocesor Sass oraz Scss, JavaScript ES5+, ReactJS, GatsbyJS, NextJS, VueJS, Angular, TypeScript, PHP, MySQL, PostgreSQL, a także MongoDB. To co oferuję w tym zakresie to:
                    </p>
                    <br/>
                    <ol>
                        {
                            cities.map( i => <li>strony internetowe <b>{i}</b></li>)
                        }
                        {
                            cities.map( i => <li>strony www <b>{i}</b></li>)
                        }
                        {
                            cities.map( i => <li>tworzenie stron internetowych <b>{i}</b></li>)
                        }
                        {
                            cities.map( i => <li>pisanie stron www <b>{i}</b></li>)
                        }
                    </ol>
                </Text>
            </div>
        </Layout>
    )
}

export default OfferWwwPage;