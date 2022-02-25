import Layout from '../../templates/Layout';
import React from 'react';
import LinkButton from '../../components/atom/OfferPage/LinkButton';
import Text from '../../components/atom/OfferPage/Text';
import TitlePage from '../../components/atom/OfferPage/TitlePage';
import Form from '../../components/bacteria/OfferPage/Form';
import LinkButtonsWrapper from '../../components/bacteria/OfferPage/styles/LinkButtonsWrapper';
import { cities } from '../../data/cities';

const OfferSeoPage = () => {
    return(
        <Layout
            metaTitle='Oferta pozycjonowania, SEO Google, optymalizacja, treści SEM, Śrem, Poznań - RadWEB'
            metaDescription='Szukasz fachowca, który wyniesie Twój serwis w wyżyny wyszukiwarki? Korzystając z moich usług masz pewność, że dołożę wszelkie starania o dobrą pozycję Twojego serwisu.'
        >
            <div
                style={{
                    margin:'5rem 0'
                }}
            >
                <TitlePage
                    title='Oferta pozycjnonowania stron w Google'
                />
                <Text>
                    Masz już swój wizerunek w sieci, jednakże to nie satysfakcjonuje Ciebie widoczność w internecie? Remedium na to jest prowadzenie działań pozycjonerskich. Jakie ja oferuję działania w tej strefie? W pakietach SEO polega to na napisaniu oraz w wdrożeniu tzw. <b>"sekcji head"</b>, czyli segmentu ważnego dla wyszukiwarek oraz odpowiednie poprowadzenie tytułów w serwisie. W dalszych etapach oferuję zainstalowanie narzędzi Google - GoogleSearchConsole, GoogleTagManager oraz GoogleAnalytics, które wspomogą dalsze prace SEO oraz dostosowanie całokształtu serwisu pod najpopularniejszą wyszukiwarkę w Polsce i na świecie. Powyższe prace nie działają <i>ad hoc</i>, i na zaakceptowanie przez Google zmian należy poczekać nie raz z kilka tygodni. Ponadto, jeśli to konieczne napiszę odpowiednie przekierowania, w celu zabezpieczenia użytkownika przed niechcianymi treściami. Ostatni pakiet, czyli SEM to nic innego jak tworzenie treści pod wyszukiwarkę wraz z zaimplementowaniem odpowiednich słów kluczowych - serce prac pozycjonerskich.
                </Text>
            </div>
            <LinkButtonsWrapper>
                <LinkButton
                    path='/offer/www'
                    title='www'
                />
                <LinkButton
                    path='/offer'
                    title='oferty'
                />
                <LinkButton
                    path='/offer/analytics'
                    title='analityka'
                />
            </LinkButtonsWrapper>
            <Form/>
            <div>
                <Text>
                   
                    <ol>
                        {
                            cities.map( i => <li>pozycjonowanie stron internetowych <b>{i}</b></li>)
                        }
                        {
                            cities.map( i => <li>SEO stron internetowych <b>{i}</b></li>)
                        }
                        {
                            cities.map( i => <li>seo <b>{i}</b></li>)
                        }
                    </ol>
                </Text>
            </div>
        </Layout>
    )
}

export default OfferSeoPage;