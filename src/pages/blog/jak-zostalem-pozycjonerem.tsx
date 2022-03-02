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
        metaTitle='Jak zostałem pozycjonerem w Sunrise System, SEO - RadWEB'
        metaDescription='Chcesz dowiedzieć się jak zostałem pozycjonerem i jak w ogóle dostałem się do branży IT? Jakie mam pierwsze przemyślenia? Zapraszam do lektury!'
        >
    <HeroPost>
        <ReturnButton path='/blog'/>
        <Title title='Jak zostałem pozycjonerem?'></Title>
        <Excerpt>
            Zacznijmy od początku. Skąd w o ogóle zainteresowałem programowaniem? Od małego miałem pociąg do wszelakiej maści elektroniki, w szczególności do komputerów - ot takie życie ludzi na wsi, gdzie brak rówieśników, a do najbliższych sąsiadów ;w miałem 0,5 km. Każdy z nas, w czasach kiedy chodziliśmy do przedszkola, pierwszych klas podstawówki, mieliśmy marzenia, w których wyobrażaliśmy sobie kim będziemy gdy dorośniemy. Wtedy to w mojej małej główce marzyłem o tym, a to żeby zostać żołnierzem albo księdzem ... Niestety albo stety w trakcie formacji kapłańskiej w Arcybiskupim Seminarium Duchownym oraz rok później w Wyższym Seminarium Duchownym Księży Michalitów, życie się tak poukładało, że nie ma możliwości abym został księdzem w najbliższym czasie. Całe szczęście, że miałem pod ręką przysłowiowe koło ratunkowe. Tym kołem ratunkowym były dla mnie wcześniej wspomniane komputery, a doprecyzowując programowanie.
        </Excerpt>
    </HeroPost>
    <MainPoster
        path='https://cdn.pixabay.com/photo/2020/12/16/17/48/computer-5837248_960_720.jpg'
        title='Jak zostałem pozycjonerem - czego się nauczyłem?'
    ></MainPoster>
    <WrapperContent>
        <Heading>
            Początek przygody.
        </Heading> 
        <Text>
             Rzeczywistym startem w drodze do zostania programistą była jedna z lekcji infomratyki w gimnazjum, gdzie nauczyciel zaprezentował coś co miało namiastkę programowania, coś więcej niż poruszanie po pakiecie MS Office - HTML. Jedynie HTML, który skradł moje serce. Od tego momentu zacząłem po szkole pisać już pierwsze - z perspektywy czasu - prymitywne, bądź co bądź strony internetowe oparte o HTML5 i dedykowane znaczniki. Następnym krokiem rozwoju było poznanie baz danych MySQL podczas zajęć z rozszerzonej informatyki w liceum. Również w czasie szkoły średniej poznałem dogłębnie zagadnienia z zakresu stylowania i animowania stron w CSS, SCSS oraz JS. W tym czasie już zacząłem tworzyć strony z użyciem grida oraz flexboxa, co jest podstawą dzisiejszego responsywnego stylowania stron internetowych. W trakcie formacji kapłańskiej nie próżnowałem, bo jak wiemy z dorosłego życia, że wiedza nie używana ucieka. Dowodem mojej aktywności webdeveloperskiej są proste strony internetowe które znajdują się na moim profilu Github. Po definitywnym zakończeniu przygody z seminariami w lutym 2021 roku, po zapoznaniu się z ówczesnymi ofertami pracy dla junior front-end developerów zacząłem uczyć się podstaw biblioteki React.js w której to zbudowałem aplikację pogodową oraz o tematyce filmowej.
        </Text>
        <Heading>
            Motywacja do nauki.
        </Heading> 
        <Text>
            Żeby rozwijać się w kierunku IT, trzeba cały czas się uczyć. Z roku na rok, z miesiąca na miesiąc pojawiają się nowe narzędzia oraz frameworki, jak chociażby na przykład wypuszczony w grudniu Remix.js. Dla mnie ogromną motywacją do pracy w tym kierunku były przypadkowo znalezione smaczki oraz chęć zdobycia pracy o szerokich oraz przyszłościowych perspektywach. Kolejnym powodem, dla którego chciałem i chcę się rozwijać to są pomysły na nowe aplikacje, a także chęć zwizualizowania pomysłów na wyglądy stron internetowych. To właśnie te motywacje pchają również rozwój umiejętności, przez co staję się co raz lepszym developerem.
        </Text>
        <Heading>
            Życie SEO.
        </Heading> 
        <Text>
            Od lutego szukałem zatrudnienia w branży. Niestety, żeby zdobyć pracę na najniższe stanowisko w branży trzeba mieć minimum roczne doświadczenie pracy komercyjnej. Żeby zdobyć pracę w branży, trzeba mieć doświadczenie pracy w branży. Kuriozum. Vademecum na ten problem to była realizacja własnych projektów oraz pisanie stron internetowych dla swoich znajomych, co i tak nie jest określane mianem doświadczenia komerycjnego. W moim przypadku  Do pierwszej pracy w świecie IT dostałem się 5 października 2021 roku do poznańskiej firmy o zasięgu krajowym - Sunrise System. Tam poznałem podstawy pozycjonowania oraz jak powinna wyglądać profesjonalna komunikacja oraz obsługa klienta, który powinien stać w centrum naszych działań wedle polskiego przysłowia "klient nasz pan". Również w czasie tej pracy zdobyłem doświadczenie z zakresu rozmaitych panelów zarządzania treścią tj. WordPress, Joomla, Shopper, PrestaShop, IdoSell, a także wielu innych autorskich rozwiązań w tej dziedzinie. Podczas pracy w tej firmie, zdobyłem potrzebną wiedzę do efektywnego wykorzystania narzędzi Google, takich jak: GoogleSearchConsole, GoogleTagManager, GoogleTrends oraz GoogleAnalytics. To wszystko co nauczyłem się w tej firmie pozwoli mi rozwinąć skrzydła celem zostania świadomym front/web developerem.
        </Text>
        <Heading>
            Czy istnieje życie po SEO.
        </Heading> 
        <Text>
            Po zakończeniu umowy w styczniu 2022 roku, zacząłem szukać nowej pracy. Jednak teraz rodzi się następujące pytanie - dlaczego nie jesteś w Sunrise? Problem jest wielowymiarowy. Najistotniejszym powodem jest brak profesjonalnego podejścia do pracownika, gdzie informację o (nie)przedłużeniu umowy dostaje się na moment przed zakończeniem umowy. Kolejnym powodem jest niestety trochę olewcze podejście do klienta, gdzie jaki budżet klienta takie podejście - moje podejście jest takie, że klient to ktoś, dla kogo pracujemy, na nim budujemy swoją markę. Jakie mam plany na przyszłość? Rozsyłam CV po portalach pracy, gdzie mogę znaleźć oferty dla pozycjonerów, web oraz front-end developerów. Ponadto mam zamiar rozwinąć swoja markę co jest bardzo istotne. O dalszych krokach na tej drodze będę informował na bieżąco, dlatego zachęcam do śledzenia tej ścieżki.
        </Text>
    </WrapperContent>
</Layout>
)
}
export default Page;