import OfferCard from '../../atom/OfferPage/OfferCard';
import OffersWrapper from './styles/OffersWrapper';
import React from 'react';
import offer from '../../../data/offer';
const Offers = () => {
    return(
        <OffersWrapper>
            {offer.offerItem.map(({content,id,path,title,price,poster}) =>
                <OfferCard
                    description={content}
                    poster={poster}
                    key={id}
                    path={path}
                    price={price}
                    title={title}
                />
            )}
        </OffersWrapper>
    )
}
export default Offers;