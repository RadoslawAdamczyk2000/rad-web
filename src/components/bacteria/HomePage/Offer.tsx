import React from 'react';
import Button from '../../atom/HomePage/Button';
import OfferCard from '../../atom/HomePage/OfferCard';
import Text from '../../atom/HomePage/Text';
import TitleSection from '../../atom/HomePage/TitleSection';
import {SiGoogle} from 'react-icons/si';
import {VscVm, VscDebugAll} from 'react-icons/vsc';
import OfferWrapper from './styles/OfferWrapper';
const Offer = () => {
    return(
        <OfferWrapper>
            <div>
                <TitleSection 
                    title='Oferta'
                />
                <Text>
                    Zapraszam do skorzystania z bogatej oferty, gdzie z pewnością znajdziesz coś dla siebie. Wśród proponowanych usług znajdziesz między innymi tworzenie stron internetowych napisanych w technologiach takich jak Gatsby.js, który od kilku lat śmiało wkracza na światową scenę, oraz WordPress, który swoją popularnością zjednał wielu użytkowników. Oferuję również pozycjonowanie serwisów w wyszukiwarce Google z użyciem topowych narzędzi, w tym kampanie mailingowe, a także Google Ads oraz bezpłatną podstawową analizę witryn internetowych pod kątem SEO.
                </Text>
                <Button
                    path='/offer'
                    title='zobacz więcej'
                />
            </div>
            <div className='cards'>
                <OfferCard
                    icon={<VscVm/>}
                    path='/offer/www'
                    text='Strony interentowe oparte o nowoczesne technologie front-endowe i sprawdzone systemy zarządzania treścią.'
                    title='Strony internetowe'
                />
                <OfferCard
                    icon={<SiGoogle/>}
                    path='/offer/seo'
                    text='Pozycjonowanie stron internetowych w wyszukiwarce Google, przy użyciu rekomendowanych przez specjalistów narzędzi.'
                    title='Pozycjonowanie Google'
                />
                <OfferCard
                    icon={<VscDebugAll/>}
                    path='/offer/analytics'
                    text='Profesjonalna analiza serwisów, po której otrzymasz m.in. raport z proponowanymi słowami kluczowymi, co jest istotne w pracy nad rozwojem serwisu.'
                    title='Analiza stron'
                />
            </div>
        </OfferWrapper>
    )
}
export default Offer;