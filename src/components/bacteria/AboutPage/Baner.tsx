import React from 'react';
import Poster from '../../atom/AboutPage/Poster';
import Text from '../../atom/AboutPage/Text';
import TitlePage from '../../atom/AboutPage/TitlePage';
import TitleSection from '../../atom/AboutPage/TitleSection';
const Baner = () => {
    return(
        <header>
            <div>
                <div>
                    <TitlePage
                        title='Kim jestem?'
                    />
                    <TitleSection
                        title='Deweloper, pozycjoner i nie tylko'
                    />
                </div>
                <Poster/>
            </div>
            <div>
                <Text>
                    Urodziłem się 9 października 2000 roku. Mieszkam w Donatowie w gminie Czempiń (województwo wielkopolskie). Od 2016 roku zacząłem się rozwijać w kierunku front/web developera. Przygodę w tej branży rozpocząłem od szczegółowego zapoznania się HTML i CSS jako rdzeń każdej strony, nie zależnie od użytego framework'u JavaScript.
                </Text>
                <Text>
                    Moja ścieżka edukacji jest dość standardowa. Jestem absolwentem Szkoły Podstawowej im. gen. Józefa Rufina Wybickiego (2007-2013), Gimnazjum im. św. Jana Pawła II w Manieczkach (2013-2016) oraz Katolickiego Publicznego Akademickiego Liceum Ogólnokształcącego im. św. Jana Pawła II w Śremie o profilu matematyczno-fizyczno-informatyczno-historycznym (2016-2019). Dalsza edukacja w moim przypadku jest wyboista: rok propedeutyczny w Wyższym Arcybiskupim Seminarium Duchownym w Poznaniu (01-23/10.2019), szkoła policealna Cosinus na kierunku technik administracji (10/2019 - 06/2020), postulat w Wyższym Seminarium Zgromadzenia Księży świętego Michała Archanioła (09/2020-02/2021) i dla odmiany szkoła policealna Cosinus na kierunku technik administracji (09/2021 - teraz).
                </Text>
                <Text>
                    Kariera w branży IT na ten moment jest bardzo uboga, co nie znaczy, że nic nie robię kierunku wzbogacenia tej części życiorysu. W 2021 roku miałem przyjemność stworzenia stron dla Borówkowego Gaju oraz Filipa Bukowieckiego, a także wielu innych autorskich projektów. Od października 2021 do stycznia 2022 pracowałem na stanowisku Pozycjonera w Sunrise System, co pozwoliło mi zdobyć bardzo potrzebną wiedzę z zakresu szeroko pojętego marketingu internetowego - optymalizacja sekcji head, nagłówków, analiza serwisu poprzez wykresy Google Analytics - oraz znajomości obsługi systemów zarządzania treścią - od popularnego WordPressa, Joomli, Shopera, PrestaShop, IdoSell po mało znane i autorskie rozwiązania CMS. Praca w Sunrise System dała mi wiedzę jak powinna wyglądać dobra strona, jakie treści powinny na niej się znajdować oraz jak profesjonalnie opiekować się klientem.
                </Text>
            </div>
        </header>
    )
}
export default Baner;