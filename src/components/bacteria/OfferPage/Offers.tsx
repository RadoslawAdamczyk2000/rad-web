import React from 'react';
import OfferCard from '../../atom/OfferPage/OfferCard';
const Offers = () => {
    return(
        <div>
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
        </div>
    )
}
export default Offers;