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
        metaTitle='Agromar, strony internetowe i SEO Śrem, Poznań - RadWEB'
        metaDescription='Chcesz zobaczyć realizajcę strony, dla jednego z najlepiej propserujących eksporterów warzyw? Jeśli tak, to zapraszam do lektury.'
        >
    <HeroProject>
        <ReturnButton path='/projects'/>
        <Title title='Agromar - warzywa na eksport'></Title>
        <Stack stack={[
            tech.html,
            tech.styledcomponents,
            tech.react,
            tech.gatsby
        ]}/>
        <LinkPage path='https://agromar.netlify.app/'/>
    </HeroProject>
    <MainPoster
        path='https://github.com/RadoslawAdamczyk2000/rad-web-content/blob/main/projekty/zdjecia/agromar.png?raw=true'
        title='Agromar - warzywa na eksport'
    ></MainPoster>
    <WrapperContent>
        <Excerpt>
            Na początku lutego 2022 roku napisał do mnie pan Mateusz Wasiewicz - właściel firmy specjalizującej się w eksporcie obranych warzyw do Czech i Niemiec. Pan Mateusz zlecając stronę dał mi wolną rękę, z dwoma warunkami: strona ma być prosta i posiadać możliowść przełączania się między językami.
        </Excerpt>
        <Text>
            Do tego projektu strony internetowej oczywistym było dla mnie wykorzytsanie popularnego frameworka biblioteki React - GatsbyJS. Zdecydowałem się na wykorzystanie z tego narzędzia, ponieważ tworzenie w nim stron to jak układanie klocków. Wiele elementów na stronie jest identycznych poza treścią, gdzie z wiadomych przyczyn musi się zmieniać. Ktoś powie, że do tego projektu mogłem wykorzystać chociażby Reacta lub PHP. Z czystego Reacta nie miałem zamiaru korzystać, dlatego że ma bardzo słabe wsparcie dla pozycjonowania stron internetowych, co w XXI wieku jest istotne. PHP też odrzuciłem, ponieważ chciałem podszkolić swoje umiejętności z JavaScriptu oraz wielu możliwości zaimplementowania backendu bez użycia jęzka backednowego.
        </Text>
        <Text>
            Mając świadomość tego, że klient jest tzw. <i>"nietechniczny"</i>, konieczne było zaimplementowanie systemu zarządzania treścią (CMS), w którym swobodnie mógłby edytować treść wedle swojej woli. Mój wybór przy dodawaniu CMS do tej strony internetowej padł na DatoCMS. To narzędzie ma wspaniałe wsparcie do Gatsby-iego po przez odpowiednie rozszerzenia.
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;