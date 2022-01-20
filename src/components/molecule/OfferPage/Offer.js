import React from 'react';
import offer from '../../../data/offer';
import OfferWrapper from '../../../styles/Containers/OfferWrapper';
import OfferItem from '../../atoms/OfferPage/OfferItem';

const Offer = () => {
    return(
        <OfferWrapper>
            {offer.offerItem.map( i => 
                <OfferItem
                    content={i.content}
                    key={i.id}
                    path={i.path}
                    poster={i.poster}
                    price={i.price}
                    title={i.title}
                />    
            )}
        </OfferWrapper>
    )
}

export default Offer;