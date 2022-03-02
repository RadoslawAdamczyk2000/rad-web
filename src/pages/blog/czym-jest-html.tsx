import React from 'react';
import HeroPost from '../../components/bacteria/ArticlePage/HeroPost';
import Layout from '../../templates/Layout';
import Excerpt from '../../components/atom/ArticlePage/Excerpt';
import Heading from '../../components/atom/ArticlePage/Heading';
import LinkPage from '../../components/atom/ArticlePage/LinkPage';
import MainPoster from '../../components/atom/ArticlePage/MainPoster';
import Source from '../../components/atom/ArticlePage/Source';
import Sources from '../../components/bacteria/ArticlePage/Sources';
import Text from '../../components/atom/ArticlePage/Text';
import Title from '../../components/atom/ArticlePage/Title';
import WrapperContent from '../../components/bacteria/ArticlePage/WrapperContent'
import ReturnButton from '../../components/atom/ArticlePage/ReturnButton';
const Page = () => {
    return(
        <Layout
        metaTitle='Czym jest HTML, podstawy stron internetowych, Śrem - RadWEB'
        metaDescription='Chcesz się dowiedzieć jak powstał najważniejszy język w technologiach internetowych - HTML? Z tego artykułu właśnie jaka była jego geneza. Zapraszam!'
        >
    <HeroPost>
        <ReturnButton path='/blog'/>
        <Title title='Czym jest HTML?'></Title>
        <Excerpt>
            Dla każdego kto rozpoczął swoją przygodę ze stronami internetowymi zna ten język. Istnieje wielki spór w środowisku developerów stron internetowych, jak określić tą techologię. Sami twórcy nazwali ją HyperText Markup Language, czyli hipertextowy język znaczników. Skoro HTML jest językiem opisowym, a nie programowania! Warto to zapamiętać, aby nie dać sobie powodu do niewybrednych zdań na nasz poziom wiedzy.
        </Excerpt>
    </HeroPost>
    <MainPoster
        path='https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063_960_720.jpg'
        title='Podstawy stron internetowych - HTML'
    ></MainPoster>
    <WrapperContent>
        <Heading>
            Historia języka znaczników.
        </Heading> 
        <Text>
            Ojcem założycielem tej przełomowej technoligii jest fizyk z ośrodka badawczego CERN - <b>Tim Berners-Lee</b>. W 1980 roku Tim stworzył prowizoryczny system informacyjny, który miał uroczą nazwę - <b>Enquire</b>, który był wykorzystywany do organizacji oraz współdzielenia dokumentów rzy wykorzystaniu internetu, co było rewolucją w tamtych czasach. Pierwszą specyfikacją HTML-a z 1991 roku było HTML Tags, zawierający w sobie aż 22 znaczniki, tworząc core szablonów stron internetowych. Ta wersja była oparta na SGML-u. SGML, czyli generalnie ustandaryzowany język znaczników, służący do ujednolicania struktur, a także formatów informacji.
        </Text>
        <Text>
           W 1993 roku kiedy to międzynarodowa stowarzyszenie zrzeszające osoby interesujące się standaradami technicznymi w internecie oraz w ogóle w świecie technologii - <b>IEFT</b>, opublikowało pierwszą ustandaryzowało specyfikację HTML-a autorstwa wcześniej wspomnianego ojca założyciela oraz <b>Dana Conolly</b>. Po swoistym przeterminowaniu tego standardu, organizacja córka IEFT-y, czyli <b>HTML Working Group</b>, w 1995 roku został wprowadzony do powszechnego użytku wersję noszącą miano HTML 2.0, w celu łatwego rozróżnienia standardu.
        </Text>
        <Text>
           Krokiem milowym w rozwoju podstawowej technologii stron internetowych, było opublikowanie 18 grudnia 1997 roku standardu <b>HTML 4.0</b> wraz z regularnie wprowadzanymi co raz to nowszymi i szerszymi aktualizacjami. Miało ono trzy swoje gałęzie:
           <br/>
            <b>Strict</b> - <i>zakaz użycia elementów przestarzałych</i>,
           <br/>
            <b>Transitional</b> - <i>dopszalne użytkowanie przestazałych elementy</i>,
           <br/>
            <b>Frameset</b> - <i>po chłopsku mówiąc, brak zasad</i>.
        </Text>
        <Heading>
            Teraźniejszość.
        </Heading> 
        <Text>
            Mimo tego, że nie jest to oficjalny standard, ale powszechnie jest stosowany <b>HTML 5</b>. Dlaczego? W tym miejscu mogę opowiedzieć jedynie o moim doświadczeniu. Prywatnie wiele mi dało wprowadzenie na szerszą skalę znaczników schematycznych, na przykład <b>nav</b>, <b>menu</b>, <b>figure</b>, <b>video</b> czy tez chociażby <b>pre</b>. Czemu jest obecnie tak istotne stosowanie znaczników schemantycznych? Pierwszym powodem, jest ułatwienie pracy sobie oraz innym deweloperom. Drugim równie istotnym powodem jest wyszukiwarka internetowa. Każdy piszący komercyjnie strony internetowe, chce aby jego dzieło było powszechnie podziwiane, a nie schowane do przysłowiowej szuflady. Dziś takie wyszukiwarki jak Google, zwracają szczególną uwagę na zaimplementowane tagi. Człowiek z zasady jest leniwy i najchętniej korzystałby jedynie z <b>div</b>. Z kolei inna osoba stwierdziłaby, być może słusznie, że jej tekst jest na tyle ciekawy i istotny, to też zamiast zwykłych paragrafów, każdą linijkę treści oplecie znacznikiem <b>h1</b>. To jest błędna droga.
        </Text>
        <Text>
           Wybrałem właśnie HTML, który jest podstawą wszystkich stron internetowych. To jest początek serii wpisów o technologiach frontend-owych. Nie ukrywam, że z czasem zamierzam napisać i nagrać krótkie filmiki, albo i nawet całe kursy oparte właśnie o ten cykl. Branża IT, a w szczególności ta część odpowiedzialna za strony internetowe nie wymaga szcczególnie wielkich nakładów finansowych, ponieważ oczekuje czegoś znacznie więcej niż pieniądze - czasu, a tego nie zyska się za pieniądze.
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;