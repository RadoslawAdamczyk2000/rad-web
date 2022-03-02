import React from 'react';
import HeroProject from '../../components/bacteria/ArticlePage/HeroProject';
import Layout from '../../templates/Layout';
import Excerpt from '../../components/atom/ArticlePage/Excerpt';
import Heading from '../../components/atom/ArticlePage/Heading';
import LinkPage from '../../components/atom/ArticlePage/LinkPage';
import MainPoster from '../../components/atom/ArticlePage/MainPoster';
import Source from '../../components/atom/ArticlePage/Source';
import Sources from '../../components/bacteria/ArticlePage/Sources';
import Stack from '../../components/atom/ArticlePage/Stack';
import Text from '../../components/atom/ArticlePage/Text';
import Title from '../../components/atom/ArticlePage/Title';
import WrapperContent from '../../components/bacteria/ArticlePage/WrapperContent'
import ReturnButton from '../../components/atom/ArticlePage/ReturnButton';
import {tech} from '../../data/tech.js';
const Page = () => {
    return(
        <Layout
        metaTitle='Weather App, pogoda z każdego miejsca, Śrem, Poznań - RadWEB'
        metaDescription='Wybierasz się w podróż, lecz nie wiesz czy wziąć parasol, bądź okulary przeciwsłoneczne? W odpowiedzi na to pytanie pomoże aplikacja pogodowa.'
        >
    <HeroProject>
        <ReturnButton path='/projects'/>
        <Title title='Borówkowy Gaj - borówki spod Kórnika'></Title>
        <Stack stack={[
            tech.html,
            tech.css,
            tech.bootstrap,
            tech.javascript
        ]}/>
        <LinkPage path='https://borowkowy-gaj.pl/'/>
    </HeroProject>
    <MainPoster
        path='/static/2d1d1782551a6bbfd0832ef15ae0682f/borowkowy-gaj.png'
        title='Borówkowy Gaj - borówki amerykańskie spod Kórnika'
    ></MainPoster>
    <WrapperContent>
        <Excerpt>
            Strona, została napisana na początku mojej komercyjnej drogi web developerskiej. Moim pierwszym klientem byli Państwo Nowakowie z Konarskiego koło Kórnika. Państwo Nowakowie prowadzą rodzinne gospodarstwo sadownicze, gdzie w głównej mierze zajmują się plantacją borówek amerykańskich.
        </Excerpt>
        <Text>
            Dlaczego zdecydowałem napisać tą stronę? Bo wiem co promuję. Miałem przyjemność spróbowania efektów pracy konarskich plantatorów w postaci powideł borówkowych, których smak czuję po dziś dzień. Również miałem zaszczyt zawiązać znajomość z jednym z plantatorów, z Michałem, który bogato opowiedział o tym jak powinna wyglądać wzorcowe hodowanie owoców zza oceanu. Te powyższe powody, dają gwarancję tego, że promuję firmę, która robi swoją robotę dobrze i z pasją, co jest najistotniejsze w każdej branży oraz pracy. Serwis zdecydowałem stworzyć w klimatach borówkowych, poprzez zamieszczenie zdjęć wyjętych wprost z pól i plantacji, a także zastosowaniem kolorów takich jak fiolet i biel. Co do wyboru technologii, podjąłem decyję zaimplementowania w portalu HTML, CSS z frameworkiem Bootstrap oraz JavaScript'u.
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;