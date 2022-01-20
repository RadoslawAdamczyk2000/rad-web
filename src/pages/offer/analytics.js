import ButtonLink from '../../styles/Buttons/ButtonLink';
import Layout from '../../templates/Layout';
import React from 'react';
import Text from '../../styles/Text/Text';
import TitlePage from '../../styles/Titles/TitlePage';
import OfferMenu from '../../styles/Containers/OfferMenu';
import Form from '../../components/atoms/OfferPage/Form';

const OfferAnalyticsPage = () => {
    return(
        <Layout>
            <div
                style={{
                    margin:'5rem 0'
                }}
            >
                <TitlePage>
                    Oferta WWW
                </TitlePage>
                <Text>
                    Jak cię widzą tak cię piszą. Strona internetowa jest Twoją wizytówką w sieci, dlatego należy zadbać o jej właściwą prezencję i funkcjonalności. Jak wygląda proces tworzenia strony? W pierwszej kolejności uzupełnij poniższy formluarz, w którym opiszesz jakie masz plany na swój serwis. W dalszym etapie skontaktuję się z Tobą telefonicznie, oraz w wiadomości mailowej otrzymasz projekt wizualny. Po zrealizowaniu powyższych etapów po akceptacji, piszę stronę. Po napisaniu serwisu otrzmyasz tymczasowy link do strony, w którym sprawdzisz jak się prezentuje strona. Po całkowitym zaakceptowaniu prac, przelewasz wcześniej ustaloną kwotę i wtedy kod źródłowy wrzucam na Twój serwer i Twoją domenę. Jeśli posiadasz jeszcze jakieś pytania to zapraszam do kontaktu.
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