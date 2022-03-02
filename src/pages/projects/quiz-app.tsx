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
        metaTitle='Quizy o programowaniu, pozycjonowaniu i historii - RadWEB'
        metaDescription='Aplikacja z quizami z wieloma kategoriami, w której sprawdzisz swoją wiedzę. Sprawdź już teraz!'
        >
    <HeroProject>
        <ReturnButton path='/projects'/>
        <Title title='QuizAPP - aplikacja quizowa z wielu dziedzin'></Title>
        <Stack stack={[
            tech.react,
            tech.html,
            tech.styledcomponents,
            tech.gatsby, 
            tech.typescript
        ]}/>
        <LinkPage path='https://quiz-app-lemon-theta.vercel.app/'/>
    </HeroProject>
    <MainPoster
        path='/static/ff23819522708966314b69c02df44d5b/quiz-app.png'
        title='Podstawy stron internetowych - HTML'
    ></MainPoster>
    <WrapperContent>
        <Excerpt>
            QuizApp to aplikacja, która jest w trakcie developmentu. Do napisania niej zainspirował mnie jeden z artykułów na blogu o tematyce front-endowej.
        </Excerpt>
        <Text>
            Za cel jaki sobie obrałem przy rozpoczęciu tego projektu, jest prakyczne wdrożenie TypeScripta - narzędzia, które dodaje magiczne moce do kochanego przez wszystkich front developerów JavaScriptu. Ponadto w tym projekcie podstawą będzie GatsbyJS wraz ze styled-components, które będzie odpowiedzialne za style dla aplikacji. Tutaj stawiam na minimalizm. Dlaczego? Dlatego, że programy tego typu nie wymagają fajerwerków, a i też jest taki trend im mniej tym lepiej. 
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;