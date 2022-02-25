import OfferCard from '../../atom/OfferPage/OfferCard';
import OffersWrapper from './styles/OffersWrapper';
import React from 'react';
const Offers = () => {
    return(
        <OffersWrapper>
            <OfferCard
                description='Strona internetowa typu one-page z kilkoma podstronami. Strona ta jest zbudowana z treści oraz obrazków przesłanych przez klienta.'
                path='#'
                price={600}
                title='WWW mini'
            />
            <OfferCard
                description='Strona internetowa typu one-page z kilkoma podstronami. Strona ta jest zbudowana z treści oraz obrazków przesłanych przez klienta.'
                path='#'
                price={600}
                title='WWW mini'
            />
            <OfferCard
                description='Strona internetowa typu one-page z kilkoma podstronami. Strona ta jest zbudowana z treści oraz obrazków przesłanych przez klienta.'
                path='#'
                price={600}
                title='WWW mini'
            />
            <OfferCard
                description='Strona internetowa typu one-page z kilkoma podstronami. Strona ta jest zbudowana z treści oraz obrazków przesłanych przez klienta.'
                path='#'
                price={600}
                title='WWW mini'
            />
        </OffersWrapper>
    )
}
export default Offers;