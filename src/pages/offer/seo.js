import ButtonLink from '../../styles/Buttons/ButtonLink';
import Layout from '../../templates/Layout';
import React from 'react';
import Text from '../../styles/Text/Text';
import TitlePage from '../../styles/Titles/TitlePage';
import OfferMenu from '../../styles/Containers/OfferMenu';
import Form from '../../components/atoms/OfferPage/Form';

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
                <TitlePage>
                    Oferta SEO
                </TitlePage>
                <Text>
                    Masz już swój wizerunek w sieci, jednakże to nie satysfakcjonuje Ciebie widoczność w internecie? Remedium na to jest prowadzenie działań pozycjonerskich. Jakie ja oferuję działania w tej strefie? W pakietach SEO polega to na napisaniu oraz w wdrożeniu tzw. <b>"sekcji head"</b>, czyli segmentu ważnego dla wyszukiwarek oraz odpowiednie poprowadzenie tytułów w serwisie. W dalszych etapach oferuję zainstalowanie narzędzi Google - GoogleSearchConsole, GoogleTagManager oraz GoogleAnalytics, które wspomogą dalsze prace SEO oraz dostosowanie całokształtu serwisu pod najpopularniejszą wyszukiwarkę w Polsce i na świecie. Powyższe prace nie działają <i>ad hoc</i>, i na zaakceptowanie przez Google zmian należy poczekać nie raz z kilka tygodni. Ponadto, jeśli to konieczne napiszę odpowiednie przekierowania, w celu zabezpieczenia użytkownika przed niechcianymi treściami. Ostatni pakiet, czyli SEM to nic innego jak tworzenie treści pod wyszukiwarkę wraz z zaimplementowaniem odpowiednich słów kluczowych - serce prac pozycjonerskich.
                </Text>
            </div>
            <OfferMenu>
                <ButtonLink path='/offer/www'>
                    www
                </ButtonLink>
                <ButtonLink path='/offer/'>
                    oferty
                </ButtonLink>
                <ButtonLink path='/offer/analytics'>
                    analityka
                </ButtonLink>
            </OfferMenu>
            <Form isSeo/>
        </Layout>
    )
}

export default OfferSeoPage;