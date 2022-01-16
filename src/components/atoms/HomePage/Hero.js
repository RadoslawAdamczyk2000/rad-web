import ButtonPage from '../../../styles/Buttons/ButtonPage';
import React from 'react';
import Text from '../../../styles/Text/Text';
import TextSpecial from '../../../styles/Text/TextSpecial';
import TitlePage from '../../../styles/Titles/TitlePage';
import TitleSection from '../../../styles/Titles/TitleSection';
import BanerPage from '../../../styles/Containers/BanerPage';



const Hero = () => {
    return(
        <BanerPage>
            <div>
                <div>
                  <TextSpecial>
                    Cześć, nazywam się
                  </TextSpecial>
                  <TitlePage>
                    Radosław Adamczyk
                  </TitlePage>
                  <TitleSection>
                    Front i web developer, pozycjoner.
                  </TitleSection>
                </div>
                <div>
                  <Text>
                    Jestem młodym programistą stron i aplikacji internetowych w topowych i rekomendowanych technologiach. Posiadam również doświadczenie pracy na stanowisku pozycjonera w jednej z firm o zasięgu ogólnopolskim. To wszystko daje mi potrzebne umiejętności do bycia specjalistą w tej branży. Obecnie jestem skoncentrowany na rozwoju w tymże kierunku, poprzez realizację projektów własnych i komercyjnych.
                  </Text>
                </div>
                <div>
                  <ButtonPage>
                    Zobacz więcej
                  </ButtonPage>
                </div>
              </div>
        </BanerPage>
    )
}

export default Hero;