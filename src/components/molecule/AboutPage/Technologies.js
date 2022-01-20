import React from 'react';
import TechnologiesWrapper from '../../../styles/Containers/TechnologiesWrapper';
import Text from '../../../styles/Text/Text';
import TitleSection from '../../../styles/Titles/TitleSection';
import Charts from  '../../atoms/AboutPage/Charts';


const Technologies = () => {
    return(
        <TechnologiesWrapper>
            <div className='content'>
                <TitleSection isHeading isCenter>
                    Technologie
                </TitleSection>
                <Text>
                    Posiadam szerokie umiejętności z zakresu tworzenia stron internetowych. Moje zainteresowania oscylują wokół technologii front-endowych, takich jak HyperTextMarkupLanguage od wersji 5, Cascading Style Sheets od wersji 3, JavaScript, ReactJS oraz Gatsby. Nie straszne są mi również Vue.js od wersji 2 oraz Personal Home Page Hypertext Preprocessor wraz z bazami danych MySQL. W czasach licealnych miałem okazję uczyć się jęzka C++, z którym zdecydowanie nie zaprzyjaźniłem się z kilku powodów. Pierwszym powodem jest jak dla mnie archaiczność i niezdatność wykorzystania go w mojej działce. Kolejnym powodem jest to, że niestety nie było widać od razu rezultatów w pracy, ponieważ żeby sprawdzić wynik swojego programowania, należało wpierw skompilować a następnie uruchomić aplikację konsolową jednocześnie debugując napisane po drodze błędy.<b>Poniższe wykresy, stanowią subiektywne odzwierciedlenie tego jak oceniam swoje umiejętności, na podstawie moich projektów oraz pracy komercyjnej.</b>Poniższe diagramy reprezentują moją wiedzę w skali od 0 do 10.
                </Text>
            </div>
            <div className='charts'>
                <div className='charts__item'>
                    <Charts isStack/>
                </div>
                <div className='charts__item'>
                    <Charts isCms/>
                </div>
            </div>
        </TechnologiesWrapper>
    )
}

export default Technologies;