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
        metaTitle='Filip Bukowiecki, React, Śrem, Poznań - RadWEB'
        metaDescription='Strona internetowa napisana dla dobrze prosperującej osoby w świecie kinematografii - Filipa Bukowieckiego.'
        >
    <HeroProject>
        <ReturnButton path='/projects'/>
        <Title title='Filip Bukowiecki - v.1.0'></Title>
        <Stack stack={[
            tech.react,
            tech.html,
            tech.styledcomponents,
            tech.javascript
        ]}/>
        <LinkPage path='https://filipbukowiecki.vercel.app/'/>
    </HeroProject>
    <MainPoster
        path='https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/projekty/zdjecia/filip-bukowiecki-01.png?raw=true'
        title='Filip Bukowiecki - v.1.0'
    ></MainPoster>
    <WrapperContent>
        <Excerpt>
            Znajomość klienta to podstawa. Znajomość z Filipem Bukowieckim pozwoliła mi na zaprojektowanie strony, która była zgodna z branżą i upodobaniami estetycznymi. Do sprostania tym wymaganiom użycie topowych technolgii było podstawą.
        </Excerpt>
        <Text>
            Filip działa w gałęzi gospodarki związanej z wideo. To bardzo ważne przy wymyślenie niebanalnego wyglądu, który będzie się różnić od konkurencji. To zdeterminowało mnie do użycia iście filmowych kolorów, które nawiązują do genezy filmów - czerni oraz bieli. Jednak to nie oznacza, że strona nie jest monotonna z kliku powodów. Zastosowanie hooków React dostępnych od 16. wersji, a w szczególności useState co udostępniło opcję dynamicznej zmiany kolorów przy co raz to głębszym poznawaniu serwisu. Dla urozmaicenia serwisu wykorzystałem właściwość css dotyczących tła - background-atattchemnt ustawiony na fixed, co daje szersze doznania. Na życzenie klienta również zaimplementowałem film w górnej części strony, który stanowi jedynie przystawkę, a dalej zamieściłem nagrania video z YouTube z zamieszczeniem tagu iframe.
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;