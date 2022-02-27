import React from 'react';
import Button from '../../atom/HomePage/Button';
import SpecialTitle from '../../atom/HomePage/SpecialTitle';
import Text from '../../atom/HomePage/Text';
import TitlePage from '../../atom/HomePage/TitlePage';
import HeroWrapper from './styles/HeroWrapper';
const Hero = () => {
    return(
        <HeroWrapper>
            <div>
                <SpecialTitle>Cześć, nazywam się</SpecialTitle>
                <TitlePage title='Radosław Adamczyk'/>
                <Text>
                    <p className='main'>Jestem młodym programistą stron i aplikacji internetowych w topowych i rekomendowanych technologiach. Posiadam również doświadczenie pracy na stanowisku pozycjonera w jednej z firm o zasięgu ogólnopolskim. To wszystko daje mi potrzebne umiejętności do bycia specjalistą w tej branży. Obecnie jestem skoncentrowany na rozwoju w tymże kierunku, poprzez realizację projektów własnych i komercyjnych.</p>
                </Text>
                <Button
                    center={true}
                    path='/about'
                    title='Zobacz więcej'
                />
            </div>
        </HeroWrapper>
    )
}
export default Hero;