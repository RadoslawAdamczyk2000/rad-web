import Cities from './styles/Cities';
import React from 'react';
import Text from '../../atom/HomePage/Text';
import TitleSection from '../../atom/HomePage/TitleSection';
import SectionImage from '../../atom/HomePage/SectionImage';
import Sections from './styles/Sections';
const Www = () => {
    return(
        <>
            <div className='sections'>
                <Sections>
                    <section>
                        <TitleSection isSmall={true} title='Strony internetowe'/>
                        <Text>Strony internetowe to trzon mojej działalności. Miałem przyjemność stworzyć już kilka komercyjnych stron internetowych, które charakteryzują się schludnym kodem oraz zadowolonymi klientami. W moich stronach internetowych wykorzystuję wiele technologii w zależności od potrzeb. Również praca pozycjonera dała mi możliwość zweryfikowania jak NIE powinna wyglądać strona www. Kładzę główny nacisk na UX (<i>User Experience</i>), RWD (<i>dopasowanie stron pod przeglądarki mobilne</i>) oraz znaczniki semantyczne, ułatwiające pozycjonowanie.</Text>
                    </section>
                    <section>
                        <TitleSection isSmall={true} title='Strony internetowe z panelami zarządzania'/>
                        <Text>Istotnym elementem współpracy z klientem jest dostarczenie produktu, który samodzielnie może edytować. W stronach internetowych odpowiada za to CMS (<i>system zarządzania treścią</i>). Obecnie istnieje wiele tego typu narzędzi. Osobiście najczęściej spotykam i pracuję z WordPressem, z którego korzysta ok.<b>60%</b> stron www w sieci. Ponadto wykorzystuję tzw. headless CMS, czyli systemy zarządzania treścią bez głowy - w tym segmencie dominuje Prismic.io oraz DatoCms. Największym arsenałem jaki posiadają jest modularność komponentów, czyli umiejętność spersonalizowanego segmentów stron. Wiele stron internetowych posiada CMS-y, które nie są przyjazne użytkownikom nietechnicznym. Stawiam na jakość i przejżystość - to są zasady jakimi się kieruję.</Text>
                    </section>
                </Sections>
            </div>
            <SectionImage 
                center={true}
                end={false}
                imagePath='/static/0e11df28ed2f29bf2a1bb8f938ed6f0d/projects.svg'
                start={false}
            />
            <div>
                <Sections>
                    <section>
                        <TitleSection isSmall={true} title='Strony wizytówkowe'/>
                        <Text>Najlepszym sposobem na pokazanie się w sieci są strony wizytówkowe, zwane również stronami internetowymi typu portfolio. Tego typu witryny internetowe pozwalają na kreatywne tworzenie tworzenie. Czemu? Obecnie w internecie jest ponad 1.88 mld stron. Każda z nich posiada coś charaketerystycznego. Jedne są brzydkie, inne zaś zachwycają oko. Ja dążę do tego aby każda strona internetowa miała swój unikalny styl. Przy użyciu narzędzi ułatwiających dobór kolorów, biblioteki bogatej w czcionki oraz repozytoriów z bezpłatnymi grafikami to niezawodna amunicja do pomysłowego tworzenia stron.</Text>
                    </section>
                    <section>
                        <TitleSection isSmall={true} title='Blogi'/>
                        <Text>Blogi to ciężka artyleria. Każdy artykuł to nowy karabin. Blogi to narzędzie, w którym prezentujemy swoją ekspercką wiedzę w wyczerpujących i obszernych tekstach. Strony blogowe wymagają tego aby były szybkie. Nikt nie będzie czekał na załadowanie treści przez 10 minut. Odpowiednie zastosowanie zdjęć, czytelna typografia oraz prawidłowy kontrast w stosunku tła do czcionki pozwala na zatrzymanie u siebie użytkowników.</Text>
                    </section>
                </Sections>
            </div>
            <SectionImage 
                center={true}
                end={false}
                imagePath='/static/9085e207e20c8356df332d69d72572a6/tutorial.svg'
                start={false}
            />
            <div>
                <Sections>  
                    <section>
                        <TitleSection isSmall={true} title='Pozycjonowanie'/>
                        <Text>Jeżeli już posiadasz stronę internetową to pewnie chcesz aby strona pojawiała się jak najwyżej w wynikach wyszukiwania. Za takie działania odpowiada pozycjonowanie. Wedle statystyk najwięcej wyświetleń oraz kliknięć posiadają strony, które po wpisaniu w wyszukiwarce Google interesującej nas frazy znajdują się w pierwszych wynikach wyszukiwania. Elementami wpływającymi na poziom indeksu strony są teksty nasycone słowami kluczowymi, odpowiednie grafiki oraz przemyślana struktura strony.</Text>
                    </section>
                    <section>
                        <TitleSection isSmall={true} title='Optymalizacja'/>
                        <Text>Optymalizacja to jest szereg działań pozycjonerskich. Polegają one na uważnym śledzeniu statystyk, wdrażaniu treści na strony o charakterze eksperckim, potwierdzających naszą wiedzę w temacie. W kolejnych krokach aktualizuje się znaczniki znajdujące się w znacznikach head, czyli meta tytuł i opis stron internetowych oraz zrewidowanie zawartości znaczników nagłówków tytułowych.</Text>
                    </section>
                </Sections>
            </div>
            <SectionImage 
                center={true}
                end={false}
                imagePath='/static/0e3a533b8e5a4c8bd797551737ce8f85/design.svg'
                start={false}
            />

            
            <Cities>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Śrem.'/>
                    <Text>
                        Posiadasz firmę w Śremie i okolicach Śremu? Chcesz zaistnieć w śremskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Poznań.'/>
                    <Text>
                        Posiadasz firmę w Poznaniu i okolicach Poznania? Chcesz zaistnieć w poznańskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Leszno.'/>
                    <Text>
                        Posiadasz firmę w Lesznie i okolicach Leszna? Chcesz zaistnieć w leszczyńskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Kościan.'/>
                    <Text>
                        Posiadasz firmę w Kościanie i okolicach Kościana? Chcesz zaistnieć w kościańskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Gostyń.'/>
                    <Text>
                        Posiadasz firmę w Gostyniu i okolicach Gostynia? Chcesz zaistnieć w gostyńskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Kalisz.'/>
                    <Text>
                        Posiadasz firmę w Kaliszu i okolicach Kalisza? Chcesz zaistnieć w kaliskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Pleszew.'/>
                    <Text>
                        Posiadasz firmę w Pleszewie i okolicach Pleszewa? Chcesz zaistnieć w pleszewskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Piła.'/>
                    <Text>
                        Posiadasz firmę w Pile i okolicach Piły? Chcesz zaistnieć w pilskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Dolsk.'/>
                    <Text>
                        Posiadasz firmę w Dolsku i okolicach Dolska? Chcesz zaistnieć w dolszczańskiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
                <section>
                    <TitleSection isSmall={true} title='Strony internetowe i pozycjonowanie Kórnik.'/>
                    <Text>
                        Posiadasz firmę w Kórniku i okolicach Kórnika? Chcesz zaistnieć w kórniczkiej przestrzeni internetowej? Korzystając z mojej oferty tworzenia i pozycjonowania stron internetowych dokonasz najlepszego wyboru.
                    </Text>
                </section>
            </Cities>
        </>
    )
}
export default Www;