import ButtonPage from '../../../styles/Buttons/ButtonPage';
import OfferSectionWrapper from '../../../styles/Containers/OfferSectionWrapper';
import OfferSnapCard from '../../atoms/HomePage/OfferSnapCard';
import React from 'react';
import TitleSection from '../../../styles/Titles/TitleSection';
import Text from '../../../styles/Text/Text';
import {SiGoogle} from 'react-icons/si';
import {VscVm, VscDebugAll} from 'react-icons/vsc';

const Offer = () => {
    return(
        <OfferSectionWrapper>
            <div className='content'>
                <TitleSection isCenter isHeading>
                    Oferta
                </TitleSection>
                <Text isCenter>
                    Zapraszam do skorzystania z bogatej oferty, gdzie z pewnością znajdziesz coś dla siebie. Wśród proponowanych usług znajdziesz między innymi tworzenie stron internetowych napisanych w technologiach takich jak Gatsby.js, który od kilku lat śmiało wkracza na światową scenę, oraz WordPress, który swoją popularnością zjednał wielu użytkowników. Oferuję również pozycjonowanie serwisów w wyszukiwarce Google z użyciem topowych narzędzi, w tym kampanie mailingowe, a także Google Ads oraz bezpłatną podstawową analizę witryn internetowych pod kątem SEO.
                </Text>
            </div>
            <div className='cards'>
                <OfferSnapCard
                    icon={<VscVm/>}
                    title='Strony internetowe'
                    content='Strony interentowe oparte o nowoczesne technologie front-endowe i sprawdzone systemy zarządzania treścią.'
                />
                <OfferSnapCard
                    icon={<SiGoogle/>}
                    title='Pozycjonowanie Google'
                    content='Pozycjonowanie stron internetowych w wyszukiwarce Google, przy użyciu rekomendowanych przez specjalistów narzędzi.'
                />
                <OfferSnapCard
                    icon={<VscDebugAll/>}
                    title='Analiza stron'
                    content='Profesjonalna analiza serwisów, po której otrzymasz m.in. raport z proponowanymi słowami kluczowymi, co jest istotne w pracy nad rozwojem serwisu.'
                />
            </div>
            <ButtonPage>
                więcej
            </ButtonPage>
        </OfferSectionWrapper>
    )
}

export default Offer;