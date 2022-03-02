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
        metaTitle='Aplikacja o filmach - recenzje i oceny filmów, Śrem - RadWEB'
        metaDescription='Szukasz opini, oceny bądź też plakatu związanego z Twoim ulubionym filmem? Dobrze trafiłeś!'
        >
    <HeroProject>
        <ReturnButton path='/projects'/>
        <Title title='Movie App - wszystkie filmy w jednym miejscu'></Title>
        <Stack stack={[
            tech.react,
            tech.html,
            tech.styledcomponents,
            tech.javascript, 
        ]}/>
        <LinkPage path='https://movie-app-xi-blush.vercel.app/'/>
    </HeroProject>
    <MainPoster
        path='/static/5ed68415a52d5ea3fc13b8987a95368e/movie-app.png'
        title='Movie App - wszystkie filmy w jednym miejscu'
    ></MainPoster>
    <WrapperContent>
        <Excerpt>
            Do napisania tej aplikacji zainspirował mnie sam Netflix. Tym czego mi brakowało w tym serwisie to brak intuicyjności. Gdy krytykowałem tego amerykańskiego giganta wielu mi mówiło, że skoro samemu krytykujesz to zrób lepszy.
        </Excerpt>
        <Text>
            To też podjąłem rękawice, i stworzyłem pierwszą wersję "MovieAPP", gdzie wykorzystałem bogatą bibliotekę portalu, który jest znany na całym świecie - IMDb. Ideą tego projektu była możliwość dodania dowolnego dzieła kinematografii do działu ulubionych, przy jednoczesnej opcji z sprawdzeniu jego daty produkcji, osób które już zdołały obejrzeć, oceny, opisu oraz plakatu. Zadanie na pierwszy rzut oka zdawało się być bardzo trudne. Na szczęście ktoś kiedyś powiedział, że nie ma rzeczy nie możliwych. To też po wielogodzinnym szukaniu informacji w wyszukiwarce Google zdobyłem wiedzę jak taką aplikację webową stworzyć. Do tego dzieła wykorzystałem bibliotekę ReactJS, wraz z react-icons oraz axios. W części wizualnej użyłem idei CSS-in-JS, a mianowicie styled components, co umożliwiło mi pisanie komponentów wielokrotnego użytku - czyż nie jest to ekologia? Jeśli zainteresowała Ciebie taka aplikacja, to zapraszam do przetestowania, oraz o feedback.
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;