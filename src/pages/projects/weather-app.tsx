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
        <Title title='WeatherApp - pogoda z każdego miejsca'></Title>
        <Stack stack={[
            tech.react,
            tech.html,
            tech.scss,
            tech.javascript
        ]}/>
        <LinkPage path='https://weather-app-snowy-omega.vercel.app/'/>
    </HeroProject>
    <MainPoster
        path='https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/projekty/zdjecia/weather-app.png?raw=true'
        title='WeatherApp - aktualna pogoda z każdego miejsca'
    ></MainPoster>
    <WrapperContent>
        <Excerpt>
            Klasyczna aplikacja webowa, w której możesz sprawdzić pogodę w dowolnym miejscu na ziemii przy jednoczesnym sprawdzeniu lokalizacji w mapie Google.
        </Excerpt>
        <Text>
            Aplikacja WeatherApp została napisana pod wpływem inspiracji z jednego z filmów Samuraja Programowania, gdzie to Bartek pokazał jak komunikować się z API. Praca z API to fundament pracy teraźniejszego front-end developera. Do zbudowania tej aplikacji wykorzystałem Reacta, scss-modules oraz kilku baz danych, do ostylowania GoogleMaps oraz do odczytywania danych pogodowych. Odczytasz tutaj między innymi identyfikacje lokalizacji, strefę czasową, wschód oraz zachód słońca. Ponadto jest tutaj jeszcze minimalna, maksymalna, a także odczuwalna temperatura, ciśnienie, prędkość oraz kierunek wiatru, zachmurzenie oraz widoczność.
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;