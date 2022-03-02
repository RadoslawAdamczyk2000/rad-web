import Layout from '../../templates/Layout';
import React from 'react';
import LinkButton from '../../components/atom/OfferPage/LinkButton';
import Text from '../../components/atom/OfferPage/Text';
import TitlePage from '../../components/atom/OfferPage/TitlePage';
import Form from '../../components/bacteria/OfferPage/Form';
import LinkButtonsWrapper from '../../components/bacteria/OfferPage/styles/LinkButtonsWrapper';
import { cities } from '../../data/cities';
import HeadWrapper from '../../styles/Containers/HeadWrapper';

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
               <HeadWrapper>
                <TitlePage
                    title='Oferta SEO stron w Google.'
                />
                <Text>
                    Masz już swój wizerunek w sieci, jednakże to nie satysfakcjonuje Ciebie widoczność w internecie? Remedium na to jest prowadzenie działań pozycjonerskich. Jakie ja oferuję działania w tej strefie? W pakietach SEO polega to na napisaniu oraz w wdrożeniu tzw. <b>"sekcji head"</b>, czyli segmentu ważnego dla wyszukiwarek oraz odpowiednie poprowadzenie tytułów w serwisie. W dalszych etapach oferuję zainstalowanie narzędzi Google - GoogleSearchConsole, GoogleTagManager oraz GoogleAnalytics, które wspomogą dalsze prace SEO oraz dostosowanie całokształtu serwisu pod najpopularniejszą wyszukiwarkę w Polsce i na świecie. Powyższe prace nie działają <i>ad hoc</i>, i na zaakceptowanie przez Google zmian należy poczekać nie raz z kilka tygodni. Ponadto, jeśli to konieczne napiszę odpowiednie przekierowania, w celu zabezpieczenia użytkownika przed niechcianymi treściami. Ostatni pakiet, czyli SEM to nic innego jak tworzenie treści pod wyszukiwarkę wraz z zaimplementowaniem odpowiednich słów kluczowych - serce prac pozycjonerskich.
                </Text>
                </HeadWrapper>
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
            <Form redirect='https://rad-web.vercel.app/offer/seo'/>
            <div>
                <Text>
                    <p>Każda z topowych wyszukiwarek internetowych ma wiele swoich robotów crawlujących, czyli takich robótów, które we dnie i w nocy przemierzają nieustannie przez niezmieorzone wody internetu, w celu odkrywania nowych stron internetowych przy jednoczesnym docenianiu stron reprezentujących wysoki poziom eksperckości w branży.</p>                    
                    <br/>
                    <br/>
                    <p>W Polsce z internetu korzysta ponad <b>90%</b> ludzi, a z samej wyszukiwarki Google korzysta niemal <b>97%</b> społeczności internetu. Te proste statystyki dają do zrozumienia, że najlpiej jest się wywinodwać jak najwyżej w rankingu stron internetowych Google. Sam mając doświadczenie pracy pozycjonera wiem jakie działania są najważniejsze, aby wbić się w TOP10 stron internetowych na najistotniejsze dla klineta frazy. Jak realizuję kampanię SEO?.</p>
                    <br/>
                    <br/>
                    <ol>
                        <li><b>1.:</b> Rozmowa z klientem o celach jakie chce osiągnąć w kampanii SEO.</li>
                        <li><b>2.:</b> Przeanalizowanie strony intenretowej w celu wyłuskania jak największej ilości słów kluczowych, dzięki którym to będzie bardzo ułatwiona droga rozwoju strony.</li>
                        <li><b>3.:</b> Napisanie profesjonalnej sekcji head strony wraz z optymalnie dostosowanym nagłówkiem tytułowym strony.</li>
                        <li><b>4.:</b> Przeanalizowanie pozostałego kodu źródłowego strony </li>
                        <li><b>5.:</b> Zainstalowanie GoogleSearchConsole w serwisie.</li>
                        <li><b>6.:</b> Skorzystanie z topowych narzędzi wspomagających prace SEO</li>
                        <li><b>7.:</b> Wdrożenie zmian na stronie za zgodą klienta.</li>
                    </ol>
                    <br/>
                    <br/>
                    <p>
                        Swoje kampanie SEO realizuję na terenie wielu miast:
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

export default OfferSeoPage;