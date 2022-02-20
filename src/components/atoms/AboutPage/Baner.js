import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import AboutBanerWrapper from '../../../styles/Containers/AboutBanerWrapper';
import Text from '../../../styles/Text/Text';
import TitlePage from '../../../styles/Titles/TitlePage';
import TitleSection from '../../../styles/Titles/TitleSection';

const Baner = () => {
    return(
        <AboutBanerWrapper>
            <div className='head'>
                <div className='head__content'>
                    <div>
                        <TitlePage>
                            Kim jestem?
                        </TitlePage>   
                        <TitleSection>
                            Wszystko co warto o mnie wiedzieć
                        </TitleSection>                 
                    </div>
                    <div>
                        <Text>
                            Urodziłem się 9 października 2000 roku. Mieszkam w Donatowie w gminie Czempiń (województwo wielkopolskie). Od 2016 roku zacząłem się rozwijać w kierunku front/web developera. Przygodę w tej branży rozpocząłem od szczegółowego zapoznania się HTML i CSS jako rdzeń każdej strony, nie zależnie od użytego framework'u JavaScript. 
                        </Text>
                    </div>
                </div>
                <div className='head__image'>
                    <StaticImage    
                        src='https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/270036280_260706896160356_6959786809740748845_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gUfDc0uTZx8AX8iXBu6&_nc_ht=scontent-frx5-1.xx&oh=00_AT9VtISXw7u_UzNzpFmqknLR_6b26_mgfQO_31Z5ta-b0A&oe=62189BFE' 
                        layout='constrained'
                        placeholder='tracedSVG'
                        style={{
                            height:'100%',
                            objectFit:'cover',
                            objectPosition:'center',
                            width:'100%'
                        }}
                    />
                </div>
            </div>
            <div className='content'>
                <div className='content__item'>
                    <Text>
                        Moja ścieżka edukacji jest dość standardowa. Jestem absolwentem Szkoły Podstawowej im. gen. Józefa Rufina Wybickiego (2007-2013), Gimnazjum im. św. Jana Pawła II w Manieczkach (2013-2016) oraz Katolickiego Publicznego Akademickiego Liceum Ogólnokształcącego im. św. Jana Pawła II w Śremie o profilu matematyczno-fizyczno-informatyczno-historycznym (2016-2019). Dalsza edukacja w moim przypadku jest wyboista: rok propedeutyczny w Wyższym Arcybiskupim Seminarium Duchownym w Poznaniu (01-23/10.2019), szkoła policealna Cosinus na kierunku technik administracji (10/2019 - 06/2020), postulat w Wyższym Seminarium Zgromadzenia Księży świętego Michała Archanioła (09/2020-02/2021) i dla odmiany szkoła policealna Cosinus na kierunku technik administracji (09/2021 - teraz).
                    </Text>
                </div>
                <div className='content__item'>
                    <Text>
                        Kariera w branży IT na ten moment jest bardzo uboga, co nie znaczy, że nic nie robię kierunku wzbogacenia tej części życiorysu. W 2021 roku miałem przyjemność stworzenia stron dla <a href="https://borowkowy-gaj.pl/" target="_blank" rel='noopener noreferrer'>Borówkowego Gaju</a> oraz <a href="https://filip-bukowiecki-chi.vercel.app/" target="_blank" rel='noopener noreferrer'>Filipa Bukowieckiego</a>, a także wielu <a href="https://github.com/RadoslawAdamczyk2000?tab=repositories" target="_blank" rel='noopener noreferrer'>innych autorskich projektów</a>. Od października 2021 do stycznia 2022 pracowałem na stanowisku Pozycjonera w Sunrise System, co pozwoliło mi zdobyć bardzo potrzebną wiedzę z zakresu szeroko pojętego marketingu internetowego - optymalizacja sekcji head, nagłówków, analiza serwisu poprzez wykresy Google Analytics - oraz znajomości obsługi systemów zarządzania treścią - od popularnego WordPressa, Joomli, Shopera, PrestaShop, IdoSell po mało znane i autorskie rozwiązania CMS. Praca w Sunrise System dała mi wiedzę jak powinna wyglądać dobra strona, jakie treści powinny na niej się znajdować oraz jak profesjonalnie opiekować się klientem.
                    </Text>
                </div>
            </div>
        </AboutBanerWrapper>
    )
}

export default Baner; 
