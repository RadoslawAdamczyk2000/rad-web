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
import { Link } from 'gatsby';
const Page = () => {
    return(
        <Layout
        metaTitle='Firma budowlana, strony internetowe Śrem, Poznań - RadWEB'
        metaDescription='Strony internetowe to moja pasja. Jeśli chcesz zobaczyć mój progress w tej branży, to zapraszam do lektury!'
        >
    <HeroProject>
        <ReturnButton path='/projects'/>
        <Title title='Firma budowlana - po kroku do celu'></Title>
        <Stack stack={[
            tech.html,
            tech.css,
        ]}/>
        <LinkPage path='https://firma-budowlana.vercel.app/'/>
    </HeroProject>
    <MainPoster
        path='https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/projekty/zdjecia/firma-budowlana.png?raw=true'
        title='Firma budowlana - po kroku do celu'
    ></MainPoster>
    <WrapperContent>
        <Excerpt>
            Najlepszym dla mnie sposobem nauki programowania jest inspiracja. Po przemierzeniu otchłani internetu doszedłem do wniosku, że większość firm, które mają prezentować firmę wybierają schludne i proste strony. 
        </Excerpt>
        <Text>
            Tą stronę realizowałem na początku listopada 2020 roku, kiedy szlifowałem swoje umiejętności z zakresu HTML-a ( <Link to='/blog/czym-jest-html'>o tej technologii napisałem już artykuł</Link> ) i CSS-a. Chciałem napisać przykładowy serwis dla fimry budowlanej, gdzie dana działalność gospodarcza mogłaby zaprezentować swoją ofertę, realizacje oraz przede wszyskim kim jest. Strona posiada kilka podstron, gdzie największym wyzwaniem była strona o nazwie <b>Realizacje</b>, gdzie był tam podział na dwie grupy. Z dzisiejszej perspektywy czasu na 100% zastosowałbym JavaScript. Wtedy to zastosowałem CSS. 
            <b>Tak z CSS-em można pisać też elementy logiczne strony.</b> Przełączanie między kartami zrealizowałem przy pomocy checkbox-ów. 
        </Text>
        <Text>
            Z perspektywy prawie dwóch lat mogę powiedzieć, że jestem w stanie zaakceptować taką stronę w swoim portfolio. Dlaczego? To jest element, gdzie jest prezentowany mój rozwój w budowaniu stron internetowych. Co bym z perspektywy czasu zmienił? Na pewno zaimplemenotwałbym tutaj PHP, ponieważ jest sporo elementów dynamicznych jak i elementy stałe (np. nawigacja i stopka). Do wyżej wspomnianych realizacji użyłbym JavaScriptu. I to chyba na tyle. Zachęcam do zapoznania się z innymi projektami, które pokażą Tobie jaki jest mój kierunek rozwoju.
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;